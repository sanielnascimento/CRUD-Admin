import {
    UserWithoutPassword,
    UserResult,
  } from "../../interfaces";
  import { client } from "../../database";
  import format from "pg-format";
  
  export const retrieveUserService = async (
    id: number
  ): Promise<UserWithoutPassword> => {
    const queryString: string = format(`
    SELECT 
        users.id, 
        users.name, 
        users.email, 
        users.admin, 
        users.active 
    FROM 
        users
    WHERE id = (%s);`,
     id);
    const queryResult: UserResult = await client.query(queryString);  
    return queryResult.rows[0];
  };

  