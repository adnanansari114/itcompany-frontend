import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./admin.css";
import SEO from "../components/SEO";

const API = import.meta.env.VITE_APP_API_URL;

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    techstack: "",
    engagementtype: "",
    status: "Open",
    location: "",
    budget: "",
    description: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      if (!token) {
        setMsg("Please login as admin");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${API}/api/jobs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const job = res.data;
        setForm({
          techstack: job.techstack || "",
          engagementtype: job.engagementtype || "",
          status: job.status || "Open",
          location: job.location || "",
          budget: job.budget || "",
          description: job.description || "",
        });
        setLoading(false);
      } catch (err) {
        console.log(err);
        setMsg("Failed to load job. It may have been deleted.");
        setLoading(false);
      }
    };

    fetchJob();
  }, [id, token]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateJob = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      await axios.put(
        `${API}/api/jobs/${id}`,
        {
          ...form,
          company: "The IT Talent", 
          budget: form.budget.trim() || undefined, 
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMsg("Job updated successfully!");
      setTimeout(() => navigate("/admin/jobs"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed to update job");
    }
  };

  const deleteJob = async () => {
    if (!window.confirm("Are you sure you want to delete this job permanently?")) return;

    try {
      await axios.delete(`${API}/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Job deleted successfully");
      navigate("/admin/jobs");
    } catch (err) {
      alert("Failed to delete job");
    }
  };

  if (loading) {
    return (
      <div className="admin-job-container">
        <p>Loading job details...</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Edit Job - Admin"
        description="Edit job opening - The IT Talent Admin Panel"
        canonicalUrl={`https://www.theittalent.com/admin/edit-job/${id}`}
      />

      <div className="admin-job-container">
        <div className="job-box">
          <h2>Edit Job Opening</h2>

          {msg && (
            <p className={msg.includes("success") ? "success" : "error"}>
              {msg}
            </p>
          )}

          <form onSubmit={updateJob}>
            <div className="inputGroup">
              <label>Tech Stack / Role *</label>
              <input
                type="text"
                name="techstack"
                value={form.techstack}
                onChange={handleChange}
                placeholder="e.g., Senior React Developer"
                required
              />
            </div>

            <div className="inputGroup">
              <label>Engagement Type *</label>
              <select
                name="engagementtype"
                value={form.engagementtype}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Status *</label>
              <select name="status" value={form.status} onChange={handleChange} required>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Hold">Hold</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Location *</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g., Remote, Bangalore, USA"
                required
              />
            </div>

            <div className="inputGroup">
              <label>Budget (Optional)</label>
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="e.g., ₹20-30 LPA or $100k-$150k"
              />
            </div>

            <div className="inputGroup">
              <label>Description *</label>
              <textarea
                name="description"
                rows="8"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="button-group" style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
              <button type="submit" className="admin-btn">
                Update Job
              </button>

              <button
                type="button"
                onClick={deleteJob}
                className="admin-cancel-btn"
              >
                Delete Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}