// apps/api/src/routes/standup.routes.ts
import { Router } from 'express';
import { createStandup, getTeamStandups } from '../controllers/standup.controller';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Create a new standup
router.post('/', authenticateToken, createStandup);             // POST /api/standups

// Get team's standups for today
router.get('/team/:teamId', authenticateToken, getTeamStandups);     // GET  /api/standups/:teamId

export default router;
