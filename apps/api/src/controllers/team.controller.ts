import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/error.utils";
import { prismaClient as prisma } from "@repo/db/client";
import type {
  AddTeamMemberInput,
  CreateTeamInput,
  UpdateTeamInput,
} from "../schemas/team.schema";

// Get all teams for the current user
export const getMyTeams = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      include: {
        team: {
          include: {
            members: {
              include: {
                user: {
                  select: {
                    id: true,
                    name: true,
                    email: true,
                    avatarUrl: true,
                    status: true,
                    role: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    // Format the response
    const teams = userTeams.map((userTeam) => {
      const { team } = userTeam;
      return {
        id: team.id,
        name: team.name,
        description: team.description,
        role: userTeam.role,
        createdAt: team.createdAt,
        updatedAt: team.updatedAt,
        memberCount: team.members.length,
        members: team.members.map((member) => ({
          id: member.user.id,
          name: member.user.name,
          email: member.user.email,
          avatarUrl: member.user.avatarUrl,
          status: member.user.status,
          role: member.role,
        })),
      };
    });

    res.status(200).json({ teams });
  } catch (error) {
    next(error);
  }
};

// Get team by ID
export const getTeamById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is a member of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: id },
    });

    if (!userTeam) {
      throw new ApiError(403, "You don't have access to this team");
    }

    const team = await prisma.team.findUnique({
      where: { id },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
                status: true,
                role: true,
              },
            },
          },
        },
      },
    });

    if (!team) {
      throw new ApiError(404, "Team not found");
    }

    // Format the response
    const formattedTeam = {
      id: team.id,
      name: team.name,
      description: team.description,
      createdAt: team.createdAt,
      updatedAt: team.updatedAt,
      userRole: userTeam.role,
      members: team.members.map((member) => ({
        id: member.user.id,
        name: member.user.name,
        email: member.user.email,
        avatarUrl: member.user.avatarUrl,
        status: member.user.status,
        role: member.role,
      })),
    };

    res.status(200).json({ team: formattedTeam });
  } catch (error) {
    next(error);
  }
};

// Create a new team
export const createTeam = async (
  req: Request<{}, {}, CreateTeamInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { name, description, visibility } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Create team and add current user as admin
    const team = await prisma.team.create({
      data: {
        name,
        description,
        members: {
          create: {
            userId,
            role: "ADMIN",
          },
        },
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    // Format the response
    const formattedTeam = {
      id: team.id,
      name: team.name,
      description: team.description,
      createdAt: team.createdAt,
      updatedAt: team.updatedAt,
      userRole: "ADMIN",
      members: team.members.map((member) => ({
        id: member.user.id,
        name: member.user.name,
        email: member.user.email,
        avatarUrl: member.user.avatarUrl,
        role: member.role,
      })),
    };

    res.status(201).json({ team: formattedTeam });
  } catch (error) {
    next(error);
  }
};

// Update a team
export const updateTeam = async (
  req: Request<{ id: string }, {}, UpdateTeamInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;
    const { name, description, visibility } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is an admin of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: id, role: "ADMIN" },
    });

    if (!userTeam) {
      throw new ApiError(403, "You don't have permission to update this team");
    }

    const updatedTeam = await prisma.team.update({
      where: { id },
      data: {
        name,
        description,
      },
      include: {
        members: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
    });

    // Format the response
    const formattedTeam = {
      id: updatedTeam.id,
      name: updatedTeam.name,
      description: updatedTeam.description,
      createdAt: updatedTeam.createdAt,
      updatedAt: updatedTeam.updatedAt,
      userRole: "ADMIN",
      members: updatedTeam.members.map((member) => ({
        id: member.user.id,
        name: member.user.name,
        email: member.user.email,
        avatarUrl: member.user.avatarUrl,
        role: member.role,
      })),
    };

    res.status(200).json({ team: formattedTeam });
  } catch (error) {
    next(error);
  }
};

