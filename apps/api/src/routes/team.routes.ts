import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import {
    createTeam,
    getTeam,
    updateTeam,
    addTeamMember,
    removeTeamMember,
    getUserTeam
} from '../controllers/team.controller';

const router = Router();

// Create a new team
router.post('/', authenticateToken, createTeam);

// Get all teams of the user
router.get('/', authenticateToken, getUserTeam);
// Get team details
router.get('/:teamId', authenticateToken, getTeam);

// Update team
router.put('/:teamId', authenticateToken, updateTeam);

// Add member to team
router.post('/:teamId/members', authenticateToken, addTeamMember);

// Remove member from team
router.delete('/:teamId/members/:userId', authenticateToken, removeTeamMember);

export default router;
