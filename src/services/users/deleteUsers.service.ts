import { client } from "../../database";

export const deleteUserService = async (id: number): Promise<void> => {
  await client.query("UPDATE users SET active = false WHERE id = $1;", [id]);
};
