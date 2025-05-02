import apiClient from "./api-client";
import type { OrganizationRole } from "./types/permissions";

// Types
export interface OrganizationMember {
  id: string;
  userId: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
  role: OrganizationRole;
  joinedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  description: string | null;
  logo: string | null;
  website: string | null;
  isActive: boolean;
  subscriptionTier: string;
  subscriptionStatus: string;
  maxUsers: number;
  maxTeams: number;
  maxProjects: number;
  createdAt: string;
  updatedAt: string;
  members: OrganizationMember[];
  memberCount: number;
  teamCount: number;
}

export interface CreateOrganizationInput {
  name: string;
  description?: string;
  logo?: string;
  website?: string;
}

export interface UpdateOrganizationInput {
  name?: string;
  description?: string;
  logo?: string;
  website?: string;
}

export interface InviteToOrganizationInput {
  email: string;
  role?: OrganizationRole;
}

export interface OrganizationInvitation {
  id: string;
  organizationId: string;
  organizationName: string;
  role: OrganizationRole;
  status: string;
  expiresAt: string;
  createdAt: string;
  invitedBy: {
    id: string;
    name: string | null;
  } | null;
}

// Get all organizations for the current user
export async function getMyOrganizations(): Promise<{
  organizations: Organization[];
  error?: Error;
}> {
  try {
    const response = await apiClient.get("/organizations");
    return { organizations: response.data.organizations || [] };
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return { organizations: [], error: error as Error };
  }
}

// Get organization by ID
export async function getOrganizationById(
  id: string,
): Promise<{ organization: Organization | null; error?: Error }> {
  try {
    const response = await apiClient.get(`/organizations/${id}`);
    return { organization: response.data.organization };
  } catch (error) {
    console.error(`Error fetching organization with ID ${id}:`, error);
    return { organization: null, error: error as Error };
  }
}

// Create a new organization
export async function createOrganization(
  data: CreateOrganizationInput,
): Promise<{ organization: Organization | null; error?: Error }> {
  try {
    const response = await apiClient.post("/organizations", data);
    return { organization: response.data.organization };
  } catch (error) {
    console.error("Error creating organization:", error);
    return { organization: null, error: error as Error };
  }
}

// Update an organization
export async function updateOrganization(
  id: string,
  data: UpdateOrganizationInput,
): Promise<{ organization: Organization | null; error?: Error }> {
  try {
    const response = await apiClient.put(`/organizations/${id}`, data);
    return { organization: response.data.organization };
  } catch (error) {
    console.error(`Error updating organization with ID ${id}:`, error);
    return { organization: null, error: error as Error };
  }
}

// Delete an organization
export async function deleteOrganization(
  id: string,
): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(`/organizations/${id}`);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting organization with ID ${id}:`, error);
    return { success: false, error: error as Error };
  }
}

// Get organization members
export async function getOrganizationMembers(
  id: string,
): Promise<{ members: OrganizationMember[]; error?: Error }> {
  try {
    const response = await apiClient.get(`/organizations/${id}/members`);
    return { members: response.data.members || [] };
  } catch (error) {
    console.error(`Error fetching members for organization ${id}:`, error);
    return { members: [], error: error as Error };
  }
}

// Invite a user to an organization
export async function inviteToOrganization(
  organizationId: string,
  data: InviteToOrganizationInput,
): Promise<{ success: boolean; invitation?: any; error?: Error }> {
  try {
    const response = await apiClient.post(
      `/organizations/${organizationId}/invite`,
      data,
    );
    return { success: true, invitation: response.data.invitation };
  } catch (error) {
    console.error(
      `Error inviting user to organization ${organizationId}:`,
      error,
    );
    return { success: false, error: error as Error };
  }
}

// Get organization invitations
export async function getOrganizationInvitations(): Promise<{
  invitations: OrganizationInvitation[];
  error?: Error;
}> {
  try {
    const response = await apiClient.get("/organizations/invitations");
    return { invitations: response.data.invitations || [] };
  } catch (error) {
    console.error("Error fetching organization invitations:", error);
    return { invitations: [], error: error as Error };
  }
}

// Respond to an organization invitation
export async function respondToOrganizationInvitation(
  id: string,
  status: "ACCEPTED" | "DECLINED",
): Promise<{
  success: boolean;
  message?: string;
  organizationId?: string;
  error?: Error;
}> {
  try {
    const response = await apiClient.post(
      `/organizations/invitations/${id}/respond`,
      {
        status,
      },
    );
    return {
      success: true,
      message: response.data.message,
      organizationId: response.data.organizationId,
    };
  } catch (error) {
    console.error(`Error responding to invitation ${id}:`, error);
    return { success: false, error: error as Error };
  }
}

// Remove a member from an organization
export async function removeOrganizationMember(
  organizationId: string,
  memberId: string,
): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.delete(
      `/organizations/${organizationId}/members/${memberId}`,
    );
    return { success: true };
  } catch (error) {
    console.error(
      `Error removing member ${memberId} from organization ${organizationId}:`,
      error,
    );
    return { success: false, error: error as Error };
  }
}

// Update a member's role in an organization
export async function updateOrganizationMemberRole(
  organizationId: string,
  memberId: string,
  role: OrganizationRole,
): Promise<{ success: boolean; error?: Error }> {
  try {
    await apiClient.put(
      `/organizations/${organizationId}/members/${memberId}`,
      { role },
    );
    return { success: true };
  } catch (error) {
    console.error(
      `Error updating role for member ${memberId} in organization ${organizationId}:`,
      error,
    );
    return { success: false, error: error as Error };
  }
}
