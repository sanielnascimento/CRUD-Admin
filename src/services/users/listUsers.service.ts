import { tUserResponse, UserResult } from "../../interfaces";
import { client } from "../../database";
import { allNoPassUsersSchema } from "../../schemas";

export const listUsersService = async (): Promise<Array<tUserResponse>> => {
  const queryResult: UserResult = await client.query("SELECT * FROM users;");
  return allNoPassUsersSchema.parse(queryResult.rows);
};
