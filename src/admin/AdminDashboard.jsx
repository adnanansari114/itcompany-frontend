import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this import for navigation
import "./admin.css";
import SEO from '../components/SEO';
import AdminFooter from "./AdminFooter";

const API = import.meta.env.VITE_APP_API_URL;

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    contacts: 0,
    jobs: 0,
    comments: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");

        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const [contactsRes, jobsRes, commentsRes] = await Promise.all([
          fetch(`${API}/api/contact/all`, { headers }),
          fetch(`${API}/api/jobs`, { headers }),
          fetch(`${API}/api/comments/all`, { headers }),
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
    <>
      <SEO
        title="Dashboard"
        description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
        canonicalUrl="https://www.theittalent.com/admin/dashboard"
      />
      <div className="admin-dashboard p-6">
        <h2 className="text-2xl font-bold mb-2">Admin Access Granted</h2>
        <p className="text-gray-600 mb-8">Here are your website statistics</p>

        <div className="task-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="task-card bg-blue-50 border border-blue-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition cursor-pointer" // Added cursor-pointer for click indication
            onClick={() => navigate("/admin/admincontact")} // Navigate to contacts page on click (adjust path as needed)
          >
            <h3 className="text-4xl font-bold text-blue-600">{stats.contacts}</h3>
            <p className="text-gray-700 mt-2">Total Contact Messages</p>
          </div>

          <div 
            className="task-card bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate("/admin/adminapplication")} // Navigate to applications page (adjust path as needed)
          >
            <h3 className="text-4xl font-bold text-green-600">{stats.jobs}</h3>
            <p className="text-gray-700 mt-2">Total Jobs Posted</p>
          </div>

          <div 
            className="task-card bg-purple-50 border border-purple-200 rounded-lg p-6 text-center shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate("/admin/comments")} // Navigate to comments page (adjust path as needed)
          >
            <h3 className="text-4xl font-bold text-purple-600">{stats.comments}</h3>
            <p className="text-gray-700 mt-2">Total Blog Comments</p>
          </div>
        </div>
      </div>
      <AdminFooter />
    </>
  );
}