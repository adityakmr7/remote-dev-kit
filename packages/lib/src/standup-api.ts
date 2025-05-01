import apiClient from "./api-client.ts";

// Types
export interface StandupUser {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
}
export interface StandUpTags {
  id: string
  name: string,

}
export interface Standup {
  id: string
  user: StandupUser
  yesterday: string | null
  today: string | null
  blockers: string | null
  audioUrl?: string | null
  tags: string[]
  status: "blocked" | "needs help" | "on track"
  createdAt: string
}

export interface StandupHistoryItem {
  date: string
  participantCount: number
}

export interface Pagination {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface StandupHistoryResponse {
  history: StandupHistoryItem[]
  pagination: Pagination
}

export interface CreateStandupInput {

  yesterday?: string | null
  today?: string | null
  blockers?: string | null
  tags?: string[]
  audioUrl?: string | null
  teamId?: string
}

export interface UpdateStandupInput {
  yesterday?: string | null
  today?: string | null
  blockers?: string | null
  tags?: string[]
  audioUrl?: string | null
}

// Get today's standups
export async function getTodayStandups(): Promise<Standup[]> {
  try {
    const response = await apiClient.get("/standups/today");
    console.log("Today's standups:", response.data.standups);
    return response.data.standups
  } catch (error) {
    console.error("Error fetching today's standups:", error)
    return []
  }
}

// Get standups by date
export async function getStandupsByDate(date: string): Promise<Standup[]> {
  try {
    const response = await apiClient.get(`/standups/date/${date}`)
    return response.data.standups
  } catch (error) {
    console.error(`Error fetching standups for date ${date}:`, error)
    return []
  }
}

// Get standup history
export async function getStandupHistory(page = 1, limit = 10): Promise<StandupHistoryResponse> {
  try {
    const response = await apiClient.get(`/standups/history?page=${page}&limit=${limit}`)
    return response.data
  } catch (error) {
    console.error("Error fetching standup history:", error)
    return {
      history: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
    }
  }
}

// Get standup by ID
export async function getStandupById(id: string): Promise<Standup | null> {
  try {
    const response = await apiClient.get(`/standups/${id}`)
    return response.data.standup
  } catch (error) {
    console.error(`Error fetching standup with ID ${id}:`, error)
    return null
  }
}

// Create a new standup
export async function createStandup(data: CreateStandupInput): Promise<Standup | null> {
  try {
    const response = await apiClient.post("/standups", data)
    return response.data.standup
  } catch (error) {
    console.error("Error creating standup:", error)
    throw error
  }
}

// Update a standup
export async function updateStandup(id: string, data: UpdateStandupInput): Promise<Standup | null> {
  try {
    const response = await apiClient.put(`/standups/${id}`, data)
    return response.data.standup
  } catch (error) {
    console.error(`Error updating standup with ID ${id}:`, error)
    throw error
  }
}

// Delete a standup
export async function deleteStandup(id: string): Promise<boolean> {
  try {
    await apiClient.delete(`/standups/${id}`)
    return true
  } catch (error) {
    console.error(`Error deleting standup with ID ${id}:`, error)
    return false
  }
}

// Get my standups
export async function getMyStandups(page = 1, limit = 10): Promise<{ standups: Standup[]; pagination: Pagination }> {
  try {
    const response = await apiClient.get(`/standups/my-standups?page=${page}&limit=${limit}`)
    return response.data
  } catch (error) {
    console.error("Error fetching my standups:", error)
    return {
      standups: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
    }
  }
}
