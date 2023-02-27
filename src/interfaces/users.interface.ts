import { QueryResult } from "pg";
import { userSchema, createUserSchema, noPasswaordUserSchema, updateUserSchema } from "../schemas";
import { z } from "zod";

export type tUserRequest = z.infer<typeof createUserSchema>;
export type tUpdateRequest = z.infer<typeof updateUserSchema>;
export type tUser = z.infer<typeof userSchema>;
export type tUserResponse = z.infer<typeof noPasswaordUserSchema>;
export type FullUserResult = QueryResult<tUser>;                                  
export type UserResult = QueryResult<tUserResponse>;                                  