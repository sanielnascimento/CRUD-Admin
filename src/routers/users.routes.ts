import { Router } from "express";
import { createUserController, retriveUserController } from "../controllers";
import { verifyEmailExistMiddleware } from "../middlewares";

export const usersRoutes: Router = Router();

usersRoutes.post("", verifyEmailExistMiddleware, createUserController);
usersRoutes.get("/:id", retriveUserController);
