import apiClient from "./api-client";

// Types
export interface PairSessionParticipant {
  id: string
  userId: string
  name: string | null
  email: string
  avatarUrl: string | null
  joinedAt: string
}

export interface PairProgrammingSession {
  id: string
  title: string
  description: string | null
  teamId: string
  status: "SCHEDULED" | "ACTIVE" | "COMPLETED"
  startTime: string
  endTime: string | null
  recordingUrl: string | null
  createdAt: string
  updatedAt: string
  participants: PairSessionParticipant[]
}

export interface CreatePairSessionInput {
  title: string
  description?: string
  teamId: string
  startTime: string
  participants?: string[] // User IDs
}

export interface UpdatePairSessionInput {
  title?: string
  description?: string
  startTime?: string
  status?: "SCHEDULED" | "ACTIVE" | "COMPLETED"
  endTime?: string
  recordingUrl?: string
}

// Get all pair sessions for a team
export async function getTeamPairSessions(
  teamId: string,
): Promise<{ sessions: PairProgrammingSession[]; error?: Error }> {
  try {
    const response = await apiClient.get(`/teams/${teamId}/pair-sessions`)
    return { sessions: response.data.pairSessions || [] }
  } catch (error) {
    console.error(`Error fetching pair sessions for team ${teamId}:`, error)
    return { sessions: [], error: error as Error }
  }
}

// Get pair session by ID
export async function getPairSessionById(
  id: string,
): Promise<{ session: PairProgrammingSession | null; error?: Error }> {
  try {
    const response = await apiClient.get(`/pair-sessions/${id}`)
    return { session: response.data.pairSession }
  } catch (error) {
    console.error(`Error fetching pair session with ID ${id}:`, error)
    return { session: null, error: error as Error }
  }
}

// Create a new pair session
export async function createPairSession(
  data: CreatePairSessionInput,
): Promise<{ session: PairProgrammingSession | null; error?: Error }> {
  try {
    const response = await apiClient.post("/pair-sessions", data)
    return { session: response.data.pairSession }
  } catch (error) {
    console.error("Error creating pair session:", error)
    return { session: null, error: error as Error }
  }
}

// Update a pair session
export async function updatePairSession(
  id: string,
  data: UpdatePairSessionInput,
): Promise<{ session: PairProgrammingSession | null; error?: Error }> {
  try {
    const response = await apiClient.put(`/pair-sessions/${id}`, data)
    return { session: response.data.pairSession }
  } catch (error) {
    console.error(`Error updating pair session with ID ${id}:`, error)
    return { session: null, error: error as Error }
  }
}

// Delete a pair session
export async function deletePairSession(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/pair-sessions/${id}`)
    return { success: true }
  } catch (error) {
    console.error(`Error deleting pair session with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// Join a pair session
export async function joinPairSession(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.post(`/pair-sessions/${id}/join`)
    return { success: true }
  } catch (error) {
    console.error(`Error joining pair session with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// Leave a pair session
export async function leavePairSession(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.post(`/pair-sessions/${id}/leave`)
    return { success: true }
  } catch (error) {
    console.error(`Error leaving pair session with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// Start a pair session
export async function startPairSession(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.post(`/pair-sessions/${id}/start`)
    return { success: true }
  } catch (error) {
    console.error(`Error starting pair session with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// End a pair session
export async function endPairSession(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.post(`/pair-sessions/${id}/end`)
    return { success: true }
  } catch (error) {
    console.error(`Error ending pair session with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// Get my upcoming pair sessions
export async function getMyUpcomingPairSessions(): Promise<{
  sessions: PairProgrammingSession[]
  error?: Error
}> {
  try {
    const response = await apiClient.get("/pair-sessions/upcoming")
    return { sessions: response.data.pairSessions || [] }
  } catch (error) {
    console.error("Error fetching upcoming pair sessions:", error)
    return { sessions: [], error: error as Error }
  }
}

// Get active pair sessions
export async function getActivePairSessions(): Promise<{
  sessions: PairProgrammingSession[]
  error?: Error
}> {
  try {
    const response = await apiClient.get("/pair-sessions/active")
    return { sessions: response.data.pairSessions || [] }
  } catch (error) {
    console.error("Error fetching active pair sessions:", error)
    return { sessions: [], error: error as Error }
  }
}
