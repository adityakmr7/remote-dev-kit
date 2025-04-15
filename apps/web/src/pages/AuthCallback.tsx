import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../context/AuthContext.tsx";

const AuthCallback = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");


        if (token) {
            login(token);
            localStorage.setItem("token", token);
            setTimeout(() => {
                navigate("/dashboard");
            }, 50);
        } else {
            navigate("/");
        }
    }, [navigate]);

    return <p className="text-center mt-10">Logging you in...</p>;
};

export default AuthCallback;
