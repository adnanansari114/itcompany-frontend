import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
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

  const isActive = (path) => location.pathname === path ? "admin-active-unique" : "";

  // Active state for dropdowns
  const isJobsActive = ["/admin/jobs", "/admin/addjob", "/admin/adminapplicaion"].includes(location.pathname);
  const isBlogActive = ["/admin/add-blog", "/admin/blogs", "/admin/comments"].includes(location.pathname);

  return (
    <>
      <SEO
        title="Admin Dashboard - The IT Talent"
        description="Admin panel for managing jobs, blogs, applications, and contacts."
      />

      
      <nav className="admin-navbar-unique">
        <div className="admin-navbar-logo-unique">
          
          <Link to="/admin/dashboard" className="admin-logo-link">
            <img
              src="/images/logo.jpeg"
              alt="The IT Talent Logo"
              className="admin-company-logo"
            />
          </Link>
          <h3>Administration Console</h3>
        </div>

        <ul className="admin-navbar-links-unique">
          <li>
            <Link to="/admin/dashboard" className={isActive("/admin/dashboard")}>
              Dashboard
            </Link>
          </li>

        
          <li className="admin-navbar-dropdown-unique">
            <span className={`admin-navbar-dropdown-toggle-unique ${isJobsActive ? "admin-active-unique" : ""}`}>
              Jobs ▼
            </span>
            <ul className="admin-navbar-dropdown-menu-unique">
              <li><Link to="/admin/jobs" className={isActive("/admin/jobs")}>All Jobs</Link></li>
              <li><Link to="/admin/addjob" className={isActive("/admin/addjob")}>Add Job</Link></li>
              <li><Link to="/admin/adminapplicaion" className={isActive("/admin/adminapplicaion")}>Applications</Link></li>
            </ul>
          </li>

          <li className="admin-navbar-dropdown-unique">
            <span className={`admin-navbar-dropdown-toggle-unique ${isBlogActive ? "admin-active-unique" : ""}`}>
              Blog ▼
            </span>
            <ul className="admin-navbar-dropdown-menu-unique">
              <li><Link to="/admin/add-blog" className={isActive("/admin/add-blog")}>Add Blog</Link></li>
              <li><Link to="/admin/blogs" className={isActive("/admin/blogs")}>Manage Blogs</Link></li>
              <li><Link to="/admin/comments" className={isActive("/admin/comments")}>Comments</Link></li>
            </ul>
          </li>

          <li>
            <Link to="/admin/admincontact" className={isActive("/admin/admincontact")}>
              Contacts
            </Link>
          </li>
        </ul>

        <div className="admin-navbar-logout-unique">
          <button onClick={handleLogout} className="admin-navbar-logout-btn-unique">
            Logout
          </button>
        </div>
      </nav>

     
    </>
  );
}