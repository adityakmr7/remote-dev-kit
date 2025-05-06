import apiClient from "./api-client";

// Types
export interface FocusTimeApi {
  id: string
  userId: string
  date: string
  minutes: number
  createdAt: string
  updatedAt: string
}

export interface FocusTimeStats {
  today: number
  week: number
  month: number
  average: number
  trend: "up" | "down" | "stable"
  changePercentage: number
}

export interface CreateFocusTimeInput {
  minutes: number
  date?: string
}

// Get focus time stats
export async function getFocusTimeStats(): Promise<{ stats: FocusTimeStats; error?: Error }> {
  try {
    const response = await apiClient.get("/focus-time/stats")
    return { stats: response.data.stats }
  } catch (error) {
    console.error("Error fetching focus time stats:", error)
    return {
      stats: {
        today: 0,
        week: 0,
        month: 0,
        average: 0,
        trend: "stable",
        changePercentage: 0,
      },
      error: error as Error,
    }
  }
}

// Get focus time history
export async function getFocusTimeHistory(
  startDate: string,
  endDate: string,
): Promise<{ history: FocusTimeApi[]; error?: Error }> {
  try {
    const response = await apiClient.get(`/focus-time/history?startDate=${startDate}&endDate=${endDate}`)
    return { history: response.data.history || [] }
  } catch (error) {
    console.error("Error fetching focus time history:", error)
    return { history: [], error: error as Error }
  }
}

// Create a focus time entry
export async function createFocusTime(
  data: CreateFocusTimeInput,
): Promise<{ focusTime: FocusTimeApi | null; error?: Error }> {
  try {
    const response = await apiClient.post("/focus-time", data)
    return { focusTime: response.data.focusTime }
  } catch (error) {
    console.error("Error creating focus time entry:", error)
    return { focusTime: null, error: error as Error }
  }
}

// Start focus session
export async function startFocusSession(): Promise<{ sessionId: string; error?: Error }> {
  try {
    const response = await apiClient.post("/focus-time/start")
    return { sessionId: response.data.sessionId }
  } catch (error) {
    console.error("Error starting focus session:", error)
    return { sessionId: "", error: error as Error }
  }
}

// End focus session
export async function endFocusSession(sessionId: string): Promise<{ focusTime: FocusTimeApi | null; error?: Error }> {
  try {
    const response = await apiClient.post(`/focus-time/end/${sessionId}`)
    return { focusTime: response.data.focusTime }
  } catch (error) {
    console.error(`Error ending focus session ${sessionId}:`, error)
    return { focusTime: null, error: error as Error }
  }
}

// Get team focus time stats
export async function getTeamFocusTimeStats(
  teamId: string,
): Promise<{ stats: Record<string, FocusTimeStats>; error?: Error }> {
  try {
    const response = await apiClient.get(`/teams/${teamId}/focus-time/stats`)
    return { stats: response.data.stats || {} }
  } catch (error) {
    console.error(`Error fetching focus time stats for team ${teamId}:`, error)
    return { stats: {}, error: error as Error }
  }
}
