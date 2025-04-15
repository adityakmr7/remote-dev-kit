import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const PrivateRoute = () => {
    const { isAuthenticated, token } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            if (!token) {
                setIsLoading(false);
                return;
            }

            try {
                // You can add token validation logic here if needed
                // For now, we'll just check if token exists
                setIsValid(true);
            } catch (error) {
                console.error('Token validation failed:', error);
                setIsValid(false);
            } finally {
                setIsLoading(false);
            }
        };

        validateToken();
    }, [token]);

    if (isLoading) {
        return <div>Loading...</div>; // You can replace this with a proper loading component
    }

    if (!isAuthenticated || !isValid) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;
