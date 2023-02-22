import { Router } from "express";
import { createUserController, listUsersController } from "../controllers";
import { verifyEmailExistMiddleware } from "../middlewares";

export const usersRoutes: Router = Router();

usersRoutes.post("", verifyEmailExistMiddleware, createUserController);
usersRoutes.get("", listUsersController);
