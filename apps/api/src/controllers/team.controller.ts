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

// Invite a user to a team
export const inviteToTeam = async (
  req: Request<{ id: string }, {}, InviteToTeamInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;
    const { id: teamId } = req.params;
    const { email, role } = req.body;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Check if user is an admin of the team
    const userTeam = await prisma.userTeam.findFirst({
      where: { userId, teamId, role: "ADMIN" },
    });

    if (!userTeam) {
      throw new ApiError(
        403,
        "You don't have permission to invite members to this team",
      );
    }

    // Check if the team exists
    const team = await prisma.team.findUnique({
      where: { id: teamId },
    });

    if (!team) {
      throw new ApiError(404, "Team not found");
    }

    // Check if user is already a member
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      const existingMember = await prisma.userTeam.findFirst({
        where: { userId: existingUser.id, teamId },
      });

      if (existingMember) {
        throw new ApiError(400, "User is already a member of this team");
      }
    }

    // Check if there's already a pending invitation
    const existingInvitation = await prisma.teamInvitation.findFirst({
      where: {
        email,
        teamId,
        status: "PENDING",
        expiresAt: { gt: new Date() },
      },
    });

    if (existingInvitation) {
      throw new ApiError(
        400,
        "There's already a pending invitation for this email",
      );
    }

    // Create expiration date (7 days from now)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    // Create invitation
    const invitation = await prisma.teamInvitation.create({
      data: {
        email,
        teamId,
        role,
        invitedBy: userId,
        expiresAt,
      },
    });

    // Get inviter's name
    const inviter = await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true },
    });

    // Send invitation email
    try {
      await sendEmail({
        to: email,
        subject: `Invitation to join ${team.name}`,
        text: `${inviter?.name || inviter?.email || "Someone"} has invited you to join ${team.name}. 
               Click here to accept: ${process.env.FRONTEND_URL}/teams/invitations/${invitation.id}`,
        html: `<p>${inviter?.name || inviter?.email || "Someone"} has invited you to join ${team.name}.</p>
               <p><a href="${process.env.FRONTEND_URL}/teams/invitations/${invitation.id}">Click here to view the invitation</a></p>`,
      });
    } catch (error) {
      console.error("Failed to send invitation email:", error);
      // Continue even if email fails
    }

    res.status(201).json({
      message: "Invitation sent successfully",
      invitation: {
        id: invitation.id,
        email: invitation.email,
        role: invitation.role,
        expiresAt: invitation.expiresAt,
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

    // Get user's email
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { email: true },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Get pending invitations for the user's email
    const invitations = await prisma.teamInvitation.findMany({
      where: {
        email: user.email,
        status: "PENDING",
        expiresAt: { gt: new Date() },
      },
      include: {
        team: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get inviter details for each invitation
    const invitationsWithInviter = await Promise.all(
      invitations.map(async (invitation) => {
        const inviter = await prisma.user.findUnique({
          where: { id: invitation.invitedBy },
          select: {
            id: true,
            name: true,
            email: true,
          },
        });

        return {
          id: invitation.id,
          teamId: invitation.teamId,
          teamName: invitation.team.name,
          teamDescription: invitation.team.description,
          role: invitation.role,
          status: invitation.status,
          expiresAt: invitation.expiresAt,
          createdAt: invitation.createdAt,
          invitedBy: inviter
            ? {
                id: inviter.id,
                name: inviter.name || inviter.email,
              }
            : null,
        };
      }),
    );

    res.status(200).json({ invitations: invitationsWithInviter });
  } catch (error) {
    next(error);
  }
};

// Get a specific team invitation
export const getTeamInvitation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's email
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { email: true },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Get the invitation
    const invitation = await prisma.teamInvitation.findUnique({
      where: { id },
      include: {
        team: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
    });

    if (!invitation) {
      throw new ApiError(404, "Invitation not found");
    }

    // Check if the invitation is for the current user
    if (invitation.email !== user.email) {
      throw new ApiError(403, "This invitation is not for you");
    }

    // Check if the invitation has expired
    if (invitation.expiresAt < new Date()) {
      throw new ApiError(400, "This invitation has expired");
    }

    // Get inviter details
    const inviter = await prisma.user.findUnique({
      where: { id: invitation.invitedBy },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    res.status(200).json({
      invitation: {
        id: invitation.id,
        teamId: invitation.teamId,
        teamName: invitation.team.name,
        teamDescription: invitation.team.description,
        role: invitation.role,
        status: invitation.status,
        expiresAt: invitation.expiresAt,
        createdAt: invitation.createdAt,
        invitedBy: inviter
          ? {
              id: inviter.id,
              name: inviter.name || inviter.email,
            }
          : null,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Accept or decline a team invitation
export const respondToInvitation = async (
  req: Request<{ id: string }, {}, RespondToInvitationInput>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's email
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { email: true, id: true },
    });

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Get the invitation
    const invitation = await prisma.teamInvitation.findUnique({
      where: { id },
      include: {
        team: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!invitation) {
      throw new ApiError(404, "Invitation not found");
    }

    // Check if the invitation is for the current user
    if (invitation.email !== user.email) {
      throw new ApiError(403, "This invitation is not for you");
    }

    // Check if the invitation has expired
    if (invitation.expiresAt < new Date()) {
      throw new ApiError(400, "This invitation has expired");
    }

    // Check if the invitation is still pending
    if (invitation.status !== "PENDING") {
      throw new ApiError(400, "This invitation has already been responded to");
    }

    // Update the invitation status
    await prisma.teamInvitation.update({
      where: { id },
      data: { status },
    });

    // If accepted, add the user to the team
    if (status === "ACCEPTED") {
      // Check if the user is already a member of the team
      const existingMember = await prisma.userTeam.findFirst({
        where: { userId: user.id, teamId: invitation.teamId },
      });

      if (!existingMember) {
        // Add the user to the team
        await prisma.userTeam.create({
          data: {
            userId: user.id,
            teamId: invitation.teamId,
            role: invitation.role,
          },
        });
      }

      res.status(200).json({
        message: `You have successfully joined ${invitation.team.name}`,
        teamId: invitation.teamId,
      });
    } else {
      res.status(200).json({
        message: `You have declined the invitation to join ${invitation.team.name}`,
      });
    }
  } catch (error) {
    next(error);
  }
};
