import { api } from './api';

interface LoginResponse {
    token: string;
}

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    email: string;
}

export const authService = {
    login: async (email: string, password: string): Promise<LoginResponse> => {
        const response = await api.post('/auth/manual/login', { email, password });
        return response.data;
    },

    register: async (data: RegisterData): Promise<LoginResponse> => {
        const response = await api.post('/auth/manual/register', data);
        return response.data;
    },

    getUser: async (): Promise<User> => {
        const response = await api.get('/auth/me');
        return response.data;
    }
};