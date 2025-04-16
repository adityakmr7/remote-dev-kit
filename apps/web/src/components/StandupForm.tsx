import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';

interface StandupMessage {
    type: 'standup';
    content: {
        yesterday: string;
        today: string;
        blockers: string;
    };
}

interface Standup {
    id: string;
    content: {
        yesterday: string;
        today: string;
        blockers: string;
    };
    createdAt: string;
    user: {
        name: string;
        avatarUrl?: string;
    };
}

export const StandupForm = () => {
    const { token } = useAuth();
    const [form, setForm] = useState({
        yesterday: '',
        today: '',
        blockers: ''
    });
    const [standups, setStandups] = useState<Standup[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const wsRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (!token) return;

        const ws = new WebSocket(`ws://localhost:8080?token=${token}`);
        wsRef.current = ws;

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'standup') {
                setStandups(prev => [data.data, ...prev]);
            }
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('Disconnected from WebSocket');
        };

        return () => {
            ws.close();
        };
    }, [token]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!wsRef.current || !form.yesterday.trim() || !form.today.trim()) return;

        setIsSubmitting(true);
        try {
            const message: StandupMessage = {
                type: 'standup',
                content: {
                    yesterday: form.yesterday.trim(),
                    today: form.today.trim(),
                    blockers: form.blockers.trim()
                }
            };

            wsRef.current.send(JSON.stringify(message));
            setForm({ yesterday: '', today: '', blockers: '' });
        } catch (error) {
            console.error('Error submitting standup:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-6">Daily Standup</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="yesterday" className="block text-sm font-medium text-gray-700 mb-2">
                            What did you do yesterday?
                        </label>
                        <textarea
                            id="yesterday"
                            name="yesterday"
                            value={form.yesterday}
                            onChange={handleChange}
                            placeholder="List your completed tasks from yesterday"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            rows={3}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="today" className="block text-sm font-medium text-gray-700 mb-2">
                            What are you working on today?
                        </label>
                        <textarea
                            id="today"
                            name="today"
                            value={form.today}
                            onChange={handleChange}
                            placeholder="List your planned tasks for today"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            rows={3}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="blockers" className="block text-sm font-medium text-gray-700 mb-2">
                            Any blockers or challenges?
                        </label>
                        <textarea
                            id="blockers"
                            name="blockers"
                            value={form.blockers}
                            onChange={handleChange}
                            placeholder="List any blockers or challenges you're facing"
                            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                            rows={2}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Standup'}
                    </button>
                </form>
            </div>

            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b">
                    <h3 className="text-xl font-semibold">Recent Standups</h3>
                </div>
                <div className="divide-y">
                    {standups.map((standup) => (
                        <div key={standup.id} className="p-6">
                            <div className="flex items-center mb-4">
                                {standup.user.avatarUrl ? (
                                    <img
                                        src={standup.user.avatarUrl}
                                        alt={standup.user.name}
                                        className="w-8 h-8 rounded-full mr-3"
                                    />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                        {standup.user.name.charAt(0)}
                                    </div>
                                )}
                                <div>
                                    <p className="font-medium">{standup.user.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(standup.createdAt).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">Yesterday</h4>
                                    <p className="text-gray-800">{standup.content.yesterday}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-500 mb-1">Today</h4>
                                    <p className="text-gray-800">{standup.content.today}</p>
                                </div>
                                {standup.content.blockers && (
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">Blockers</h4>
                                        <p className="text-gray-800">{standup.content.blockers}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 