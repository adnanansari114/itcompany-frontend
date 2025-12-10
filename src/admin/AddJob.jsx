import React, { useState } from "react";
import axios from "axios";
import "./admin.css";
const API = import.meta.env.VITE_APP_API_URL;
import SEO from '../components/SEO';

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = "http://localhost:5000";

export default function AddJob({ setIsAdmin }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
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
          title,
          company: "The IT Talent",
          category,
          jobType,
          location,
          salary,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMsg("Job added successfully!");
      setTitle("");
      setCategory("");
      setJobType("");
      setLocation("");
      setSalary("");
      setDescription("");
    } catch (err) {
      console.log(err);
      setMsg(err.response?.data?.message || "Error adding job");
    }
  };

  return (
    <>
      <SEO
        title="Add Jobs"
        description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
        canonicalUrl="https://www.theittalent.com/"
      />
      <div className="admin-job-container">
        <div className="job-box">
          <h2>Add New Job</h2>

          {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

          <form onSubmit={submitJob}>
            <div className="inputGroup">
              <label>Job Title *</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Category *</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Job Type *</label>
              <select value={jobType} onChange={(e) => setJobType(e.target.value)} required>
                <option value="">Select Type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="inputGroup">
              <label>Location *</label>
              <input value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Salary (optional)</label>
              <input value={salary} onChange={(e) => setSalary(e.target.value)} />
            </div>

            <div className="inputGroup">
              <label>Description *</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn">Add Job</button>
          </form>
        </div>
      </div>
    </>
  );
}