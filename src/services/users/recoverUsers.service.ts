import { client } from "../../database";
import { tUserResponse, UserResult } from "../../interfaces";
import { AppError } from "../../errors";
import { noPasswaordUserSchema } from "../../schemas";

export const recoverUserService = async (
  id: number
): Promise<tUserResponse> => {
  const querySelect: UserResult = await client.query(
    "SELECT * FROM users WHERE id = $1;",
    [id]
  );

  if (querySelect.rows[0].active === true)
    throw new AppError("User already active", 400);

  const queryResult: UserResult = await client.query(
    "UPDATE users SET active = true WHERE id = $1 RETURNING *;",
    [id]
  );

  return noPasswaordUserSchema.parse(queryResult.rows[0]);};
