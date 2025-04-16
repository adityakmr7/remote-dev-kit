import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { prismaClient } from '@repo/db/client';

const router = Router();

// Get user's teams
router.get('/teams', authenticateToken, async (req, res) => {
    try {
        const teams = await prismaClient.teamMember.findMany({
            where: { userId: req.user!.id },
            include: { team: true },
        });
        res.json(teams);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});

// Get user's focus sessions for today
router.get('/focus-sessions', authenticateToken, async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const sessions = await prismaClient.focusSession.findMany({
            where: {
                userId: req.user!.id,
                startTime: { gte: today },
            },
        });
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch focus sessions' });
    }
});

// Get user's code reviews
router.get('/code-reviews', authenticateToken, async (req, res) => {
    try {
        const reviews = await prismaClient.codeReview.findMany({
            where: { userId: req.user!.id },
            orderBy: { createdAt: 'desc' },
        });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch code reviews' });
    }
});

export default router; 