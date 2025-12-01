import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <nav className="admin-nav">
      <h3>Admin Panel</h3>
      <ul>
        <li><a href="/admin/dashboard">Dashboard</a></li>
        <li><a href="/admin/addjob">Add Job</a></li>
        <li><a href="/admin/adminapplicaion">Applications</a></li>
        <li><a href="/admin/admincontact">Contacts</a></li>
        <li><a href="/admin/jobs">All Jobs</a></li>
        <li><a href="/admin/comments">Comments</a></li>
      </ul>
      <button onClick={handleLogout} className="btn">Logout</button>
    </nav>
  );
}