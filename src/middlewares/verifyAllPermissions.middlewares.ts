import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { AppError } from "../errors";

export const verifyAllPermissionsMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<Response | void> => {
  if (req.user.admin !== true && Number(req.user.id) !== Number(req.params.id))
    throw new AppError("Insufficient Permission", 403);
    
  return next();
};
