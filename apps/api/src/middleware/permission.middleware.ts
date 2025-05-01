import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/error.utils";
import {
  hasPermission,
  type TeamPermission,
} from "@repo/lib/types/permissions";
import { prismaClient as prisma } from "@repo/db/client";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        userTeamRole?: string;
      };
    }
  }
}
// Middleware to check if user has a specific team permission
export const hasTeamPermission = (permission: TeamPermission) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        throw new ApiError(401, "Not authenticated");
      }

      // Get teamId from params or body
      const teamId = req.params.teamId || req.params.id || req.body.teamId;

      if (!teamId) {
        throw new ApiError(400, "Team ID is required");
      }

      // Get user's role in the team
      const userTeam = await prisma.userTeam.findFirst({
        where: { userId, teamId },
      });

      if (!userTeam) {
        throw new ApiError(403, "You are not a member of this team");
      }

      // Check if the user's role has the required permission
      if (!hasPermission(userTeam.role as any, permission)) {
        throw new ApiError(
          403,
          "You do not have permission to perform this action",
        );
      }

      if (!req.user) {
        throw new ApiError(403, "You are not a member of this team");
      }
      // Add user's team role to the request for potential use in controllers
      req.user.userTeamRole = userTeam.role;

      next();
    } catch (error) {
      next(error);
    }
  };
};

// Middleware to check if user is the owner of a resource or has a specific permission
export const isResourceOwnerOrHasPermission = (
  permission: TeamPermission,
  resourceType: "standup" | "pairSession" | "pullRequest",
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.id;
      if (!userId) {
        throw new ApiError(401, "Not authenticated");
      }

      const resourceId = req.params.id;
      if (!resourceId) {
        throw new ApiError(400, "Resource ID is required");
      }

      // Get the resource and check ownership
      let resource;
      let teamId;

      switch (resourceType) {
        case "standup":
          resource = await prisma.standup.findUnique({
            where: { id: resourceId },
          });
          teamId = resource?.teamId;
          break;
        case "pairSession":
          resource = await prisma.pairProgrammingSession.findUnique({
            where: { id: resourceId },
          });
          teamId = resource?.teamId;
          break;
        case "pullRequest":
          resource = await prisma.pullRequest.findUnique({
            where: { id: resourceId },
          });
          teamId = resource?.teamId;
          break;
      }

      if (!resource) {
        throw new ApiError(404, "Resource not found");
      }

      if (!teamId) {
        throw new ApiError(404, "Team not found");
      }
      // If user is the owner, allow access
      //@ts-ignore
      if (resource.userId === userId) {
        return next();
      }

      // Otherwise, check team permission
      const userTeam = await prisma.userTeam.findFirst({
        where: { userId, teamId },
      });

      if (!userTeam) {
        throw new ApiError(403, "You are not a member of this team");
      }

      // Check if the user's role has the required permission
      if (!hasPermission(userTeam.role as any, permission)) {
        throw new ApiError(
          403,
          "You do not have permission to perform this action",
        );
      }
      if (!req.user) {
        throw new ApiError(403, "You are not a member of this team");
      }

      // Add user's team role to the request for potential use in controllers
      req.user.userTeamRole = userTeam.role;

      next();
    } catch (error) {
      next(error);
    }
  };
};
