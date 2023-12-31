import { z } from "zod";
import { NextFunction, Request, Response } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({ message: error.flatten().fieldErrors });
  }
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  console.log(error);
  return res.status(500).json({ message: "Internal server Error" });
};
