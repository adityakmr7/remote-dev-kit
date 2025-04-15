import { Router } from 'express';
import type { RequestHandler } from 'express';
import { loginUser, registerUser } from "../controllers/manualAuth.controller.ts";

const router = Router();

router.post('/register', registerUser as RequestHandler);
router.post('/login', loginUser as RequestHandler);

export default router;
