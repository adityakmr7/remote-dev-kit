const Dashboard = () => {
    const token = localStorage.getItem("token");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            <p>Your token: <code>{token?.slice(0, 30)}...</code></p>
        </div>
    );
};

export default Dashboard;
