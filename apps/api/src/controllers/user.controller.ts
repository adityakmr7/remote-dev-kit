import type { Request, Response } from 'express';
import { prismaClient } from '@repo/db/client';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { email, name } = req.body;
        const user = await prismaClient.user.create({ 
            data: { 
                email,
                name,
                provider: 'email' 
            } 
        });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create user' });
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    const users = await prismaClient.user.findMany();
    res.json(users);
};
