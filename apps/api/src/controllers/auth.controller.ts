import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prismaClient as prisma } from "@repo/db/client";
import { generateRefreshToken, generateToken } from "../utils/token.utils";
import { ApiError } from "../utils/error.utils";
import { sendPasswordResetEmail } from "../services/email.service";
import type {
  ForgotPasswordInput,
  LoginInput,
  RefreshTokenInput,
  RegisterInput,
  ResetPasswordInput,
} from "../schemas/auth.schema";

export const register = async (
  req: Request<{}, {}, RegisterInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ApiError(400, "User with this email already exists");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        provider: "email",
      },
    });

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request<{}, {}, LoginInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, password } = req.body;

    console.log("login", email, password);
    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });
    console.log("user", user);

    if (!user) {
      throw new ApiError(401, "Invalid credentials");
    }

    // Check if user has a password (might be a GitHub user)
    if (!user.password) {
      throw new ApiError(401, "Please login with your provider");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("isPasswordValid", isPasswordValid);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid credentials");
    }

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(200).json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (
  req: Request<{}, {}, RefreshTokenInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { refreshToken: token } = req.body;

    // Verify refresh token
    const decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET as string,
    ) as { userId: string };

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    // Generate new tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    res.status(200).json({
      accessToken,
      refreshToken,
    });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new ApiError(401, "Invalid refresh token"));
    } else {
      next(error);
    }
  }
};

export const forgotPassword = async (
  req: Request<{}, {}, ForgotPasswordInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email } = req.body;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Don't reveal that the user doesn't exist
      res.status(200).json({
        message:
          "If your email is registered, you will receive a password reset link",
      });
      return;
    }

    // Generate password reset token
    const resetToken = jwt.sign(
      { userId: user.id },
      process.env.JWT_RESET_SECRET as string,
      { expiresIn: "1h" },
    );

    // Send password reset email
    await sendPasswordResetEmail(user.email, resetToken);

    res.status(200).json({
      message:
        "If your email is registered, you will receive a password reset link",
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (
  req: Request<{}, {}, ResetPasswordInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token, password } = req.body;

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_RESET_SECRET as string,
    ) as { userId: string };

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Update user password
    await prisma.user.update({
      where: { id: decoded.userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password has been reset successfully" });
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      next(new ApiError(401, "Invalid or expired token"));
    } else {
      next(error);
    }
  }
};

export const logout = (req: Request, res: Response) => {
  // In a token-based auth system, the client is responsible for removing the token
  res.status(200).json({ message: "Logged out successfully" });
};
