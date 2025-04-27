import { ZodError, ZodSchema } from "zod";
import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/error.utils";

export const validate = <T>(schema: ZodSchema<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = schema.parse(req.body);
      req.body = data;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        }));

        res.status(400).json({
          error: {
            message: "Validation failed",
            details: formattedErrors,
          },
        });
        return;
      }
      next(new ApiError(400, "Invalid input data"));
    }
  };
};
