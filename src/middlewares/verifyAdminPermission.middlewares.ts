import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { AppError } from "../errors";

export const verifyAdminMiddleware = async (
  req: Request,
  _: Response,
  next: NextFunction
): Promise<Response | void> => {
  if (req.user.admin !== true)
    throw new AppError("Insufficient Permission", 403);

  return next();
};
