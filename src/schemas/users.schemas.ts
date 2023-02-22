import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email().max(100),
    password: z.string().max(120),
    admin: z.boolean().optional()
})

export const userReturnSchema = createUserSchema.extend({
    id: z.number(),
    active: z.boolean()
})

export const userReturnWithoutPasswordSchema = userReturnSchema.omit({password: true})