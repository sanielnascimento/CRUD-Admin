import { UserWithoutPassword } from "../../interfaces";
import { client } from "../../database";
import format from "pg-format";

export const listUsersService = async (): Promise<
  Array<UserWithoutPassword>
> => {
  const queryString: string = format(`
    SELECT 
        users.id, 
        users.name, 
        users.email, 
        users.admin, 
        users.active 
    FROM 
        users;`);
  const queryResult = await client.query(queryString);
  return queryResult.rows;
};
