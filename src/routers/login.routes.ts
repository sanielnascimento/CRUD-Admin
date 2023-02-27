import { Router } from "express";
import { loginSessionController } from "../controllers";
import { validateDataMiddleware } from "../middlewares";
import { loginSchema } from "../schemas";

export const loginRoutes: Router = Router();

loginRoutes.post(
  "",
  validateDataMiddleware(loginSchema),
  loginSessionController
);
