import { Request, Response, NextFunction } from "express";
import format from "pg-format";
import { AppError } from "../errors";
import { iUserRequest, UserResult } from "../interfaces";
import { client } from "../database";

export const verifyEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { email }: iUserRequest = req.body;
  const queryString: string = format(
    `SELECT * FROM users WHERE email = (%L);`,
    email
  );

  const queryResult: UserResult = await client.query(queryString);

  if (queryResult.rowCount > 0) {
    throw new AppError("E-mail already registered!", 409);
  }

  return next();
};

export const verifyUserExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(req.params.id);
  const queryString: string = format(
    `SELECT * FROM users WHERE id = (%s);`,
    id
  );

  const queryResult: UserResult = await client.query(queryString);

  if (queryResult.rowCount === 0) {
    throw new AppError("User not found!", 404);
  }

  return next();
};
