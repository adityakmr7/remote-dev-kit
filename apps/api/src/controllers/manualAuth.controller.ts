import type {Request, RequestHandler, Response} from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prismaClient as prisma } from '@repo/db/client';
import { registerSchema, loginSchema } from '../schemas/auth.schema';
import { z } from 'zod';

const JWT_SECRET = process.env.JWT_SECRET!;

export const registerUser = async (req: Request, res: Response) => {
    console.log('Request body:', req.body);
    try {
        const validatedData = registerSchema.parse(req.body);
        const { email, password, name } = validatedData;

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) {
            return res.status(409).json({ error: 'Email already exists' });
        }

        const hashed = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashed,
                provider: 'email',
            },
        });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ token });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ 
                error: 'Validation failed',
                details: err.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }))
            });
        }
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Registration failed. Please try again later.' });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const { email, password } = validatedData;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({ 
                error: 'Validation failed',
                details: err.errors.map(e => ({
                    field: e.path.join('.'),
                    message: e.message
                }))
            });
        }
        res.status(500).json({ error: 'Login failed' });
    }
};
