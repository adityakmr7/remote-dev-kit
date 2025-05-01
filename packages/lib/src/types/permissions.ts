// Permission types for team roles
export enum TeamPermission {
  // View permissions
  VIEW_TEAM = "VIEW_TEAM",
  VIEW_MEMBERS = "VIEW_MEMBERS",
  VIEW_STANDUPS = "VIEW_STANDUPS",
  VIEW_PAIR_SESSIONS = "VIEW_PAIR_SESSIONS",
  VIEW_PULL_REQUESTS = "VIEW_PULL_REQUESTS",
  VIEW_ANALYTICS = "VIEW_ANALYTICS",

  // Member management
  INVITE_MEMBERS = "INVITE_MEMBERS",
  REMOVE_MEMBERS = "REMOVE_MEMBERS",
  MANAGE_MEMBER_ROLES = "MANAGE_MEMBER_ROLES",

  // Content management
  CREATE_STANDUP = "CREATE_STANDUP",
  EDIT_ANY_STANDUP = "EDIT_ANY_STANDUP",
  DELETE_ANY_STANDUP = "DELETE_ANY_STANDUP",

  // Pair programming
  CREATE_PAIR_SESSION = "CREATE_PAIR_SESSION",
  EDIT_ANY_PAIR_SESSION = "EDIT_ANY_PAIR_SESSION",
  DELETE_ANY_PAIR_SESSION = "DELETE_ANY_PAIR_SESSION",

  // Pull requests
  CREATE_PR = "CREATE_PR",
  EDIT_ANY_PR = "EDIT_ANY_PR",
  DELETE_ANY_PR = "DELETE_ANY_PR",

  // Team management
  EDIT_TEAM_SETTINGS = "EDIT_TEAM_SETTINGS",
  DELETE_TEAM = "DELETE_TEAM",
}

// Define team roles
export enum TeamRole {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  MEMBER = "MEMBER",
  GUEST = "GUEST",
}

// Define permission sets for each role
export const ROLE_PERMISSIONS: Record<TeamRole, TeamPermission[]> = {
  [TeamRole.ADMIN]: Object.values(TeamPermission), // Admins have all permissions

  [TeamRole.MANAGER]: [
    // View permissions
    TeamPermission.VIEW_TEAM,
    TeamPermission.VIEW_MEMBERS,
    TeamPermission.VIEW_STANDUPS,
    TeamPermission.VIEW_PAIR_SESSIONS,
    TeamPermission.VIEW_PULL_REQUESTS,
    TeamPermission.VIEW_ANALYTICS,

    // Member management
    TeamPermission.INVITE_MEMBERS,
    TeamPermission.REMOVE_MEMBERS,

    // Content management
    TeamPermission.CREATE_STANDUP,
    TeamPermission.EDIT_ANY_STANDUP,
    TeamPermission.DELETE_ANY_STANDUP,

    // Pair programming
    TeamPermission.CREATE_PAIR_SESSION,
    TeamPermission.EDIT_ANY_PAIR_SESSION,
    TeamPermission.DELETE_ANY_PAIR_SESSION,

    // Pull requests
    TeamPermission.CREATE_PR,
    TeamPermission.EDIT_ANY_PR,
    TeamPermission.DELETE_ANY_PR,
  ],

  [TeamRole.MEMBER]: [
    // View permissions
    TeamPermission.VIEW_TEAM,
    TeamPermission.VIEW_MEMBERS,
    TeamPermission.VIEW_STANDUPS,
    TeamPermission.VIEW_PAIR_SESSIONS,
    TeamPermission.VIEW_PULL_REQUESTS,

    // Content management
    TeamPermission.CREATE_STANDUP,

    // Pair programming
    TeamPermission.CREATE_PAIR_SESSION,

    // Pull requests
    TeamPermission.CREATE_PR,
  ],

  [TeamRole.GUEST]: [
    // View permissions
    TeamPermission.VIEW_TEAM,
    TeamPermission.VIEW_MEMBERS,
    TeamPermission.VIEW_STANDUPS,
    TeamPermission.VIEW_PAIR_SESSIONS,
    TeamPermission.VIEW_PULL_REQUESTS,
  ],
}

// Helper function to check if a role has a specific permission
export function hasPermission(role: TeamRole, permission: TeamPermission): boolean {
  return ROLE_PERMISSIONS[role]?.includes(permission) || false
}

// Helper function to get all permissions for a role
export function getPermissionsForRole(role: TeamRole): TeamPermission[] {
  return ROLE_PERMISSIONS[role] || []
}
