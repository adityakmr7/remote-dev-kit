import { DashboardLayout } from '../components/DashboardLayout';
import { StandupForm } from '../components/StandupForm';

const Standups = () => {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold">Standups</h1>
                <StandupForm />
            </div>
        </DashboardLayout>
    );
};

export default Standups; 