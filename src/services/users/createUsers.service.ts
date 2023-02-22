import {
  iUserRequest,
  UserWithoutPassword,
  UserResult,
} from "../../interfaces";
import { client } from "../../database";
import format from "pg-format";
import {
  createUserSchema,
  userReturnWithoutPasswordSchema,
} from "../../schemas";

export const createUserService = async (
  data: iUserRequest
): Promise<UserWithoutPassword> => {
  const validatedData = createUserSchema.parse(data);
  const queryTemplate: string = format(
    `
      INSERT INTO users (%I)
      VALUES (%L)
      RETURNING *;
      `,
    Object.keys(validatedData),
    Object.values(validatedData)
  );
  const queryResult: UserResult = await client.query(queryTemplate);
  const newUser = userReturnWithoutPasswordSchema.parse(queryResult.rows[0]);
  return newUser;
};
