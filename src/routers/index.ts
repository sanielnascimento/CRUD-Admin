import { usersRoutes } from "./users.routes";
import { loginRoutes } from "./login.routes";
import { Router } from "express";

export const router: Router = Router();

router.use("/users", usersRoutes);
router.use("/login", loginRoutes);