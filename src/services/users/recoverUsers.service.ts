import { client } from "../../database";
import { tUserResponse, UserResult } from "../../interfaces";
import { AppError } from "../../errors";
import { userSchema } from "../../schemas";

export const recoverUserService = async (
  id: number
): Promise<tUserResponse> => {
  let queryResult: UserResult = await client.query(
    "SELECT * FROM users WHERE id = $1;",
    [id]
  );

  if (queryResult.rows[0].active === true)
    throw new AppError("User already active", 400);

  queryResult = await client.query(
    "UPDATE users SET active = true WHERE id = $1;",
    [id]
  );

  return userSchema.parse(queryResult.rows[0]);
};
