// src/routes/UserLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar isHome={isHome} />  {/* Tumhara existing logic safe hai */}
      <Outlet />                  {/* Child pages yahan render honge */}
      <Footer />
    </>
  );
};

export default UserLayout;