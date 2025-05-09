import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prismaClient as prisma } from "@repo/db/client";
import { generateRefreshToken, generateToken } from "../utils/token.utils";
import { ApiError } from "../utils/error.utils";
import {
  sendPasswordResetEmail,
  sendVerificationEmail,
} from "../services/email.service";
import * as crypto from "node:crypto";
import type {
  ForgotPasswordInput,
  GithubCallbackInput,
  LoginInput,
  RefreshTokenInput,
  RegisterInput,
  ResetPasswordInput,
  VerifyEmailInput,
} from "../schemas/auth.schema";
import axios from "axios";

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
    // Generate email verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpiry = new Date();
    verificationTokenExpiry.setHours(verificationTokenExpiry.getHours() + 24); // 24 hour expiry
    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        provider: "email",
        emailVerified: false,
        verificationToken,
        verificationTokenExpiry,
      },
    });

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Send verification email
    try {
      await sendVerificationEmail(email, verificationToken);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      // Continue with registration even if email fails
    }

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
      message: "Registration successful. Please verify your email.",
      onboardingCompleted: user.onboardingCompleted,
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

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new ApiError(401, "Invalid credentials");
    }

    // Check if user has a password (might be a GitHub user)
    if (!user.password) {
      throw new ApiError(401, "Please login with your provider");
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid credentials");
    }

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;
    // Check if email is verified
    const emailVerificationMessage = !user.emailVerified
      ? "Please verify your email address to access all features."
      : undefined;
    res.status(200).json({
      user: userWithoutPassword,
      accessToken,
      refreshToken,
      message: emailVerificationMessage,
      onboardingCompleted: user.onboardingCompleted,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail = async (
  req: Request<{}, {}, VerifyEmailInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req.body;

    // Find user with this verification token
    const user = await prisma.user.findFirst({
      where: {
        verificationToken: token,
        verificationTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      throw new ApiError(400, "Invalid or expired verification token");
    }

    // Update user as verified
    await prisma.user.update({
      where: { id: user.id },
      data: {
        emailVerified: true,
        verificationToken: null,
        verificationTokenExpiry: null,
      },
    });

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    next(error);
  }
};

export const resendVerificationEmail = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    if (user.emailVerified) {
      res.status(200).json({ message: "Email is already verified" });
      return;
    }

    // Generate new verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpiry = new Date();
    verificationTokenExpiry.setHours(verificationTokenExpiry.getHours() + 24); // 24 hour expiry

    // Update user with new token
    await prisma.user.update({
      where: { id: userId },
      data: {
        verificationToken,
        verificationTokenExpiry,
      },
    });

    // Send verification email
    try {
      await sendVerificationEmail(user.email, verificationToken);
    } catch (emailError) {
      console.error("Failed to send verification email:", emailError);
      throw new ApiError(500, "Failed to send verification email");
    }

    res.status(200).json({ message: "Verification email sent successfully" });
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

export const githubCallback = async (
  req: Request<{}, {}, GithubCallbackInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { code } = req.body;

    if (!code) {
      throw new ApiError(400, "Authorization code is required");
    }

    // Exchange code for access token
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    const { access_token, refresh_token, error } = tokenResponse.data;

    if (error || !access_token) {
      throw new ApiError(
        400,
        `GitHub OAuth error: ${error || "Failed to get access token"}`,
      );
    }

    // Get user info from GitHub
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${access_token}`,
      },
    });

    const githubUser = userResponse.data;

    // Get user's email from GitHub
    const emailsResponse = await axios.get(
      "https://api.github.com/user/emails",
      {
        headers: {
          Authorization: `token ${access_token}`,
        },
      },
    );

    const emails = emailsResponse.data;
    const primaryEmail =
      emails.find((email: any) => email.primary)?.email || emails[0]?.email;

    if (!primaryEmail) {
      throw new ApiError(400, "Could not retrieve email from GitHub");
    }

    // Check if user exists
    let user = await prisma.user.findFirst({
      where: {
        OR: [{ email: primaryEmail }, { githubId: githubUser.id.toString() }],
      },
    });

    if (user) {
      // Update existing user with GitHub info
      user = await prisma.user.update({
        where: { id: user.id },
        data: {
          githubId: githubUser.id.toString(),
          githubUsername: githubUser.login,
          githubToken: access_token,
          githubRefreshToken: refresh_token || null,
          name: user.name || githubUser.name,
          avatarUrl: user.avatarUrl || githubUser.avatar_url,
          emailVerified: true, // GitHub verified the email
        },
      });
    } else {
      // Create new user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(
        crypto.randomBytes(16).toString("hex"),
        salt,
      );

      user = await prisma.user.create({
        data: {
          email: primaryEmail,
          name: githubUser.name || githubUser.login,
          githubId: githubUser.id.toString(),
          githubUsername: githubUser.login,
          githubToken: access_token,
          githubRefreshToken: refresh_token || null,
          avatarUrl: githubUser.avatar_url,
          emailVerified: true, // GitHub verified the email
          password: hashedPassword, // Random password
          provider: "github",
          onboardingCompleted: false,
        },
      });
    }

    // Generate tokens
    const accessToken = generateToken(user.id);
    const refreshToken = generateRefreshToken(user.id);

    // Remove sensitive data from response
    const {
      password,
      githubToken,
      githubRefreshToken,
      ...userWithoutSensitiveData
    } = user;

    res.status(200).json({
      user: userWithoutSensitiveData,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    next(error);
  }
};
