import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from "react-router-dom";

type Mode = 'login' | 'register';
type FormData = {
    name: string;
    email: string;
    password: string;
};

export const useAuthForm = (mode: Mode) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState<FormData>({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const endpoint =
            mode === 'login'
                ? 'http://localhost:4000/api/auth/manual/login'
                : 'http://localhost:4000/api/auth/manual/register';

        const payload =
            mode === 'login'
                ? { email: form.email, password: form.password }
                : form;

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Something went wrong');
            } else {
                login(data.token);

                navigate('/dashboard');
            }
        } catch (err: unknown) {
            setError('Server error');
        } finally {
            setLoading(false);
        }
    };

    return {
        form,
        error,
        loading,
        handleChange,
        handleSubmit,
    };
};
