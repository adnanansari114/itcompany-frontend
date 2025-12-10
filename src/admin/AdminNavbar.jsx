// import { useNavigate } from "react-router-dom";

// export default function AdminNavbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken");
//     sessionStorage.removeItem("adminToken");
//     navigate("/admin/login");
//   };

//   return (
//     <nav className="admin-nav">
//       <h3>Admin Panel</h3>
//       <ul>
//         <li><a href="/admin/dashboard">Dashboard</a></li>
//         <li><a href="/admin/addjob">Add Job</a></li>
//         <li><a href="/admin/adminapplicaion">Applications</a></li>
//         <li><a href="/admin/admincontact">Contacts</a></li>
//         <li><a href="/admin/jobs">All Jobs</a></li>
//         <li><a href="/admin/comments">Comments</a></li>
//       </ul>
//       <button onClick={handleLogout} className="btn">Logout</button>
//     </nav>
//   );
// }

import { useNavigate, useLocation } from "react-router-dom";
import './admin.css';
import SEO from '../components/SEO';

export default function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  // Helper to check active route
  const isActive = (path) => location.pathname === path ? "admin-active-unique" : "";

  return (
    <>
    <SEO
                title="Admin Dashboard"
                description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
                canonicalUrl="https://www.theittalent.com/"
            />
    <nav className="admin-navbar-unique">
      <div className="admin-navbar-logo-unique">
        <h3>Admin Panel</h3>
      </div>
      
      <ul className="admin-navbar-links-unique">
        <li><a href="/admin/dashboard" className={isActive("/admin/dashboard")}>Dashboard</a></li>
        
        {/* Jobs Dropdown */}
        <li className="admin-navbar-dropdown-unique">
          <span className={`admin-navbar-dropdown-toggle-unique ${isActive("/admin/jobs") || isActive("/admin/addjob") || isActive("/admin/adminapplicaion") ? "admin-active-unique" : ""}`}>
            Jobs ▼
          </span>
          <ul className="admin-navbar-dropdown-menu-unique">
            <li><a href="/admin/jobs" className={isActive("/admin/jobs")}>All Jobs</a></li>
            <li><a href="/admin/addjob" className={isActive("/admin/addjob")}>Add Job</a></li>
            <li><a href="/admin/adminapplicaion" className={isActive("/admin/adminapplicaion")}>Applications</a></li>
          </ul>
        </li>
        
        <li><a href="/admin/admincontact" className={isActive("/admin/admincontact")}>Contacts</a></li>
        <li><a href="/admin/comments" className={isActive("/admin/comments")}>Comments</a></li>
      </ul>
      
      <div className="admin-navbar-logout-unique">
        <button onClick={handleLogout} className="admin-navbar-logout-btn-unique">Logout</button>
      </div>
    </nav>
    </>
  );
}