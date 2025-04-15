import { Router, type Request, type Response, type RequestHandler } from 'express';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { prismaClient } from '@repo/db/client';

const router = Router();

router.get('/github', (req, res) => {
    const redirect = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user`;
    res.redirect(redirect);
});

router.get('/github/callback', (async (req:Request, res:Response) => {
    const code = req.query.code as string;
    if (!code) return res.status(400).json({ error: 'No code provided' });

    try {
        // 1. Exchange code for access_token
        const tokenRes = await axios.post(`https://github.com/login/oauth/access_token`, {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
        }, {
            headers: { Accept: 'application/json' },
        });

        const accessToken = tokenRes.data.access_token;

        // 2. Fetch user info
        const userRes = await axios.get('https://api.github.com/user', {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const { login, id, avatar_url, email, name } = userRes.data;

        // 3. Create or find user in DB
        const user = await prismaClient.user.upsert({
            where: { email: email ?? `${id}@github.local` },
            update: {},
            create: {
                email: email ?? `${id}@github.local`,
                name: name || login,
                avatarUrl: avatar_url,
                provider: 'github',
            },
        });

        // 4. Create JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
            expiresIn: '7d',
        });

        // 5. Redirect to frontend with token
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
    } catch (err) {
        res.status(500).json({ error: 'GitHub OAuth failed' });
    }
}) as RequestHandler);

export default router;
