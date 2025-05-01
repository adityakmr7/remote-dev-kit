// Client-side token utilities

/**
 * Get the access token from localStorage
 */
export function getAccessToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("accessToken")
}

/**
 * Get the refresh token from localStorage
 */
export function getRefreshToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("refreshToken")
}

/**
 * Store tokens in localStorage
 */
export function storeTokens(accessToken: string, refreshToken: string): void {
  if (typeof window === "undefined") return
  localStorage.setItem("accessToken", accessToken)
  localStorage.setItem("refreshToken", refreshToken)
}

/**
 * Clear tokens from localStorage
 */
export function clearTokens(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
}

/**
 * Check if tokens exist in localStorage
 */
export function hasTokens(): boolean {
  if (typeof window === "undefined") return false
  return !!localStorage.getItem("accessToken") && !!localStorage.getItem("refreshToken")
}

/**
 * Parse JWT token payload (without validation)
 * Note: This is for client-side use only and doesn't validate the token
 */
export function parseJwt(token: string): any {
  try {
    return JSON.parse(atob(token.split(".")[1]))
  } catch (e) {
    return null
  }
}

/**
 * Check if the access token is expired
 */
export function isTokenExpired(token: string | null): boolean {
  if (!token) return true

  const payload = parseJwt(token)
  if (!payload || !payload.exp) return true

  const expirationTime = payload.exp * 1000 // Convert to milliseconds
  return Date.now() >= expirationTime
}
