import apiClient from "./api-client";

// Types
export interface TeamMember {
  id: string
  name: string | null
  email: string
  avatarUrl: string | null
  status: string | null
  role: string
}

export interface Team {
  id: string
  name: string
  description: string | null
  createdAt: string
  updatedAt: string
  userRole: string
  memberCount?: number
  members: TeamMember[]
}

export interface TeamInvitation {
  id: string
  teamId: string
  teamName: string
  teamDescription?: string | null
  role: string
  status: string
  expiresAt: string
  createdAt: string
  invitedBy: {
    id: string
    name: string | null
  } | null
}

export interface CreateTeamInput {
  name: string
  description?: string
  visibility?: "private" | "organization" | "public"
}

export interface UpdateTeamInput {
  name?: string
  description?: string
  visibility?: "private" | "organization" | "public"
}

export interface AddTeamMemberInput {
  email: string
  role?: "ADMIN" | "MEMBER" | "MANAGER"
}

export interface InviteToTeamInput {
  email: string
  role?: "ADMIN" | "MEMBER" | "MANAGER"
}

// Get all teams for the current user
export async function getMyTeams(): Promise<{ teams: Team[]; error?: Error }> {
  try {
    const response = await apiClient.get("/teams")
    return { teams: response.data.teams || [] }
  } catch (error) {
    console.error("Error fetching teams:", error)
    return { teams: [], error: error as Error }
  }
}

// Get team by ID
export async function getTeamById(id: string): Promise<{ team: Team | null; error?: Error }> {
  try {
    const response = await apiClient.get(`/teams/${id}`)
    return { team: response.data.team }
  } catch (error) {
    console.error(`Error fetching team with ID ${id}:`, error)
    return { team: null, error: error as Error }
  }
}

// Create a new team
export async function createTeam(data: CreateTeamInput): Promise<{ team: Team | null; error?: Error }> {
  try {
    const response = await apiClient.post("/teams", data)
    return { team: response.data.team }
  } catch (error) {
    console.error("Error creating team:", error)
    return { team: null, error: error as Error }
  }
}

// Update a team
export async function updateTeam(id: string, data: UpdateTeamInput): Promise<{ team: Team | null; error?: Error }> {
  try {
    const response = await apiClient.put(`/teams/${id}`, data)
    return { team: response.data.team }
  } catch (error) {
    console.error(`Error updating team with ID ${id}:`, error)
    return { team: null, error: error as Error }
  }
}

// Delete a team
export async function deleteTeam(id: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/teams/${id}`)
    return { success: true }
  } catch (error) {
    console.error(`Error deleting team with ID ${id}:`, error)
    return { success: false, error: error as Error }
  }
}

// Add a member to a team
export async function addTeamMember(
    teamId: string,
    data: AddTeamMemberInput,
): Promise<{ member: TeamMember | null; error?: Error }> {
  try {
    const response = await apiClient.post(`/teams/${teamId}/members`, data)
    return { member: response.data.member }
  } catch (error) {
    console.error(`Error adding member to team ${teamId}:`, error)
    return { member: null, error: error as Error }
  }
}

// Remove a member from a team
export async function removeTeamMember(teamId: string, memberId: string): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/teams/${teamId}/members/${memberId}`)
    return { success: true }
  } catch (error) {
    console.error(`Error removing member ${memberId} from team ${teamId}:`, error)
    return { success: false, error: error as Error }
  }
}

// Update a team member's role
export async function updateTeamMemberRole(
    teamId: string,
    memberId: string,
    role: string,
): Promise<{ member: TeamMember | null; error?: Error }> {
  try {
    const response = await apiClient.put(`/teams/${teamId}/members/${memberId}`, { role })
    return { member: response.data.member }
  } catch (error) {
    console.error(`Error updating role for member ${memberId} in team ${teamId}:`, error)
    return { member: null, error: error as Error }
  }
}

// Get team invitations
export async function getTeamInvitations(): Promise<{ invitations: TeamInvitation[]; error?: Error }> {
  try {
    const response = await apiClient.get("/teams/invitations")
    return { invitations: response.data.invitations || [] }
  } catch (error) {
    console.error("Error fetching team invitations:", error)
    return { invitations: [], error: error as Error }
  }
}

// Get a specific team invitation
export async function getTeamInvitation(id: string): Promise<{ invitation: TeamInvitation | null; error?: Error }> {
  try {
    const response = await apiClient.get(`/teams/invitations/${id}`)
    return { invitation: response.data.invitation }
  } catch (error) {
    console.error(`Error fetching invitation with ID ${id}:`, error)
    return { invitation: null, error: error as Error }
  }
}

// Invite a user to a team
export async function inviteToTeam(
    teamId: string,
    data: InviteToTeamInput,
): Promise<{ success: boolean; invitation?: any; error?: Error }> {
  try {
    const response = await apiClient.post(`/teams/${teamId}/invite`, data)
    return { success: true, invitation: response.data.invitation }
  } catch (error) {
    console.error(`Error inviting user to team ${teamId}:`, error)
    return { success: false, error: error as Error }
  }
}

// Accept or decline a team invitation
export async function respondToInvitation(
    id: string,
    status: "ACCEPTED" | "DECLINED",
): Promise<{ success: boolean; message?: string; teamId?: string; error?: Error }> {
  try {
    const response = await apiClient.post(`/teams/invitations/${id}/respond`, { status })
    return {
      success: true,
      message: response.data.message,
      teamId: response.data.teamId,
    }
  } catch (error) {
    console.error(`Error responding to invitation ${id}:`, error)
    return { success: false, error: error as Error }
  }
}
