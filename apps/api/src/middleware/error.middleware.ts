import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/error.utils";
import logger from "../utils/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);

  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      error: {
        message: err.message,
        status: err.statusCode,
      },
    });
    return;
  }
  // Log the error
  logger.error(`Error: ${err.message}`, {
    path: req.path,
    method: req.method,
    stack: err.stack,
  });
  // Handle Prisma errors
  if (err.name === "PrismaClientKnownRequestError") {
    res.status(400).json({
      error: {
        message: "Database operation failed",
        status: 400,
      },
    });
    return;
  }

  // Default error
  res.status(500).json({
    error: {
      message: "Internal server error",
      status: 500,
    },
  });
};
