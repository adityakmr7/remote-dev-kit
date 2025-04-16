import { createBrowserRouter, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import AuthCallback from './pages/AuthCallback';
import Dashboard from './pages/Dashboard';
import Standups from './pages/Standups';
import Login from './pages/Login';
import FocusTime from './pages/FocusTime';
import CodeReviews from './pages/CodeReviews';
import Team from './pages/Team';


// Protected Route wrapper component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/auth/callback',
        element: <AuthCallback />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/dashboard',
        element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
        ),
    },
    {
        path: '/dashboard/standups',
        element: (
            <ProtectedRoute>
                <Standups />
            </ProtectedRoute>
        ),
    },
    {
        path: '/dashboard/focus',
        element: (
            <ProtectedRoute>
                <FocusTime />
            </ProtectedRoute>
        ),
    },
    {
        path: '/dashboard/reviews',
        element: (
            <ProtectedRoute>
                <CodeReviews />
            </ProtectedRoute>
        ),
    },
    {
        path: '/dashboard/team',
        element: (
            <ProtectedRoute>
                <Team />
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: <Navigate to="/" replace />,
    },
]); 