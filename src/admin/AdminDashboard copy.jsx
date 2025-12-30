import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import SEO from "../components/SEO";
import AdminFooter from "./AdminFooter";

const API = import.meta.env.VITE_APP_API_URL;

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    jobs: 0,
    blogs: 0,
    contacts: 0,
    documents: 0,
    comments: 0,
    applications: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token =
          localStorage.getItem("adminToken") ||
          sessionStorage.getItem("adminToken");

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [
          jobsRes,
          blogsRes,
          contactsRes,
          documentsRes,
          commentsRes,
          applicationsRes,
        ] = await Promise.all([
          fetch(`${API}/api/job`, { headers }),
          fetch(`${API}/api/blog`, { headers }),
          fetch(`${API}/api/contact/all`, { headers }),
          fetch(`${API}/api/document`, { headers }),
          fetch(`${API}/api/comments/all`, { headers }),
          fetch(`${API}/api/apply/all`, { headers }),
        ]);

        const parseCount = async (res) => {
          const data = await res.json();
          if (Array.isArray(data)) return data.length;
          if (Array.isArray(data?.data)) return data.data.length;
          return 0;
        };

        setStats({
          jobs: await parseCount(jobsRes),
          blogs: await parseCount(blogsRes),
          contacts: await parseCount(contactsRes),
          documents: await parseCount(documentsRes),
          comments: await parseCount(commentsRes),
          applications: await parseCount(applicationsRes),
        });
      } catch (err) {
        console.error("Dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <>
      <SEO
        title="Admin Dashboard"
        description="Admin dashboard overview"
        canonicalUrl="https://www.theittalent.com/admin/dashboard"
      />

      <div className="admin-dashboard p-6">
        <h2 className="text-2xl font-bold mb-2">Admin Dashboard</h2>
        <p className="text-gray-600 mb-8">
          Complete overview of your website
        </p>

        {/* EXISTING CSS GRID USED */}
        <div className="task-grid grid grid-cols-1 md:grid-cols-3 gap-6">

          <div
            className="task-card"
            onClick={() => navigate("/admin/jobs")}
          >
            <h3>{stats.jobs}</h3>
            <p>Total Jobs</p>
          </div>

          <div
            className="task-card"
            onClick={() => navigate("/admin/blogs")}
          >
            <h3>{stats.blogs}</h3>
            <p>Total Blogs</p>
          </div>

          <div
            className="task-card"
            onClick={() => navigate("/admin/admincontact")}
          >
            <h3>{stats.contacts}</h3>
            <p>Total Contacts</p>
          </div>

          <div
            className="task-card"
            onClick={() => navigate("/admin/documents")}
          >
            <h3>{stats.documents}</h3>
            <p>Total Documents</p>
          </div>

          <div
            className="task-card"
            onClick={() => navigate("/admin/comments")}
          >
            <h3>{stats.comments}</h3>
            <p>Total Comments</p>
          </div>

          <div
            className="task-card"
            onClick={() => navigate("/admin/adminapplication")}
          >
            <h3>{stats.applications}</h3>
            <p>Total Applications</p>
          </div>

        </div>
      </div>

      <AdminFooter />
    </>
  );
}



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./admin.css";
// import SEO from '../components/SEO';
// import AdminFooter from "./AdminFooter";

// const API = import.meta.env.VITE_APP_API_URL;

// export default function AdminDashboard() {
//   const [stats, setStats] = useState({
//     contacts: 0,
//     jobs: 0,
//     comments: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");

//         const headers = {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         };

//         const [contactsRes, jobsRes, commentsRes] = await Promise.all([
//           fetch(`${API}/api/contact/all`, { headers }),
//           fetch(`${API}/api/jobs`, { headers }),
//           fetch(`${API}/api/comments/all`, { headers }),
//         ]);

//         const contactsData = await contactsRes.json();
//         const jobsData = await jobsRes.json();
//         const commentsData = await commentsRes.json();

//         setStats({
//           contacts: Array.isArray(contactsData) ? contactsData.length : 0,
//           jobs: Array.isArray(jobsData) ? jobsData.length : 0,
//           comments: Array.isArray(commentsData) ? commentsData.length : 0,
//         });

//         setLoading(false);
//       } catch (err) {
//         console.error("Dashboard stats error:", err);
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading dashboard stats...</p>;

//   return (
//     <>
//       <SEO
//         title="Dashboard"
//         description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
//         canonicalUrl="https://www.theittalent.com/admin/dashboard"
//       />
//       <div className="admin-dashboard p-6">
//         <h2 className="text-2xl font-bold mb-2">Admin Access Granted</h2>
//         <p className="text-gray-600 mb-8">Here are your website statistics</p>

//         <div className="task-grid grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div
//             className="task-card bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition cursor-pointer" // Added cursor-pointer for click indication
//             onClick={() => navigate("/admin/admincontact")} >
//             <h3 className="text-4xl font-bold text-blue-600">{stats.contacts}</h3>
//             <p className="text-gray-700 mt-2">Total Contact Messages</p>
//           </div>

//           <div
//             className="task-card bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition cursor-pointer"
//             onClick={() => navigate("/admin/adminapplication")} >
//             <h3 className="text-4xl font-bold text-green-600">{stats.jobs}</h3>
//             <p className="text-gray-700 mt-2">Total Jobs Posted</p>
//           </div>

//           <div
//             className="task-card bg-purple-50 border border-purple-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition cursor-pointer"
//             onClick={() => navigate("/admin/comments")} >
//             <h3 className="text-4xl font-bold text-purple-600">{stats.comments}</h3>
//             <p className="text-gray-700 mt-2">Total Blog Comments</p>
//           </div>
//         </div>
//       </div>
//       <AdminFooter />
//     </>
//   );
// }


