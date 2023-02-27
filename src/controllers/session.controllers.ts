import { Request, Response } from "express";
import { loginSessionService } from "../services";

export const loginSessionController = async (req: Request, res: Response): Promise<Response> =>
  res.status(201).json(await loginSessionService(req.body));
