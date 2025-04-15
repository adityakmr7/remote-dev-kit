import { useAuthForm } from '../hooks/useAuthForm';

type Mode = 'login' | 'register';

const AuthForm = ({ mode }: { mode: Mode }) => {
    const { form, error, loading, handleChange, handleSubmit } = useAuthForm(mode);

    return (
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
            {mode === 'register' && (
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded"
                    value={form.name}
                    onChange={handleChange}
                />
            )}
            <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded"
                value={form.email}
                onChange={handleChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded"
                value={form.password}
                onChange={handleChange}
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-2 rounded"
            >
                {loading ? 'Loading...' : mode === 'login' ? 'Login' : 'Register'}
            </button>
        </form>
    );
};

export default AuthForm;
