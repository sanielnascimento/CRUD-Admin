import {
  iUserRequest,
  UserWithoutPassword,
  UserResult,
} from "../../interfaces";
import { client } from "../../database";
import format from "pg-format";
import { userReturnWithoutPasswordSchema } from "../../schemas";

export const createUserService = async (
  data: iUserRequest
): Promise<UserWithoutPassword> => {
  const queryTemplate: string = format(
    `
      INSERT INTO users (%I)
      VALUES (%L)
      RETURNING *;
      `,
    Object.keys(data),
    Object.values(data)
  );
  const queryResult: UserResult = await client.query(queryTemplate);
  const newUser = userReturnWithoutPasswordSchema.parse(queryResult.rows[0]);
  return newUser;
};
