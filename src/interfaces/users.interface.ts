import { QueryResult } from "pg";
import {
  createUserSchema,
  userReturnSchema,
  userReturnWithoutPasswordSchema,
} from "../schemas";
import { z } from "zod";

export type iUserRequest = z.infer<typeof createUserSchema>;
export type iUser = z.infer<typeof userReturnSchema>;
export type UserWithoutPassword = z.infer<typeof userReturnWithoutPasswordSchema>;
export type UserResult = QueryResult<UserWithoutPassword>;