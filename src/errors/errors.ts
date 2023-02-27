import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err: Error, r: Request, res: Response, _: NextFunction) => {
  err instanceof AppError && res.status(err.statusCode).json({ message: err.message });
  err instanceof ZodError && res.status(400).json(err.flatten().fieldErrors);

  console.error(err.message);
  return res.status(500).json({ message: "Internal Server Error." });
};
