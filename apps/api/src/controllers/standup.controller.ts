// apps/api/src/controllers/standup.controller.ts
import type { Request, Response } from 'express';
import { prismaClient } from '@repo/db/client';

export const createStandup = async (req: Request, res: Response) => {
    const { userId, teamId, yesterday, today, blockers } = req.body;

    try {
        const standup = await prismaClient.standup.create({
            data: {
                userId,
                teamId,
                content: JSON.stringify({ yesterday, today, blockers }),
            },
        });

        res.status(201).json(standup);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to submit standup' });
    }
};

export const getTeamStandups = async (req: Request, res: Response) => {
    const { teamId } = req.params;

    try {
        const standups = await prismaClient.standup.findMany({
            where: {
                teamId,
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0)),
                },
            },
            include: {
                user: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        res.json(standups);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch standups' });
    }
};
