import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors";

export const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) throw new AppError("Missing Bearer Token", 401);

  jwt.verify(token!, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) throw new AppError(error.message, 401);
    req.user = { id: Number(decoded.sub), admin: decoded.admin };
  });

  return next();
};
