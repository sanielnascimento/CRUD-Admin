import { Router } from "express";
import { createUserController, listUsersController, deleteUserController } from "../controllers";
import { verifyEmailExistMiddleware, verifyUserExistMiddleware } from "../middlewares";

export const usersRoutes: Router = Router();

usersRoutes.post("", verifyEmailExistMiddleware, createUserController);
usersRoutes.get("", listUsersController);
usersRoutes.delete("/:id", verifyUserExistMiddleware, deleteUserController);
