import {
    iUserRequest,
    UserWithoutPassword,
    UserResult,
  } from "../../interfaces";
  import { client } from "../../database";
  import format from "pg-format";
  
  export const createUserService = async (
    data: iUserRequest
  ): Promise<UserWithoutPassword> => {
    const queryTemplate: string = format(
      `
      INSERT INTO users (%I)
      VALUES (%L)
      RETURNING id, name, email, admin, active;
      `,
      Object.keys(data),
      Object.values(data)
    );
    const queryResult: UserResult = await client.query(queryTemplate);
  
    return queryResult.rows[0];
  };