// Client-side token utilities
declare global {
  interface window {
    localStorage: Storage;
  }
}


// Define a check for browser environment
const isBrowser = () => typeof window !== 'undefined';

/**
 * Get the access token from localStorage
 */
export function getAccessToken(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem("accessToken");
}

/**
 * Get the refresh token from localStorage
 */
export function getRefreshToken(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem("refreshToken");
}

/**
 * Store tokens in localStorage
 */
export function storeTokens(accessToken: string, refreshToken: string): void {
  if (!isBrowser()) return;
  window.localStorage.setItem("accessToken", accessToken);
  window.localStorage.setItem("refreshToken", refreshToken);
}

/**
 * Clear tokens from localStorage
 */
export function clearTokens(): void {
  if (!isBrowser()) return;
  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("refreshToken");
}

/**
 * Check if tokens exist in localStorage
 */
export function hasTokens(): boolean {
  if (!isBrowser()) return false;
  return !!window.localStorage.getItem("accessToken") && !!window.localStorage.getItem("refreshToken");
}

/**
 * Parse JWT token payload (without validation)
 * Note: This is for client-side use only and doesn't validate the token
 */
export function parseJwt(token: string): any {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      return null; // Not a valid JWT which should have 3 parts
    }
    const payload = parts[1];
    if (!payload) {
      return null;
    }
    return JSON.parse(atob(payload));
  } catch (e) {
    return null;
  }
}

/**
 * Check if the access token is expired
 */
export function isTokenExpired(token: string | null): boolean {
  if (!token) return true;

  const payload = parseJwt(token);
  if (!payload || !payload.exp) return true;

  const expirationTime = payload.exp * 1000; // Convert to milliseconds
  return Date.now() >= expirationTime;
}

// Get user from localStorage
export const getUser = () => {
  if (!isBrowser()) return null;
  const user = window.localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
