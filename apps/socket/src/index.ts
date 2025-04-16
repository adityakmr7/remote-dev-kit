import { WebSocket, WebSocketServer } from 'ws';
import { createServer } from 'http';
import express from 'express';
import jwt from 'jsonwebtoken';
import { prismaClient } from '@repo/db/client';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const JWT_SECRET = process.env.JWT_SECRET!;

interface ExtendedWebSocket extends WebSocket {
    userId?: string;
    teamId?: string;
}

interface WebSocketMessage {
    type: 'standup' | 'focus' | 'code_review';
    content?: string;
    duration?: number;
    prUrl?: string;
    comments?: any;
}

wss.on('connection', async (ws: ExtendedWebSocket, req) => {
    try {
        // Authenticate connection
        const token = req.url?.split('token=')[1];
        if (!token) {
            ws.close(1008, 'Unauthorized');
            return;
        }

        const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
        const user = await prismaClient.user.findUnique({
            where: { id: decoded.id },
            include: { teams: true }
        });

        if (!user) {
            ws.close(1008, 'Unauthorized');
            return;
        }

        ws.userId = user.id;
        ws.teamId = user.teams[0]?.teamId;

        // Handle messages
        ws.on('message', async (message: string) => {
            try {
                const data = JSON.parse(message) as WebSocketMessage;
                
                switch (data.type) {
                    case 'standup':
                        await handleStandup(ws, data);
                        break;
                    case 'focus':
                        await handleFocus(ws, data);
                        break;
                    case 'code_review':
                        await handleCodeReview(ws, data);
                        break;
                }
            } catch (error) {
                console.error('Error handling message:', error);
            }
        });

        // Handle disconnection
        ws.on('close', () => {
            console.log('Client disconnected');
        });
    } catch (error) {
        console.error('Connection error:', error);
        ws.close(1008, 'Unauthorized');
    }
});

// Message handlers
async function handleStandup(ws: ExtendedWebSocket, data: WebSocketMessage) {
    if (!ws.teamId || !ws.userId || !data.content) return;

    const standup = await prismaClient.standup.create({
        data: {
            userId: ws.userId,
            teamId: ws.teamId,
            content: data.content
        }
    });

    // Broadcast to team members
    wss.clients.forEach((client) => {
        const extendedClient = client as ExtendedWebSocket;
        if (extendedClient.teamId === ws.teamId && extendedClient !== ws) {
            extendedClient.send(JSON.stringify({
                type: 'standup',
                data: standup
            }));
        }
    });
}

async function handleFocus(ws: ExtendedWebSocket, data: WebSocketMessage) {
    if (!ws.userId || !data.duration) return;

    const session = await prismaClient.focusSession.create({
        data: {
            userId: ws.userId,
            startTime: new Date(),
            duration: data.duration
        }
    });

    ws.send(JSON.stringify({
        type: 'focus',
        data: session
    }));
}

async function handleCodeReview(ws: ExtendedWebSocket, data: WebSocketMessage) {
    if (!ws.userId || !data.prUrl || !data.comments) return;

    const review = await prismaClient.codeReview.create({
        data: {
            userId: ws.userId,
            prUrl: data.prUrl,
            status: 'PENDING',
            comments: data.comments
        }
    });

    ws.send(JSON.stringify({
        type: 'code_review',
        data: review
    }));
}

const PORT = process.env.WS_PORT || 8080;
server.listen(PORT, () => {
    console.log(`WebSocket server running on port ${PORT}`);
}); 