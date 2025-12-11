// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./admin.css";
// import SEO from '../components/SEO';
// import { useParams, useNavigate } from "react-router-dom";
// const API = import.meta.env.VITE_APP_API_URL;

// export default function EditJob() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("adminToken");

//   const [form, setForm] = useState({
//     title: "",
//     company: "",
//     location: "",
//     jobType: "",
//     category: "",
//     salary: "",
//     description: ""
//   });

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await axios.get(`${API}/api/jobs`);
//         const job = res.data.find((j) => j._id === id);
//         if (job) setForm(job);
//       } catch (err) {
//         console.log("Error fetching job:", err);
//       }
//     };
//     fetchJob();
//   }, [id]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const updateJob = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${API}/api/jobs/${id}`, form, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert("Job updated successfully");
//       navigate("/admin/jobs");
//     } catch (err) {
//       console.log("Error updating job:", err);
//       alert("Failed to update job");
//     }
//   };

//   return (
//     <>
//       <SEO
//         title="Edit Jobs"
//         description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
//         canonicalUrl="https://www.theittalent.com/admin/editjob"
//       />
//       <div className="edit-job-container">
//         <h2>Edit Job</h2>

//         <form className="edit-job-form" onSubmit={updateJob}>
//           <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Job Title" required />

//           <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company" required />

//           <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" required />

//           <input type="text" name="jobType" value={form.jobType} onChange={handleChange} placeholder="Job Type" required />

//           <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" required />

//           <input type="text" name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" />

//           <textarea name="description" value={form.description} onChange={handleChange} placeholder="Job Description" required />

//           <button type="submit" className="update-btn">Update Job</button>
//         </form>
//       </div>
//     </>
//   );
// }


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

  // Fetch single job by ID
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
          company: "The IT Talent", // fixed
          budget: form.budget.trim() || undefined, // optional
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
            {/* Tech Stack */}
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

            {/* Engagement Type */}
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

            {/* Status */}
            <div className="inputGroup">
              <label>Status *</label>
              <select name="status" value={form.status} onChange={handleChange} required>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
                <option value="Hold">Hold</option>
              </select>
            </div>

            {/* Location */}
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

            {/* Budget (Optional) */}
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

            {/* Description */}
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

              {/* <button
                type="button"
                onClick={() => navigate("/admin/jobs")}
                className="btn"
                style={{ background: "#95a5a6" }}
              >
                Cancel
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}