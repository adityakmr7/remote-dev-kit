import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { name: 'Standups', href: '/dashboard/standups', icon: '📝' },
    { name: 'Focus Time', href: '/dashboard/focus', icon: '⏱️' },
    { name: 'Code Reviews', href: '/dashboard/reviews', icon: '👨‍💻' },
    { name: 'Team', href: '/dashboard/team', icon: '👥' },
];

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const { logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-row  bg-gray-100">
            {/* Mobile sidebar backdrop */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:z-0`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-center h-16 px-4 bg-black">
                        <h1 className="text-xl font-bold text-white">DevSync</h1>
                    </div>
                    <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                                    location.pathname === item.href
                                        ? 'bg-gray-100 text-black'
                                        : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="p-4 border-t">
                        <button
                            onClick={logout}
                            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50"
                        >
                            <span className="mr-3">🚪</span>
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile sidebar toggle */}
            <div className="lg:hidden">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="fixed top-4 left-4 z-50 p-2 rounded-md bg-black text-white"
                >
                    {sidebarOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Main content */}
            <div className="lg:pl-16 flex flex-col min-h-screen">
                <main className="flex-1 p-4 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
};
