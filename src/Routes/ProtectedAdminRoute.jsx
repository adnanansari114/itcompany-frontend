import { Navigate } from 'react-router-dom';

const isAdminAuthenticated = () => {
  return !!localStorage.getItem('adminToken');
};

export const ProtectedAdminRoute = ({ children }) => {
  return isAdminAuthenticated() ? children : <Navigate to="/admin/login" replace />;
};

export const PublicOnlyRoute = ({ children }) => {
  return isAdminAuthenticated() ? <Navigate to="/admin/dashboard" replace /> : children;
};