import { Router } from "express";
import { createUserController, retriveUserController } from "../controllers";

export const usersRoutes: Router = Router();

usersRoutes.post("", createUserController);
usersRoutes.get("/:id", retriveUserController);
