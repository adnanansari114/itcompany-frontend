import React, { useState } from "react";
import axios from "axios";
import "./admin.css";
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

export default function AddJob({ setIsAdmin }) {
  const [techstack, setTechstack] = useState("");
  const [engagementtype, setEngagementtype] = useState("");
  const [status, setStatus] = useState("Open");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("");

  const submitJob = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    try {
      const res = await axios.post(
        `${API}/api/jobs`,
        {
          techstack,
          company: "The IT Talent",
          engagementtype,
          status,
          location,
          budget: budget.trim() || undefined,
          description,
          isActive: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMsg("Job added successfully!");
      setTechstack("");
      setEngagementtype("");
      setStatus("Open");
      setLocation("");
      setBudget("");
      setDescription("");
    } catch (err) {
      console.log(err);
      setMsg(err.response?.data?.message || "Error adding job");
    }
  };

  return (
    <>
      <SEO
        title="Add New Job - Admin"
        description="Add new IT job openings - The IT Talent"
        canonicalUrl="https://www.theittalent.com/admin/add-job"
      />

      <div className="admin-job-container">
        <div className="job-box">
          <h2>Add New Job Opening</h2>

          {msg && (
            <p className={msg.includes("success") ? "success" : "error"}>
              {msg}
            </p>
          )}

          <form onSubmit={submitJob}>
            <div className="inputGroup">
              <label>Tech Stack / Role * </label>
              <input
                type="text"
                placeholder="e.g., React.js Developer, Node.js Backend, DevOps Engineer"
                value={techstack}
                onChange={(e) => setTechstack(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label>Engagement Type *</label>
              <select
                value={engagementtype}
                onChange={(e) => setEngagementtype(e.target.value)}
                required
              >
                <option value="">Select Engagement Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Status *</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Hold">Hold</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Location *</label>
              <input
                type="text"
                placeholder="e.g., Remote, Bangalore, India, USA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label>Budget (Optional)</label>
              <input
                type="text"
                placeholder="e.g., ₹15-25 LPA, $80k-$120k/year"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>

            <div className="inputGroup">
              <label>Job Description *</label>
              <textarea
                rows="8"
                placeholder="Full job description, responsibilities, requirements..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <div className="btn-log">
              <button type="submit" className="admin-btn">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}