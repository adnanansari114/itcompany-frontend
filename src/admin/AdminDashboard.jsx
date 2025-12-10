// import React from "react";
// import "./admin.css";
// const API = import.meta.env.VITE_APP_API_URL;

// export default function AdminDashboard() {
//   return (
//     <div className="admin-dashboard">
//       <h2>Welcome Admin!</h2>
//       <p>You can manage all tasks from navigation.</p>

//       <div className="task-grid">
//         <div className="task-card">No of comments</div>
//         <div className="task-card">Application</div>
//         <div className="task-card">Users</div>
//         <div className="task-card"></div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./admin.css";

const API = import.meta.env.VITE_APP_API_URL;

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    comments: 0,
    applications: 0, // abhi 0 rahega, baad mein update
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [contactsRes, commentsRes] = await Promise.all([
          fetch(`${API}/api/contacts`).then(res => res.json()),        // Contacts
          fetch(`${API}/api/comments/all`).then(res => res.json()),    // Blog Comments
          // Job Applications ka endpoint abhi nahi hai
        ]);

        setStats({
          contacts: Array.isArray(contactsRes) ? contactsRes.length : 0,
          comments: Array.isArray(commentsRes) ? commentsRes.length : 0,
          applications: 0, // temporarily 0
        });
        setLoading(false);
      } catch (err) {
        console.error("Error loading dashboard stats", err);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Welcome Admin!</h2>
      <p>You can manage all tasks from the navigation.</p>

      {loading ? (
        <p>Loading statistics...</p>
      ) : (
        <div className="task-grid">
          <div className="task-card">
            <h3>{stats.contacts}</h3>
            <p>Total Contacts</p>
          </div>
          <div className="task-card">
            <h3>{stats.applications}</h3>
            <p>Total Job Applications</p>
          </div>
          <div className="task-card">
            <h3>{stats.comments}</h3>
            <p>Total Comments</p>
          </div>
          <div className="task-card">
            {/* Future use ya empty */}
          </div>
        </div>
      )}
    </div>
  );
}