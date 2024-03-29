import { tUserRequest, tUserResponse, UserResult } from "../../interfaces";
import { client } from "../../database";
import format from "pg-format";
import { noPasswaordUserSchema } from "../../schemas";

export const createUserService = async ( body: tUserRequest): Promise<tUserResponse> => {
  const queryResult: UserResult = await client.query(
    format(
      "INSERT INTO users (%I) VALUES (%L) RETURNING *;",
      Object.keys(body),
      Object.values(body)
    )
  );

  return noPasswaordUserSchema.parse(queryResult.rows[0]);
};
