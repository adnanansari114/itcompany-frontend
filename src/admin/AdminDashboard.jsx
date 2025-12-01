import React from "react";
import "./admin.css";
const API = import.meta.env.VITE_APP_API_URL;

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin!</h2>
      <p>You can manage all tasks from navigation.</p>

      <div className="task-grid">
        <div className="task-card">No of comments</div>
        <div className="task-card">Application</div>
        <div className="task-card">Users</div>
        <div className="task-card"></div>
      </div>
    </div>
  );
}
