import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from '../admin/AdminLogin';
import AdminDashboard from '../admin/AdminDashboard';
import AddJob from '../admin/AddJob';
import AdminApplications from '../admin/AdminApplication';
import AdminContacts from '../admin/AdminContacts';
import AdminLayout from '../components/AdminLayout';
import { ProtectedAdminRoute, PublicOnlyRoute } from '../Routes/ProtectedAdminRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={< AdminLayout />}>
        <Route
          path="/admin/login" mon
          element={
            <PublicOnlyRoute>
              <AdminLogin />
            </PublicOnlyRoute>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboard />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/addjob"
          element={
            <ProtectedAdminRoute>
              <AddJob />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/applications"
          element={
            <ProtectedAdminRoute>
              <AdminApplications />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/contacts"
          element={
            <ProtectedAdminRoute>
              <AdminContacts />
            </ProtectedAdminRoute>
          }
        />
      </Route>

      {/* Catch all invalid admin routes */}
      <Route path="/admin/*" element={<Navigate to="/admin/login" replace />} />
    </Routes>
  );
};

export default AdminRoutes;