import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { AppError } from "../errors";
import { UserResult } from "../interfaces";
import { client } from "../database";

export const verifyEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const queryResult: UserResult = await client.query(
    format("SELECT * FROM users WHERE email = (%L);", req.body.email)
  );

  if (queryResult.rowCount > 0)
    throw new AppError("E-mail already in use!", 409);

  return next();
};

export const verifyUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const queryResult: UserResult = await client.query(
    format("SELECT * FROM users WHERE id = (%s);", Number(req.params.id))
  );

  if (queryResult.rowCount === 0) throw new AppError("User not found!", 404);

  return next();
};
