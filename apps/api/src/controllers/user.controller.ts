import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { prismaClient as prisma } from "@repo/db/client";
import { ApiError } from "../utils/error.utils";
import type {
  ChangePasswordInput,
  CompleteOnboardingInput,
  UpdateProfileInput,
  UpdateWorkspaceSettingsInput,
} from "../schemas/user.schema";

export const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        avatarUrl: true,
        provider: true,
        createdAt: true,
        subscription: true,
        bio: true,
        jobTitle: true,
        githubUsername: true,
        onboardingCompleted: true,
        workspaceSettings: true,
        teams: {
          include: {
            team: true,
          },
        },
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (
  req: Request<{}, {}, UpdateProfileInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { name, avatarUrl, bio, jobTitle } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        avatarUrl,
        bio,
        jobTitle,
      },
      select: {
        id: true,
        email: true,
        name: true,
        avatarUrl: true,
        provider: true,
        bio: true,
        jobTitle: true,
        createdAt: true,
      },
    });

    console.log("updatedUser", updatedUser);
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: Request<{}, {}, ChangePasswordInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { currentPassword, newPassword } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user with password
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Check if user has a password (might be a GitHub user)
    if (!user.password) {
      throw new ApiError(
        400,
        "Cannot change password for accounts without a password",
      );
    }

    // Verify current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password,
    );
    if (!isPasswordValid) {
      throw new ApiError(401, "Current password is incorrect");
    }

    // Hash new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update password
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateWorkspaceSettings = async (
  req: Request<{}, {}, UpdateWorkspaceSettingsInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const settings = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get current settings
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { workspaceSettings: true },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Merge new settings with existing ones
    const currentSettings = user.workspaceSettings
      ? (user.workspaceSettings as object)
      : {};
    const updatedSettings = { ...currentSettings, ...settings };

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        workspaceSettings: updatedSettings,
      },
      select: {
        id: true,
        workspaceSettings: true,
      },
    });

    res.status(200).json({ workspaceSettings: updatedUser.workspaceSettings });
  } catch (error) {
    next(error);
  }
};

export const completeOnboarding = async (
  req: Request<{}, {}, CompleteOnboardingInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        onboardingCompleted: true,
      },
      select: {
        id: true,
        onboardingCompleted: true,
      },
    });

    res
      .status(200)
      .json({ onboardingCompleted: updatedUser.onboardingCompleted });
  } catch (error) {
    next(error);
  }
};
