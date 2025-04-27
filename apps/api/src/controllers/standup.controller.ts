// apps/api/src/controllers/standup.controller.ts
import type { NextFunction, Request, Response } from "express";
import { prismaClient } from "@repo/db/client";
import logger from "../utils/logger";
import { z } from "zod";
import { ApiError } from "../utils/error.utils.ts";

// Create validation schema
const standupSchema = z.object({
    userId: z.string().uuid(),
    teamId: z.string().uuid(),
    yesterday: z.string(),
    today: z.string(),
    blockers: z.string().optional(),
});

export const createStandup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Validate input
        const validatedData = standupSchema.parse(req.body);
        const { userId, teamId, yesterday, today, blockers } = validatedData;

        // Verify the user belongs to the team
        const teamMember = await prismaClient.teamMember.findFirst({
            where: {
                userId,
                teamId,
            },
        });

        if (!teamMember) {
            throw new ApiError(403,'User is not a member of this team', );
        }

        // Check if the user already submitted a standup today
        // Create a new Date object for the current day
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const existingStandup = await prismaClient.standup.findFirst({
            where: {
                userId,
                teamId,
                createdAt: {
                    gte: currentDate,
                },
            },
        });

        if (existingStandup) {
            throw new ApiError(409,'You have already submitted a standup today');
        }

        const standup = await prismaClient.standup.create({
            data: {
                userId,
                teamId,
                content: JSON.stringify({ yesterday, today, blockers }),
            },
        });

        logger.info('Standup created', { userId, teamId, standupId: standup.id });
        res.status(201).json({
            status: 'success',
            data: standup,
        });
    } catch (err) {
        next(err);
    }
};

export const getTeamStandups = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { teamId } = req.params;

        // Validate teamId
        if (!teamId || !z.string().uuid().safeParse(teamId).success) {
            throw new ApiError(400,'Invalid team ID');
        }

        // Optional date filter
        const dateParam = req.query.date as string;
        let date: Date;

        if (dateParam) {
            // Parse date string into Date object - validate it's a valid date
            const parsedDate = new Date(dateParam);
            if (isNaN(parsedDate.getTime())) {
                throw new ApiError(400,'Invalid date format');
            }
            date = parsedDate;
        } else {
            // Default to today
            date = new Date();
        }

        // Set to start of day
        date.setHours(0, 0, 0, 0);

        // Verify user has access to this team
        const teamMember = await prismaClient.teamMember.findFirst({
            where: {
                userId: req.user!.id,
                teamId,
            },
        });

        if (!teamMember) {
            throw new ApiError(403,'You do not have access to this team');
        }

        const standups = await prismaClient.standup.findMany({
            where: {
                teamId,
                createdAt: {
                    gte: date,
                    lt: new Date(date.getTime() + 24 * 60 * 60 * 1000), // Add one day
                },
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
            orderBy: {
                createdAt: 'desc',
            },
        });

        // Parse the JSON content for each standup
        const parsedStandups = standups.map(standup => ({
            ...standup,
            content: JSON.parse(standup.content),
        }));

        logger.info('Team standups retrieved', {
            teamId,
            count: standups.length,
            date: date.toISOString().split('T')[0]
        });

        res.json({
            status: 'success',
            data: parsedStandups,
        });
    } catch (err) {
        next(err);
    }
};

// New endpoint to get a user's standup history with pagination
export const getUserStandupHistory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req.params;

        // Validate userId
        if (!userId || !z.string().uuid().safeParse(userId).success) {
            throw new ApiError(400,'Invalid user ID');
        }

        // Pagination
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const skip = (page - 1) * limit;

        // Calculate dates for the past 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        // Get standup count for pagination info
        const totalCount = await prismaClient.standup.count({
            where: {
                userId,
                createdAt: {
                    gte: thirtyDaysAgo,
                },
            },
        });

        // Get standups with pagination
        const standups = await prismaClient.standup.findMany({
            where: {
                userId,
                createdAt: {
                    gte: thirtyDaysAgo,
                },
            },
            include: {
                team: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
            skip,
            take: limit,
        });

        // Parse the JSON content for each standup
        const parsedStandups = standups.map(standup => ({
            ...standup,
            content: JSON.parse(standup.content),
        }));

        logger.info('User standup history retrieved', { userId, page, limit });

        res.json({
            status: 'success',
            data: parsedStandups,
            pagination: {
                total: totalCount,
                page,
                limit,
                pages: Math.ceil(totalCount / limit),
            },
        });
    } catch (err) {
        next(err);
    }
};
