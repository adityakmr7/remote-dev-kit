import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// Add a request interceptor to include the token in requests
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("admin_token")
        : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh the token
        const refreshToken = localStorage.getItem("admin_refresh_token");
        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        const response = await axios.post(
          `${API_URL}/api/admin/auth/refresh-token`,
          {
            refreshToken,
          },
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // Save the new tokens
        localStorage.setItem("admin_token", accessToken);
        localStorage.setItem("admin_refresh_token", newRefreshToken);

        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (error) {
        // If refresh fails, redirect to login
        if (typeof window !== "undefined") {
          localStorage.removeItem("admin_token");
          localStorage.removeItem("admin_refresh_token");
          window.location.href = "/admin/login";
        }
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

// Auth API
export const adminAuthApi = {
  login: async (email: string, password: string) => {
    const response = await api.post("/api/admin/auth/login", {
      email,
      password,
    });
    return response.data;
  },
  logout: async () => {
    const response = await api.post("/api/admin/auth/logout");
    return response.data;
  },
  validateToken: async () => {
    try {
      const response = await api.get("/api/admin/auth/validate");
      return response.data;
    } catch (error) {
      return { valid: false };
    }
  },
};

// Organizations API
export const organizationsApi = {
  getAll: async (page = 1, limit = 10, search = "") => {
    const response = await api.get(
      `/api/admin/organizations?page=${page}&limit=${limit}&search=${search}`,
    );
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/api/admin/organizations/${id}`);
    return response.data;
  },
  create: async (data: { name: string; description?: string }) => {
    const response = await api.post("/api/admin/organizations", data);
    return response.data;
  },
  update: async (
    id: string,
    data: { name?: string; description?: string; isActive?: boolean },
  ) => {
    const response = await api.put(`/api/admin/organizations/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/api/admin/organizations/${id}`);
    return response.data;
  },
  getMembers: async (id: string, page = 1, limit = 10) => {
    const response = await api.get(
      `/api/admin/organizations/${id}/members?page=${page}&limit=${limit}`,
    );
    return response.data;
  },
};

// Users API
export const usersApi = {
  getAll: async (page = 1, limit = 10, search = "") => {
    const response = await api.get(
      `/api/admin/users?page=${page}&limit=${limit}&search=${search}`,
    );
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/api/admin/users/${id}`);
    return response.data;
  },
  create: async (data: {
    name: string;
    email: string;
    password: string;
    role?: string;
  }) => {
    const response = await api.post("/api/admin/users", data);
    return response.data;
  },
  update: async (
    id: string,
    data: { name?: string; email?: string; role?: string; isActive?: boolean },
  ) => {
    const response = await api.put(`/api/admin/users/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/api/admin/users/${id}`);
    return response.data;
  },
};

// Subscriptions API
export const subscriptionsApi = {
  getAll: async (page = 1, limit = 10) => {
    const response = await api.get(
      `/api/admin/subscriptions?page=${page}&limit=${limit}`,
    );
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/api/admin/subscriptions/${id}`);
    return response.data;
  },
  create: async (data: {
    organizationId: string;
    plan: string;
    startDate: Date;
    endDate?: Date;
  }) => {
    const response = await api.post("/api/admin/subscriptions", data);
    return response.data;
  },
  update: async (
    id: string,
    data: { plan?: string; status?: string; endDate?: Date },
  ) => {
    const response = await api.put(`/api/admin/subscriptions/${id}`, data);
    return response.data;
  },
  cancel: async (id: string) => {
    const response = await api.post(`/api/admin/subscriptions/${id}/cancel`);
    return response.data;
  },
};

// Dashboard API
export const dashboardApi = {
  getStats: async () => {
    const response = await api.get("/api/admin/dashboard/stats");
    return response.data;
  },
  getRecentActivity: async () => {
    const response = await api.get("/api/admin/dashboard/activity");
    return response.data;
  },
};

export default api;
