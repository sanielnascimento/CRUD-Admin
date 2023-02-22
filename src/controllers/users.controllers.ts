import { Request, Response } from "express";
import { createUserService, retrieveUserService } from "../services";
import { iUser, iUserRequest } from "../interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: iUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

export const retriveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id);
  const user = await retrieveUserService(userId)
  return res.json(user);
};
