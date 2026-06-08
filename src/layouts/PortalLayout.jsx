import { Outlet, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { useAuthStore } from '../store/authStore';

export default function PortalLayout() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/portal/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Logo to="/portal" imgClassName="h-14 w-auto max-w-[200px] object-contain" />
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500 hidden sm:inline">{user?.email}</span>
            <button
              type="button"
              onClick={handleLogout}
              className="text-navy-900 hover:text-gold-500 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
}
