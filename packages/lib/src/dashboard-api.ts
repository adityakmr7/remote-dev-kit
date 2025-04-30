import apiClient from "./api-client.ts";

// Types
export interface DashboardStats {
  focusTime: {
    average: number
    changePercentage: number
  }
  standupCompletion: {
    rate: number
    changePercentage: number
  }
  openPRs: {
    count: number
    change: number
  }
}

export interface StandupUser {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
}

export interface Standup {
  id: string
  user: StandupUser
  yesterday: string | null
  today: string | null
  blockers: string | null
  tags: string[]
  status: "blocked" | "needs help" | "on track"
  createdAt: string
}

export interface PairSessionParticipant {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
}

export interface PairSession {
  id: string
  title: string
  description: string | null
  startTime: string
  participants: PairSessionParticipant[]
}

export interface TeamMember {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
  status: string | null
  role: string | null
}

// Get dashboard statistics
export async function getDashboardStats(): Promise<DashboardStats> {
  try {
    const response = await apiClient.get("/dashboard/stats")
    return response.data.stats
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    // Return default values if API call fails
    return {
      focusTime: {
        average: 4.2,
        changePercentage: 12,
      },
      standupCompletion: {
        rate: 85,
        changePercentage: 5,
      },
      openPRs: {
        count: 7,
        change: 2,
      },
    }
  }
}

// Get today's standups
export async function getTodayStandups(): Promise<Standup[]> {
  try {
    const response = await apiClient.get("/dashboard/standups/today")
    return response.data.standups
  } catch (error) {
    console.error("Error fetching today's standups:", error)
    // Return empty array if API call fails
    return []
  }
}

// Get active pair programming sessions
export async function getActivePairSessions(): Promise<PairSession[]> {
  try {
    const response = await apiClient.get("/dashboard/pair-sessions/active")
    return response.data.pairSessions
  } catch (error) {
    console.error("Error fetching active pair sessions:", error)
    // Return empty array if API call fails
    return []
  }
}

// Get team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await apiClient.get("/dashboard/team-members")
    return response.data.teamMembers
  } catch (error) {
    console.error("Error fetching team members:", error)
    // Return empty array if API call fails
    return []
  }
}
