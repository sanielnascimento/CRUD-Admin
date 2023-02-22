import { client } from "../../database";
import format from "pg-format";

export const deleteUserService = async (id: number): Promise<void> => {
  const queryString: string = format("UPDATE users SET active = false WHERE id = (%s);", id);
  await client.query(queryString);
};
