import { Request, Response } from "express";
import { createUserService, listUsersService } from "../services";
import { iUser, iUserRequest } from "../interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: iUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

export const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersService();
  return res.json(users);
};
