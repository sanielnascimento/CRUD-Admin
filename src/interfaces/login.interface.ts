import { QueryResult } from "pg";
import { loginSchema } from "../schemas";
import { z } from "zod";

export type tLoginRequest = z.infer<typeof loginSchema>;