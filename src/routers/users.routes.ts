import { Router } from "express";

import {
  createUserController,
  listUsersController,
  retrieveUserController,
  updateUserController,
  deleteUserController,
  recoverUserController,
} from "../controllers";

import {
  validateDataMiddleware,
  verifyEmailExistMiddleware,
  verifyUserExistMiddleware,
  verifyTokenMiddleware,
  verifyAdminMiddleware,
  verifyAllPermissionsMiddleware,
} from "../middlewares";

import { createUserSchema, updateUserSchema } from "../schemas";

export const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  validateDataMiddleware(createUserSchema),
  verifyEmailExistMiddleware,
  createUserController
);

usersRoutes.get(
  "",
  verifyTokenMiddleware,
  verifyAdminMiddleware,
  listUsersController
);

usersRoutes.get("/profile", verifyTokenMiddleware, retrieveUserController);

usersRoutes.patch(
  "/:id",
  verifyTokenMiddleware,
  verifyAllPermissionsMiddleware,
  validateDataMiddleware(updateUserSchema),
  verifyUserExistMiddleware,
  verifyEmailExistMiddleware,
  updateUserController
);

usersRoutes.delete(
  "/:id",
  verifyTokenMiddleware,
  verifyAllPermissionsMiddleware,
  verifyUserExistMiddleware,
  deleteUserController
);

usersRoutes.put(
  "/:id/recover",
  verifyTokenMiddleware,
  verifyAdminMiddleware,
  verifyUserExistMiddleware,
  recoverUserController
);
