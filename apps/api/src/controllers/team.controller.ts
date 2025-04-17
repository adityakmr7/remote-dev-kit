import {prismaClient} from "@repo/db/client";
import type {Request, Response} from 'express';


export const createTeam = async (req: Request, res: Response) => {
    const name = req.body.name;
    try {
        const team = await prismaClient.team.create({
            data: {
                name,
            }
        })
        res.status(201).json({
            status: "success",
            data: {
                team: team,
            }
        })
    } catch (err) {
        res.status(500).json({
            status: "error",
            error: err
        })
    }
}

// team detail
export const getTeamDetail = async(req:Request, res:Response) => {
    try{
        const teamId = req.params.teamId; // team id from prams
        const team = await  prismaClient.team.findFirst({
            where: {
                id: teamId,
            }
        });
        res.status(200).json({
            status: "success",
            data: team
        })
    }catch(err){
        res.status(500).json({
            status: "error",
            error: err
        })
    }
}
export const updateTeam = async (req: Request, res: Response) => {
    const teamId = req.params.teamId;
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ error: 'Team name is required' });
    }

    try {
        const updatedTeam = await prismaClient.team.update({
            where: { id: teamId },
            data: { name },
        });

        res.status(200).json({
            status: 'success',
            team: updatedTeam,
        });
    } catch (error) {
        console.error('Error updating team:', error);
        res.status(500).json({
            status: 'error',
            error: (error as Error).message,
        });
    }
};
export const addTeamMember = async (req: Request, res: Response) => {
    const teamId = req.params.teamId;
    const { email, role = 'MEMBER' } = req.body;

    try {
        // 1. Check if team exists
        const team = await prismaClient.team.findUnique({
            where: { id: teamId },
        });

        if (!team) {
            return res.status(404).json({ error: 'Team not found' });
        }

        // 2. Check if user exists
        const user = await prismaClient.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // 3. Check if already a member
        const existingMember = await prismaClient.teamMember.findUnique({
            where: {
                userId_teamId: {
                    teamId: team.id,
                    userId:user.id
                }
            },
        });

        if (existingMember) {
            return res.status(400).json({ error: 'User already in team' });
        }

        // 4. Add to team
        const newMember = await prismaClient.teamMember.create({
            data:{
                userId: user.id,
                teamId: team.id,
                role:'MEMBER',
            }
        });
        res.status(201).json({ status: 'success', member: newMember });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: (error as Error).message,
        });
    }
};
export const removeTeamMember = async (req: Request, res: Response) => {
    const { teamId, userId } = req.params;

    if(!teamId) {
        return res.status(400).json({ error: 'Team not found' });
    }
    if (!userId) {
        return res.status(400).json({ error: 'User not found' });
    }
    try {
        // Check if the team member exists
        const existingMember = await prismaClient.teamMember.findUnique({
            where: {
                userId_teamId: {
                    userId,
                    teamId,
                },
            },
        });

        if (!existingMember) {
            return res.status(404).json({ error: 'Team member not found' });
        }

        // Delete the team member entry
        await prismaClient.teamMember.delete({
            where: {
                userId_teamId: {
                    userId,
                    teamId,
                },
            },
        });

        res.status(200).json({
            status: 'success',
            message: `User ${userId} removed from team ${teamId}`,
        });
    } catch (error) {
        console.error('Error removing team member:', error);
        res.status(500).json({
            status: 'error',
            error: (error as Error).message,
        });
    }
};
