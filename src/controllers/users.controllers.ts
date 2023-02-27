import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  listUsersService,
  recoverUserService,
  retrieveUserService,
  updateUserService,
} from "../services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(201).json(await createUserService(req.body));
};

export const listUsersController = async (_: Request, res: Response): Promise<Response> => {
  return res.json(await listUsersService());
};

export const retrieveUserController = async (req: Request, res: Response): Promise<Response> => {
  return res.json(await retrieveUserService(Number(req.user.id)));
};

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(await updateUserService(req.body, Number(req.params.id)));
};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  await deleteUserService(Number(req.params.id));
  return res.status(204).send();
};

export const recoverUserController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(await recoverUserService(Number(req.params.id)));
};
