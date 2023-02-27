import { tUserResponse, UserResult } from "../../interfaces";
import { client } from "../../database";
import { noPasswaordUserSchema } from "../../schemas";

export const retrieveUserService = async (
  id: number
): Promise<tUserResponse> => {
  const queryResult: UserResult = await client.query(
    "SELECT * FROM users WHERE id = $1;",
    [id]
  );
  return noPasswaordUserSchema.parse(queryResult.rows[0]);
};
