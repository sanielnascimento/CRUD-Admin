import { Router } from "express";
import { createUserController, listUsersController, deleteUserController } from "../controllers";
import { validateDataMiddleware, verifyEmailExistMiddleware, verifyUserExistMiddleware } from "../middlewares";
import { createUserSchema } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post("", verifyEmailExistMiddleware, validateDataMiddleware(createUserSchema), createUserController);
usersRoutes.get("", listUsersController);
usersRoutes.delete("/:id", verifyUserExistMiddleware, deleteUserController);
