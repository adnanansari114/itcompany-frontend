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


// import React, { useState, useEffect } from "react";
// import "./admin.css";

// const API = import.meta.env.VITE_APP_API_URL;

// export default function AdminDashboard() {
//   const [stats, setStats] = useState({
//     contacts: 0,
//     comments: 0,
//     applications: 0, // abhi 0 rahega, baad mein update
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const [contactsRes, commentsRes] = await Promise.all([
//           fetch(`${API}/api/contact/all`).then(res => res.json()),        // Contacts
//           fetch(`${API}/api/comments/all`).then(res => res.json()),    // Blog Comments
//           // Job Applications ka endpoint abhi nahi hai
//         ]);

//         setStats({
//           contacts: Array.isArray(contactsRes) ? contactsRes.length : 0,
//           comments: Array.isArray(commentsRes) ? commentsRes.length : 0,
//           applications: 0, // temporarily 0
//         });
//         setLoading(false);
//       } catch (err) {
//         console.error("Error loading dashboard stats", err);
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h2>Welcome Admin!</h2>
//       <p>You can manage all tasks from the navigation.</p>

//       {loading ? (
//         <p>Loading statistics...</p>
//       ) : (
//         <div className="task-grid">
//           <div className="task-card">
//             <h3>{stats.contacts}</h3>
//             <p>Total Contacts</p>
//           </div>
//           <div className="task-card">
//             <h3>{stats.applications}</h3>
//             <p>Total Job Applications</p>
//           </div>
//           <div className="task-card">
//             <h3>{stats.comments}</h3>
//             <p>Total Comments</p>
//           </div>
//           <div className="task-card">
//             {/* Future use ya empty */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// adminDashboard.jsx
import React, { useState, useEffect } from "react";
import "./admin.css";

const API = import.meta.env.VITE_APP_API_URL;

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    jobs: 0,
    comments: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Token nikal lo admin ke liye (kyunki /all routes protected hain)
        const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // adminAuth middleware ke liye jaruri
        };

        const [contactsRes, jobsRes, commentsRes] = await Promise.all([
          fetch(`${API}/api/contact/all`, { headers }),        // Contact messages
          fetch(`${API}/api/jobs`, { headers }),               // All Jobs (public hai, but safe)
          fetch(`${API}/api/comments/all`, { headers }),      // Blog Comments
        ]);

        const contactsData = await contactsRes.json();
        const jobsData = await jobsRes.json();
        const commentsData = await commentsRes.json();

        setStats({
          contacts: Array.isArray(contactsData) ? contactsData.length : 0,
          jobs: Array.isArray(jobsData) ? jobsData.length : 0,
          comments: Array.isArray(commentsData) ? commentsData.length : 0,
        });

        setLoading(false);
      } catch (err) {
        console.error("Dashboard stats error:", err);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading dashboard stats...</p>;

  return (
    <div className="admin-dashboard p-6">
      <h2 className="text-2xl font-bold mb-2">Welcome Admin!</h2>
      <p className="text-gray-600 mb-8">Here are your website statistics</p>

      <div className="task-grid grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="task-card bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-blue-600">{stats.contacts}</h3>
          <p className="text-gray-700 mt-2">Total Contact Messages</p>
        </div>

        <div className="task-card bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-green-600">{stats.jobs}</h3>
          <p className="text-gray-700 mt-2">Total Jobs Posted</p>
        </div>

        <div className="task-card bg-purple-50 border border-purple-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition">
          <h3 className="text-4xl font-bold text-purple-600">{stats.comments}</h3>
          <p className="text-gray-700 mt-2">Total Blog Comments</p>
        </div>
      </div>
    </div>
  );
}