import { tUpdateRequest, tUserResponse, UserResult } from "../../interfaces";
import { client } from "../../database";
import format from "pg-format";
import { noPasswaordUserSchema } from "../../schemas";

export const updateUserService = async (
  body: tUpdateRequest,
  id: number
): Promise<tUserResponse> => {
  const queryResult: UserResult = await client.query(
    format(
      "UPDATE users SET (%I) = ROW (%L) WHERE id = (%s) RETURNING *;",
      Object.keys(body),
      Object.values(body),
      id
    )
  );

  return noPasswaordUserSchema.parse(queryResult.rows[0]);
};
