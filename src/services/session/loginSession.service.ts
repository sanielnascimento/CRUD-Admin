import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { client } from "../../database";
import { AppError } from "../../errors";
import { FullUserResult, tLoginRequest } from "../../interfaces";
import "dotenv/config";

export const loginSessionService = async ({
  email,
  password,
}: tLoginRequest): Promise<Object> => {
  const queryResult: FullUserResult = await client.query(
    "SELECT * FROM users WHERE email = $1;",
    [email]
  );

  if (queryResult.rowCount === 0)
    throw new AppError("Wrong password or email!", 401);

  const matchPass: boolean = await compare(
    password,
    queryResult.rows[0].password
  );

  if (!matchPass) throw new AppError("Wrong password or email!", 401);

  const token: string = jwt.sign(
    { admin: queryResult.rows[0].admin },
    process.env.SECRET_KEY!,
    {
      subject: queryResult.rows[0].id.toString(),
      expiresIn: "24h",
    }
  );

  return { token };
};
