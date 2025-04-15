
// apps/api/src/routes/standup.routes.ts
import { Router } from 'express';
import { createStandup, getTeamStandups } from '../controllers/standup.controller';

const router = Router();

router.post('/', createStandup);             // POST /api/standups
router.get('/:teamId', getTeamStandups);     // GET  /api/standups/:teamId

export default router;
