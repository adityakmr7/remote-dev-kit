import {type RequestHandler, Router} from 'express';
import { authenticateToken } from '../middleware/auth';
import {
    createTeam,
    getTeamDetail,
    updateTeam,
    addTeamMember,
    removeTeamMember,
} from '../controllers/team.controller';

const router = Router();

// Create a new team
router.post('/', authenticateToken, createTeam);

// Get team details
router.get('/:teamId', authenticateToken, getTeamDetail);

// Update team
router.put('/:teamId', authenticateToken, updateTeam as RequestHandler);

// Add member to team
router.post('/:teamId/members', authenticateToken, addTeamMember as RequestHandler);

// Remove member from team
router.delete('/:teamId/members/:userId', authenticateToken, removeTeamMember as RequestHandler);

export default router;
