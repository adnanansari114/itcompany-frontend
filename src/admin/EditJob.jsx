import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import SEO from '../components/SEO';
import { useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_APP_API_URL;

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "",
    category: "",
    salary: "",
    description: ""
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${API}/api/jobs`);
        const job = res.data.find((j) => j._id === id);
        if (job) setForm(job);
      } catch (err) {
        console.log("Error fetching job:", err);
      }
    };
    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const updateJob = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/api/jobs/${id}`, form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Job updated successfully");
      navigate("/admin/jobs");
    } catch (err) {
      console.log("Error updating job:", err);
      alert("Failed to update job");
    }
  };

  return (
    <>
    <SEO
                title="Edit Jobs"
                description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
                canonicalUrl="https://www.theittalent.com/admin/editjob"
            />
    <div className="edit-job-container">
      <h2>Edit Job</h2>

      <form className="edit-job-form" onSubmit={updateJob}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Job Title" required />

        <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company" required />

        <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="Location" required />

        <input type="text" name="jobType" value={form.jobType} onChange={handleChange} placeholder="Job Type" required />

        <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Category" required />

        <input type="text" name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" />

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Job Description" required />

        <button type="submit" className="update-btn">Update Job</button>
      </form>
    </div>
    </>
  );
}
