import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { prismaClient as prisma } from "@repo/db/client";
import { ApiError } from "../utils/error.utils";

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
      };
    }
  }
}

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      console.log("Authentication failed: No token provided");
      throw new ApiError(401, "Authentication required");
    }

    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        userId: string;
      };

      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user) {
        console.log("Authentication failed: User not found for token");
        throw new ApiError(401, "Invalid token");
      }

      // Attach user to request
      req.user = { id: user.id };

      next();
    } catch (jwtError: any) {
      console.log("JWT verification failed:", jwtError.message);
      // Check if token is expired
      if (jwtError.name === "TokenExpiredError") {
        throw new ApiError(401, "Token expired");
      } else {
        throw new ApiError(401, "Invalid token");
      }
    }
  } catch (error) {
    next(error);
  }
};
