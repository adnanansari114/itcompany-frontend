// import React, { useState } from "react";
// import axios from "axios";
// import "./admin.css";
// const API = import.meta.env.VITE_APP_API_URL;
// import SEO from '../components/SEO';

// axios.defaults.headers.common["Content-Type"] = "application/json";
// axios.defaults.baseURL = "http://localhost:5000";

// export default function AddJob({ setIsAdmin }) {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [jobType, setJobType] = useState("");
//   const [location, setLocation] = useState("");
//   const [salary, setSalary] = useState("");
//   const [description, setDescription] = useState("");
//   const [msg, setMsg] = useState("");

//   const submitJob = async (e) => {
//     e.preventDefault();
//     setMsg("");

//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Please login as admin first");
//       return;
//     }

//     try {
//       const res = await axios.post(
//         `${API}/api/jobs`,
//         {
//           title,
//           company: "The IT Talent",
//           category,
//           jobType,
//           location,
//           salary,
//           description,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setMsg("Job added successfully!");
//       setTitle("");
//       setCategory("");
//       setJobType("");
//       setLocation("");
//       setSalary("");
//       setDescription("");
//     } catch (err) {
//       console.log(err);
//       setMsg(err.response?.data?.message || "Error adding job");
//     }
//   };

//   return (
//     <>
//       <SEO
//         title="Add Jobs"
//         description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
//         canonicalUrl="https://www.theittalent.com/"
//       />
//       <div className="admin-job-container">
//         <div className="job-box">
//           <h2>Add New Job</h2>

//           {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

//           <form onSubmit={submitJob}>
//             <div className="inputGroup">
//               <label>Job Title *</label>
//               <input value={title} onChange={(e) => setTitle(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Category *</label>
//               <input value={category} onChange={(e) => setCategory(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Job Type *</label>
//               <select value={jobType} onChange={(e) => setJobType(e.target.value)} required>
//                 <option value="">Select Type</option>
//                 <option>Full-time</option>
//                 <option>Part-time</option>
//                 <option>Contract</option>
//                 <option>Remote</option>
//               </select>
//             </div>

//             <div className="inputGroup">
//               <label>Location *</label>
//               <input value={location} onChange={(e) => setLocation(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Salary (optional)</label>
//               <input value={salary} onChange={(e) => setSalary(e.target.value)} />
//             </div>

//             <div className="inputGroup">
//               <label>Description *</label>
//               <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 rows="5"
//                 required
//               />
//             </div>

//             <button type="submit" className="btn">Add Job</button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import "./admin.css";
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

// Axios default config
axios.defaults.headers.common["Content-Type"] = "application/json";
 // ya production me change kar dena

export default function AddJob({ setIsAdmin }) {
  const [techstack, setTechstack] = useState("");
  const [engagementtype, setEngagementtype] = useState("");
  const [status, setStatus] = useState("Open"); // default Open
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState(""); // optional
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
          budget: budget.trim() || undefined, // optional - agar khali hai to undefined bhej denge
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
      // Reset form
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
            {/* Tech Stack (Required) */}
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

            {/* Engagement Type */}
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

            {/* Status */}
            <div className="inputGroup">
              <label>Status *</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)} required>
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
                placeholder="e.g., Remote, Bangalore, India, USA"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Budget (Optional) */}
            <div className="inputGroup">
              <label>Budget (Optional)</label>
              <input
                type="text"
                placeholder="e.g., ₹15-25 LPA, $80k-$120k/year"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>

            {/* Description */}
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

            <button type="submit" className="btn">
              Add Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
}