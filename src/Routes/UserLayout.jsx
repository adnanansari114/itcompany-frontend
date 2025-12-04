// src/routes/UserLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const UserLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar isHome={isHome} />  
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;