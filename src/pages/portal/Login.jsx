import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import Logo from '../../components/Logo';
import { useAuthStore } from '../../store/authStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(email, password);
      navigate(user.role === 'admin' ? '/admin' : '/portal');
    } catch {
      // error handled in store
    }
  };

  return (
    <>
      <SEO title="Customer Portal Login" description="Secure login for Prime Door & Dock customer portal." />

      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="flex justify-center mb-6">
            <Logo linked={false} imgClassName="h-20 w-auto max-w-[260px] object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-navy-900 mb-2 text-center">Customer Portal</h1>
          <p className="text-gray-500 text-sm mb-6">Access your service history and invoices</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-navy-900 text-white py-3 rounded font-semibold hover:bg-navy-700 disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-4">
            <Link to="/" className="text-gold-500 hover:underline">← Back to website</Link>
          </p>
        </div>
      </div>
    </>
  );
}
