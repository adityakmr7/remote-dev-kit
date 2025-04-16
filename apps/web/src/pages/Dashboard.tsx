import { DashboardLayout } from '../components/DashboardLayout';
import { StandupForm } from '../components/StandupForm';

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6 lg:space-y-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
                    <h1 className="text-2xl lg:text-3xl font-bold">Dashboard</h1>
                    <div className="flex flex-wrap gap-2 lg:gap-4">
                        <button className="flex-1 lg:flex-none px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            New Standup
                        </button>
                        <button className="flex-1 lg:flex-none px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            Start Focus Session
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {/* Quick Stats */}
                    <div className="bg-white rounded-lg shadow p-4 lg:p-6">
                        <h3 className="text-lg font-semibold mb-4">Today's Focus</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Focus Time</p>
                                <p className="text-2xl font-bold">2h 30m</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Standups</p>
                                <p className="text-2xl font-bold">1</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Activity */}
                    <div className="bg-white rounded-lg shadow p-4 lg:p-6">
                        <h3 className="text-lg font-semibold mb-4">Team Activity</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                                <div>
                                    <p className="font-medium">John Doe</p>
                                    <p className="text-sm text-gray-500">Started focus session</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                                <div>
                                    <p className="font-medium">Jane Smith</p>
                                    <p className="text-sm text-gray-500">Submitted standup</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Reviews */}
                    <div className="bg-white rounded-lg shadow p-4 lg:p-6">
                        <h3 className="text-lg font-semibold mb-4">Code Reviews</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium">PR #123</p>
                                <p className="text-sm text-gray-500">Waiting for review</p>
                            </div>
                            <div>
                                <p className="font-medium">PR #124</p>
                                <p className="text-sm text-gray-500">In progress</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Standup Form */}
                <div className="bg-white rounded-lg shadow p-4 lg:p-6">
                    <StandupForm />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
