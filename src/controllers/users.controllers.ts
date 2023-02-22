import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listUsersService,
} from "../services";
import { iUserRequest } from "../interfaces";

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

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const id: number = Number(req.params.id);
  await deleteUserService(id);
  return res.status(204).send();
};
