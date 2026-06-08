import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function ProtectedRoute({ children, roles = [] }) {
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <Navigate to="/portal/login" replace />;
  }

  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate to="/portal/login" replace />;
  }

  return children;
}
