import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/error.utils";
import { prismaClient as prisma } from "@repo/db/client";
// Get dashboard statistics
export const getDashboardStats = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    console.log(userId);
    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get focus time stats
    const focusTimeStats = await prisma.focusTime.aggregate({
      where: {
        userId: { in: await getTeamMemberIds(teamIds) },
        date: { gte: new Date(new Date().setDate(new Date().getDate() - 7)) }, // Last 7 days
      },
      _avg: {
        minutes: true,
      },
    });

    // Get standup completion rate
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    const teamMemberIds = await getTeamMemberIds(teamIds);
    const totalTeamMembers = teamMemberIds.length;

    const standupCompletions = await prisma.standup.count({
      where: {
        userId: { in: teamMemberIds },
        createdAt: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
    });

    const standupCompletionRate =
      totalTeamMembers > 0
        ? Math.round((standupCompletions / totalTeamMembers) * 100)
        : 0;

    // Get open PRs count
    const openPRs = await prisma.pullRequest.count({
      where: {
        teamId: { in: teamIds },
        status: { in: ["OPEN", "NEEDS_REVIEW", "CHANGES_REQUESTED"] },
      },
    });

    // Get yesterday's stats for comparison
    const yesterdayStandupCompletions = await prisma.standup.count({
      where: {
        userId: { in: teamMemberIds },
        createdAt: {
          gte: new Date(new Date().setDate(new Date().getDate() - 1))
            .setHours(0, 0, 0, 0)
            .toString(),
          lte: new Date(new Date().setDate(new Date().getDate() - 1))
            .setHours(23, 59, 59, 999)
            .toString(),
        },
      },
    });

    const yesterdayCompletionRate =
      totalTeamMembers > 0
        ? Math.round((yesterdayStandupCompletions / totalTeamMembers) * 100)
        : 0;

    const standupChangePercentage =
      yesterdayCompletionRate > 0
        ? Math.round(
            ((standupCompletionRate - yesterdayCompletionRate) /
              yesterdayCompletionRate) *
              100,
          )
        : 0;

    // Get PR count from yesterday
    const yesterdayPRs = await prisma.pullRequest.count({
      where: {
        teamId: { in: teamIds },
        status: { in: ["OPEN", "NEEDS_REVIEW", "CHANGES_REQUESTED"] },
        createdAt: { lt: todayStart },
      },
    });

    const prChangeCount = openPRs - yesterdayPRs;

    // Format the response
    const stats = {
      focusTime: {
        average:
          Math.round(((focusTimeStats._avg.minutes || 0) / 60) * 10) / 10, // Convert to hours with 1 decimal
        changePercentage: 12, // Placeholder - would calculate from historical data
      },
      standupCompletion: {
        rate: standupCompletionRate,
        changePercentage: standupChangePercentage,
      },
      openPRs: {
        count: openPRs,
        change: prChangeCount,
      },
    };

    res.status(200).json({ stats });
  } catch (error) {
    next(error);
  }
};

// Get today's standups
export const getTodayStandups = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get today's date range
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    // Get standups from team members
    const standups = await prisma.standup.findMany({
      where: {
        userId: { in: await getTeamMemberIds(teamIds) },
        createdAt: {
          gte: todayStart,
          lte: todayEnd,
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Format the response
    const formattedStandups = standups.map((standup) => ({
      id: standup.id,
      user: {
        id: standup.user.id,
        name: standup.user.name,
        email: standup.user.email,
        avatarUrl: standup.user.avatarUrl,
      },
      yesterday: standup.yesterday,
      today: standup.today,
      blockers: standup.blockers,
      tags: standup.tags.map((tag) => tag.name),
      status: getStatusFromBlockers(standup.blockers),
      createdAt: standup.createdAt,
    }));

    res.status(200).json({ standups: formattedStandups });
  } catch (error) {
    next(error);
  }
};

// Get active pair programming sessions
export const getActivePairSessions = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get active pair programming sessions
    const pairSessions = await prisma.pairProgrammingSession.findMany({
      where: {
        teamId: { in: teamIds },
        status: "ACTIVE",
      },
      include: {
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatarUrl: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: "desc",
      },
    });

    // Format the response
    const formattedSessions = pairSessions.map((session) => ({
      id: session.id,
      title: session.title,
      description: session.description,
      startTime: session.startTime,
      participants: session.participants.map((participant) => ({
        id: participant.user.id,
        name: participant.user.name,
        email: participant.user.email,
        avatarUrl: participant.user.avatarUrl,
      })),
    }));

    res.status(200).json({ pairSessions: formattedSessions });
  } catch (error) {
    next(error);
  }
};

// Get team members
export const getTeamMembers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      throw new ApiError(401, "Not authenticated");
    }

    // Get user's teams
    const userTeams = await prisma.userTeam.findMany({
      where: { userId },
      select: { teamId: true },
    });

    const teamIds = userTeams.map((ut) => ut.teamId);

    // Get team members
    const teamMembers = await prisma.user.findMany({
      where: {
        teams: {
          some: {
            teamId: { in: teamIds },
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        status: true,
        role: true,
      },
    });

    res.status(200).json({ teamMembers });
  } catch (error) {
    next(error);
  }
};

// Helper function to get team member IDs
async function getTeamMemberIds(teamIds: string[]): Promise<string[]> {
  const teamMembers = await prisma.userTeam.findMany({
    where: {
      teamId: { in: teamIds },
    },
    select: {
      userId: true,
    },
  });

  return teamMembers.map((tm) => tm.userId);
}

// Helper function to determine status from blockers
function getStatusFromBlockers(
  blockers: string | null,
): "blocked" | "needs help" | "on track" {
  if (!blockers) return "on track";

  const blockersLower = blockers.toLowerCase();

  if (blockersLower.includes("blocked") || blockersLower.includes("blocking")) {
    return "blocked";
  }

  if (
    blockersLower.includes("need help") ||
    blockersLower.includes("needs help") ||
    blockersLower.includes("assistance")
  ) {
    return "needs help";
  }

  return "on track";
}
