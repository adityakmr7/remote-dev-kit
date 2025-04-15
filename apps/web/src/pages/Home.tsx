import { useState } from 'react';
import AuthForm from '../components/AuthForm';

const Home = () => {
    const [tab, setTab] = useState<'login' | 'register'>('login');

    const loginWithGitHub = () => {
        window.location.href = 'http://localhost:4000/api/auth/github';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded p-6 w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold text-center">RemoteDevKit</h1>

                {/* Toggle Tabs */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setTab('login')}
                        className={`px-4 py-2 border-b-2 ${
                            tab === 'login' ? 'border-black' : 'border-transparent'
                        }`}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => setTab('register')}
                        className={`px-4 py-2 border-b-2 ${
                            tab === 'register' ? 'border-black' : 'border-transparent'
                        }`}
                    >
                        Register
                    </button>
                </div>

                {/* GitHub Login */}
                <button
                    onClick={loginWithGitHub}
                    className="w-full bg-gray-900 text-white py-2 rounded"
                >
                    Continue with GitHub
                </button>

                {/* Manual Form */}
                <AuthForm mode={tab} />
            </div>
        </div>
    );
};

export default Home;
