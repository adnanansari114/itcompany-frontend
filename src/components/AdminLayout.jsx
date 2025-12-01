import { Outlet } from 'react-router-dom';
import AdminNavbar from '../admin/AdminNavbar';

const AdminLayout = () => {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login'; 
  };

  return (
    <>
      <AdminNavbar onLogout={handleLogout} />
      <div className="admin-container">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;