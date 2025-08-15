import axios from "axios";

// Get the API base URL from environment or default to localhost
const getApiBaseUrl = () => {
  // In browser, use environment variable or default
  if (typeof window !== "undefined") {
    return process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
  }
  // On server, use internal URL or default
  return process.env.API_URL || "http://localhost:4000/api";
};

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 second timeout
})
// Add a request interceptor to include the auth token in requests
apiClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage (in a real app, consider using a more secure approach)
    //@ts-ignore
    const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor to handle token refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If the error is 401 and we haven't already tried to refresh the token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // Get the refresh token
        const refreshToken = localStorage.getItem("refreshToken")

        if (!refreshToken) {
          // No refresh token available, redirect to login
          //@ts-ignore
          if (typeof window !== "undefined") {
            //@ts-ignore
            window.location.href = "/login"
          }
          return Promise.reject(error)
        }

        // Try to get a new token
        const response = await axios.post(`${getApiBaseUrl()}/auth/refresh-token`, {
          refreshToken,
        })

        const { accessToken, refreshToken: newRefreshToken } = response.data

        // Store the new tokens
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", newRefreshToken)

        // Update the authorization header
        originalRequest.headers.Authorization = `Bearer ${accessToken}`

        // Retry the original request
        return apiClient(originalRequest)
      } catch (refreshError) {
        // If refresh token is invalid, redirect to login
        //@ts-ignore
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken")
          localStorage.removeItem("refreshToken")
          //@ts-ignore
          window.location.href = "/login"
        }
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
)

export default apiClient
