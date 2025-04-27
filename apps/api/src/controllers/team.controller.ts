// apps/api/src/controllers/team.controller.ts
import type { NextFunction, Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
import logger from "../utils/logger";
import { z } from "zod";
import { ApiError } from "../utils/error.utils";

// Validation schemas
const teamSchema = z.object({
    name: z.string().min(1, 'Team name is required'),
});

const teamMemberSchema = z.object({
    userId: z.string().min(1, 'User ID is required'),
    role: z.enum(['MEMBER', 'ADMIN']).default('MEMBER'),
});

const updateTeamSchema = z.object({
    name: z.string().min(1, 'Team name is required').optional(),
});

// Create a new team
export const createTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validatedData = teamSchema.parse(req.body);
        const { name } = validatedData;

        // Use a transaction to create both the team and add the creator as admin
        const result = await prismaClient.$transaction(async (prisma) => {
            // Create the team
            const team = await prisma.team.create({
                data: { name },
            });

            // Add the creator as an admin
            const teamMember = await prisma.teamMember.create({
                data: {
                    userId: req.user!.id,
                    teamId: team.id,
                    role: 'ADMIN',
                },
            });

            return { team, teamMember };
        });

        logger.info('Team created', { teamId: result.team.id, userId: req.user!.id });

        res.status(201).json({
            status: 'success',
            data: {
                team: result.team,
                membership: result.teamMember,
            },
        });
    } catch (err) {
        next(err);
    }
};

// Get all teams of the user
export const getUserTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const teams = await prismaClient.teamMember.findMany({
            where: { userId: req.user!.id },
            include: {
                team: true,
            },
        });

        logger.info('User teams retrieved', { userId: req.user!.id, count: teams.length });

        res.json({
            status: 'success',
            data: teams,
        });
    } catch (err) {
        next(err);
    }
};

// Get team details with members
export const getTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamId } = req.params;

        // Validate teamId format
        if (!teamId || typeof teamId !== 'string') {
            throw new ApiError(400,'Invalid team ID');
        }

        // Check if user is a member of the team
        const userMembership = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId: req.user!.id,
            },
        });

        if (!userMembership) {
            throw new ApiError(403,'You do not have access to this team',);
        }

        // Get team with members
        const team = await prismaClient.team.findUnique({
            where: { id: teamId },
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
                repositories: true,
            },
        });

        if (!team) {
            throw new ApiError(404,'Team not found',);
        }

        logger.info('Team details retrieved', { teamId, userId: req.user!.id });

        res.json({
            status: 'success',
            data: team,
        });
    } catch (err) {
        next(err);
    }
};

// Update team
export const updateTeam = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamId } = req.params;
        const validatedData = updateTeamSchema.parse(req.body);

        // Validate teamId
        if (!teamId || typeof teamId !== 'string') {
            throw new ApiError(400,'Invalid team ID',);
        }

        // Check if user is an admin of the team
        const userMembership = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId: req.user!.id,
                role: 'ADMIN',
            },
        });

        if (!userMembership) {
            throw new ApiError(403,'You do not have permission to update this team', );
        }

        // Update the team
        const updatedTeam = await prismaClient.team.update({
            where: { id: teamId },
            data: validatedData,
        });

        logger.info('Team updated', { teamId, userId: req.user!.id });

        res.json({
            status: 'success',
            data: updatedTeam,
        });
    } catch (err) {
        next(err);
    }
};

// Add member to team
export const addTeamMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamId } = req.params;
        const validatedData = teamMemberSchema.parse(req.body);
        const { userId, role } = validatedData;

        // Validate teamId
        if (!teamId || typeof teamId !== 'string') {
            throw new ApiError(400,'Invalid team ID');
        }

        // Check if user exists
        const userExists = await prismaClient.user.findUnique({
            where: { id: userId },
        });

        if (!userExists) {
            throw new ApiError(404,'User not found',);
        }

        // Check if the requester is an admin of the team
        const userMembership = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId: req.user!.id,
                role: 'ADMIN',
            },
        });

        if (!userMembership) {
            throw new ApiError(403,'You do not have permission to add members to this team', );
        }

        // Check if the user is already a member
        const existingMembership = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId,
            },
        });

        if (existingMembership) {
            throw new ApiError(409,'User is already a member of this team');
        }

        // Add the new member
        const newMember = await prismaClient.teamMember.create({
            data: {
                userId,
                teamId,
                role,
            },
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

        logger.info('Team member added', {
            teamId,
            adminId: req.user!.id,
            newMemberId: userId,
            role
        });

        res.status(201).json({
            status: 'success',
            data: newMember,
        });
    } catch (err) {
        next(err);
    }
};

// Remove member from team
export const removeTeamMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamId, userId } = req.params;

        // Validate params
        if (!teamId || !userId) {
            throw new ApiError(400,'Team ID and User ID are required');
        }

        // Check if the requester is an admin of the team
        const userMembership = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId: req.user!.id,
                role: 'ADMIN',
            },
        });

        if (!userMembership) {
            throw new ApiError(403,'You do not have permission to remove members from this team');
        }

        // Check if the user is trying to remove themselves
        if (userId === req.user!.id) {
            throw new ApiError(400,'You cannot remove yourself from the team',);
        }

        // Check if the user to remove exists in the team
        const memberToRemove = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId,
            },
        });

        if (!memberToRemove) {
            throw new ApiError(404,'User is not a member of this team');
        }

        // Remove the member
        await prismaClient.teamMember.delete({
            where: {
                id: memberToRemove.id,
            },
        });

        logger.info('Team member removed', {
            teamId,
            adminId: req.user!.id,
            removedUserId: userId
        });

        res.json({
            status: 'success',
            message: 'Team member removed successfully',
        });
    } catch (err) {
        next(err);
    }
};

// New function to get team statistics
export const getTeamStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamId } = req.params;

        // Validate teamId
        if (!teamId || typeof teamId !== 'string') {
            throw new ApiError(400,'Invalid team ID');
        }

        // Check if user is a member of the team
        const userMembership = await prismaClient.teamMember.findFirst({
            where: {
                teamId,
                userId: req.user!.id,
            },
        });

        if (!userMembership) {
            throw new ApiError(403,'You do not have access to this team');
        }

        // Get the current date at midnight
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Get the date 30 days ago
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        // Get team members
        const members = await prismaClient.teamMember.findMany({
            where: { teamId },
            select: { userId: true },
        });

        const memberIds = members.map(member => member.userId);

        // Get standup statistics
        const standupCount = await prismaClient.standup.count({
            where: {
                teamId,
                createdAt: { gte: thirtyDaysAgo },
            },
        });

        // Get today's standups
        const todayStandups = await prismaClient.standup.count({
            where: {
                teamId,
                createdAt: { gte: today },
            },
        });

        // Get repositories count
        const repoCount = await prismaClient.repository.count({
            where: { teamId },
        });

        logger.info('Team statistics retrieved', { teamId, userId: req.user!.id });

        res.json({
            status: 'success',
            data: {
                memberCount: memberIds.length,
                standupStats: {
                    total: standupCount,
                    today: todayStandups,
                    completion: memberIds.length > 0 ? (todayStandups / memberIds.length) * 100 : 0,
                },
                repositoryCount: repoCount,
            },
        });
    } catch (err) {
        next(err);
    }
};