// Delete a team
export const deleteTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is an admin of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: id, role: "ADMIN" },
    });

    if (!userTeam) {
      throw new ApiError(403, "You don't have permission to delete this team");
    }

    await prisma.team.delete({
      where: { id },
    });

    res.status(200).json({ message: "Team deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// Add a member to a team
export const addTeamMember = async (
  req: Request<{ id: string }, {}, AddTeamMemberInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id } = req.params;
    const { email, role } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is an admin of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: id, role: "ADMIN" },
    });

    if (!userTeam) {
      throw new ApiError(
        403,
        "You don't have permission to add members to this team",
      );
    }

    // Find the user to add
    const userToAdd = await prisma.user.findUnique({
      where: { email },
    });

    if (!userToAdd) {
      throw new ApiError(404, "User not found");
    }

    // Check if user is already a member
    const existingMember = await prisma.userTeam.findFirst({
      where: { userId: userToAdd.id, teamId: id },
    });

    if (existingMember) {
      throw new ApiError(400, "User is already a member of this team");
    }

    // Add user to team
    await prisma.userTeam.create({
      data: {
        userId: userToAdd.id,
        teamId: id,
        role,
      },
    });

    res.status(200).json({
      message: "Team member added successfully",
      member: {
        id: userToAdd.id,
        name: userToAdd.name,
        email: userToAdd.email,
        avatarUrl: userToAdd.avatarUrl,
        role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Remove a member from a team
export const removeTeamMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id, memberId } = req.params;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is an admin of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: id, role: "ADMIN" },
    });

    if (!userTeam) {
      throw new ApiError(
        403,
        "You don't have permission to remove members from this team",
      );
    }

    // Check if the member to remove exists
    const memberToRemove = await prisma.userTeam.findFirst({
      where: { userId: memberId, teamId: id },
    });

    if (!memberToRemove) {
      throw new ApiError(404, "Member not found in this team");
    }

    // Prevent removing the last admin
    if (memberToRemove.role === "ADMIN") {
      const adminCount = await prisma.userTeam.count({
        where: { teamId: id, role: "ADMIN" },
      });

      if (adminCount <= 1) {
        throw new ApiError(400, "Cannot remove the last admin from the team");
      }
    }

    // Remove the member
    await prisma.userTeam.delete({
      where: { id: memberToRemove.id },
    });

    res.status(200).json({ message: "Team member removed successfully" });
  } catch (error) {
    next(error);
  }
};

// Update a team member's role
export const updateTeamMemberRole = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id, memberId } = req.params;
    const { role } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is an admin of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId: id, role: "ADMIN" },
    });

    if (!userTeam) {
      throw new ApiError(
        403,
        "You don't have permission to update member roles in this team",
      );
    }

    // Check if the member exists
    const memberToUpdate = await prisma.userTeam.findFirst({
      where: { userId: memberId, teamId: id },
    });

    if (!memberToUpdate) {
      throw new ApiError(404, "Member not found in this team");
    }

    // Prevent removing the last admin
    if (memberToUpdate.role === "ADMIN" && role !== "ADMIN") {
      const adminCount = await prisma.userTeam.count({
        where: { teamId: id, role: "ADMIN" },
      });

      if (adminCount <= 1) {
        throw new ApiError(400, "Cannot change role of the last admin");
      }
    }

    // Update the member's role
    const updatedMember = await prisma.userTeam.update({
      where: { id: memberToUpdate.id },
      data: { role },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
      },
    });

    res.status(200).json({
      message: "Team member role updated successfully",
      member: {
        id: updatedMember.user.id,
        name: updatedMember.user.name,
        email: updatedMember.user.email,
        avatarUrl: updatedMember.user.avatarUrl,
        role: updatedMember.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get team invitations for the current user
export const getTeamInvitations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // In a real application, you would have a TeamInvitation model
    // For now, we'll return a mock response
    const invitations = [
      {
        id: "1",
        teamId: "team-1",
        teamName: "Product Team",
        invitedBy: {
          id: "user-1",
          name: "John Doe",
        },
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        teamId: "team-2",
        teamName: "Design Team",
        invitedBy: {
          id: "user-2",
          name: "Jane Smith",
        },
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
    ];

    res.status(200).json({ invitations });
  } catch (error) {
    next(error);
  }
};
