import { hashSync } from "bcryptjs";
import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string().min(3).max(20),
  email: z.string().email().max(100),
  password: z
    .string()
    .max(120)
    .transform((pass) => hashSync(pass, 10)),
  admin: z.boolean().optional(),
  active: z.boolean(),
});

export const updateUserSchema = z
  .object({
    name: z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: z.string().max(120).transform((pass) => hashSync(pass, 10)),
  }).partial();

export const createUserSchema = userSchema.omit({ active: true, id: true });

export const noPasswaordUserSchema = userSchema.omit({ password: true });

export const allNoPassUsersSchema = z.array(noPasswaordUserSchema);
