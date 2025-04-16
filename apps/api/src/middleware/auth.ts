import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prismaClient } from '@repo/db/client';

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
            };
        }
    }
}

export const authenticateToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json({ error: 'No token provided' });
            return;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
        const user = await prismaClient.user.findUnique({
            where: { id: decoded.id },
        });

        if (!user) {
            res.status(401).json({ error: 'User not found' });
            return;
        }

        req.user = {
            id: user.id,
            email: user.email,
        };

        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid token' });
    }
}; 