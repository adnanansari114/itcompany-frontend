import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import { MapPin, Briefcase, Clock, Building2 } from "lucide-react";
import SEO from '../components/SEO';
const API = import.meta.env.VITE_APP_API_URL;

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      alert("Please login as admin first!");
      window.location.href = "/admin/login";
      return;
    }
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${API}/api/jobs`);
      setJobs(res.data);
    } catch (err) {
      console.log("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const deleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Session expired. Login again.");
      window.location.href = "/admin/login";
      return;
    }

    try {
      const response = await axios.delete(`${API}/api/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      console.log("Delete success:", response.data);
      setJobs(jobs.filter((job) => job._id !== id));
      alert("Job deleted successfully!");
    } catch (err) {
      console.error("Delete failed:", err.response || err);
      if (err.response?.status === 401) {
        alert("Session expired. Logging you out...");
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
      } else {
        alert(err.response?.data?.message || "Failed to delete job");
      }
    }
  };

  return (
    <>
    <SEO
                title="Admin Jobs"
                description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
                canonicalUrl="https://www.theittalent.com/admin/jobs"
            />
    <section className="admin-jobs-section">
      <div className="container">
        <h2 className="admin-title">Manage All Jobs</h2>

        <div className="jobs-grid">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job._id} className="job-card-admin">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="company">
                    <Building2 size={16} /> The IT Talent
                  </span>
                </div>

                <div className="job-details">
                  <span className="detail">
                    <Briefcase size={16} /> {job.jobType}
                  </span>
                  <span className="detail">
                    <MapPin size={16} /> {job.location}
                  </span>
                  <span className="detail">
                    <Clock size={16} /> {new Date(job.createdAt).toDateString()}
                  </span>
                </div>

                <div className="admin-btn-group">
                  <button
                    className="edit-btn"
                    onClick={() => (window.location.href = `/admin/editjob/${job._id}`)}
                  >
                    Edit
                  </button>

                  <button className="delete-btn" onClick={() => deleteJob(job._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h3>No jobs available</h3>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
