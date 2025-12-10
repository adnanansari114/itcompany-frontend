// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "../../style/Contact.css";
// const API = import.meta.env.VITE_APP_API_URL || "https://itbackend-p7sr.onrender.com";
// import SEO from "../../components/SEO";

// export default function JobApply() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [job, setJob] = useState(null);
//   const [loadingJob, setLoadingJob] = useState(true);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [description, setDescription] = useState("");

//   const [otpSent, setOtpSent] = useState(false);
//   const [verified, setVerified] = useState(false);
//   const [otp, setOtp] = useState("");

//   const [resume, setResume] = useState(null);
//   const [message, setMessage] = useState("");
//   const [sending, setSending] = useState(false);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await axios.get(`${API}/api/jobs/${id}`);
//         console.log("Single Job API Response:", res.data);
//         setJob(res.data);
//       } catch (err) {
//         console.error("Fetch job error:", err);
//         setMessage("Failed to load job details");
//       } finally {
//         setLoadingJob(false);
//       }
//     };
//     if (id) fetchJob();
//   }, [id]);

//   const handleSendOtp = async () => {
//     if (!name.trim() || !email.trim() || !phone.trim()) {
//       setMessage("Name, email and phone are required");
//       return;
//     }

//     setSending(true);
//     setMessage("");

//     try {
//       const res = await axios.post(`${API}/api/apply/send-otp`, {
//         name: name.trim(),
//         email: email.trim(),
//         phone: phone.trim(),
//         description: description.trim(),
//         jobId: id,
//       });
//       setOtpSent(true);
//       setMessage(res.data.message || "OTP sent to your email!");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Failed to send OTP. Try again.");
//     } finally {
//       setSending(false);
//     }
//   };

//   const handleVerifyOtp = async () => {
//     if (!otp.trim()) {
//       setMessage("Please enter the OTP");
//       return;
//     }

//     setSending(true);
//     setMessage("");

//     try {
//       const res = await axios.post(`${API}/api/apply/verify-otp`, {
//         email: email.trim(),
//         code: otp.trim(),
//         jobId: id,
//       });
//       setVerified(true);
//       setMessage("Email verified successfully! Now upload your resume.");
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Invalid or expired OTP");
//     } finally {
//       setSending(false);
//     }
//   };

//   const handleResumeUpload = async (e) => {
//     e.preventDefault();
//     if (!resume) {
//       setMessage("Please select a resume file (PDF/DOC/DOCX)");
//       return;
//     }

//     // File size check (optional - 5MB max)
//     if (resume.size > 5 * 1024 * 1024) {
//       setMessage("Resume size should be less than 5MB");
//       return;
//     }

//     setSending(true);
//     setMessage("");

//     const formData = new FormData();
//     formData.append("email", email.trim());
//     formData.append("jobId", id);
//     formData.append("resume", resume);

//     try {
//       const res = await axios.post(
//         `${API}/api/apply/upload-resume`,
//         formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//         // Header mat daalo! Browser khud set karega
//       );

//       setMessage(res.data.message || "Application submitted successfully!");

//       // Safe navigation
//       setTimeout(() => {
//         navigate("/careers");
//       }, 2000);

//     } catch (err) {
//       console.error(err);
//       setMessage(err.response?.data?.message || "Failed to upload resume");
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <>
//       <SEO
//         title="Apply for IT Jobs & Developer Positions at The IT Talent"
//         description="Ready to join a global team? Submit your job application, resume, and details for open positions in software development, AI, and cloud engineering."
//       />
//       <div className="apply-container">
//         <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
//           Apply for Job
//         </h1>

//         {loadingJob ? (
//           <p>Loading job details...</p>
//         ) : job ? (
//           <div className="jobs-info">
//             <h2>{job.title}</h2>
//             <p><strong>Category:</strong> {job.category}</p>
//             <p><strong>Type:</strong> {job.jobType}</p>
//             <p><strong>Location:</strong> {job.location}</p>
//           </div>
//         ) : (
//           <p>Job not found</p>
//         )}

//         {/* Step 1 */}
//         {!otpSent && (
//           <div className="apply-step">
//             <h3>Step 1 — Enter Your Details</h3>
//             <input
//               placeholder="Full Name *"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email Address *"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               placeholder="Contact Number *"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//             <textarea
//               rows="4"
//               placeholder="Tell us about yourself (optional)"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//             <button onClick={handleSendOtp} disabled={sending}>
//               {sending ? "Sending OTP..." : "Send OTP"}
//             </button>
//           </div>
//         )}

//         {/* Step 2 */}
//         {otpSent && !verified && (
//           <div className="apply-step">
//             <h3>Step 2 — Enter OTP</h3>
//             <p>We sent a 6-digit code to <strong>{email}</strong></p>
//             <input
//               placeholder="Enter 6-digit OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
//               maxLength="6"
//             />
//             <button onClick={handleVerifyOtp} disabled={sending}>
//               {sending ? "Verifying..." : "Verify OTP"}
//             </button>
//           </div>
//         )}

//         {/* Step 3 */}
//         {verified && (
//           <form className="apply-step" onSubmit={handleResumeUpload}>
//             <h3>Step 3 — Upload Resume</h3>
//             <p>Only PDF, DOC, DOCX allowed (Max 5MB)</p>
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//               onChange={(e) => setResume(e.target.files[0] || null)}
//               required
//             />
//             {resume && (
//               <p style={{ fontSize: "14px", color: "green" }}>
//                 Selected: {resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)
//               </p>
//             )}
//             <button type="submit" disabled={sending}>
//               {sending ? "Submitting..." : "Submit Application"}
//             </button>
//           </form>
//         )}

//         {/* Success/Error Message */}
//         {message && (
//           <p
//             className="apply-message"
//             style={{
//               color: message.includes("success") || message.includes("verified")
//                 ? "green"
//                 : "red",
//               fontWeight: "bold",
//             }}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../../style/Contact.css";
const API = import.meta.env.VITE_APP_API_URL || "https://itbackend-p7sr.onrender.com";
import SEO from "../../components/SEO";

export default function JobApply() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loadingJob, setLoadingJob] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState("");

  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`${API}/api/jobs/${id}`);
        console.log("Single Job API Response:", res.data);
        setJob(res.data);
      } catch (err) {
        console.error("Fetch job error:", err);
        setMessage("Failed to load job details");
      } finally {
        setLoadingJob(false);
      }
    };
    if (id) fetchJob();
  }, [id]);

  const handleSendOtp = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setMessage("Name, email and phone are required");
      return;
    }

    setSending(true);
    setMessage("");

    try {
      const res = await axios.post(`${API}/api/apply/send-otp`, {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        description: description.trim(),
        jobId: id,
      });
      setOtpSent(true);
      setMessage(res.data.message || "OTP sent to your email!");
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP. Try again.");
    } finally {
      setSending(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp.trim()) {
      setMessage("Please enter the OTP");
      return;
    }

    setSending(true);
    setMessage("");

    try {
      const res = await axios.post(`${API}/api/apply/verify-otp`, {
        email: email.trim(),
        code: otp.trim(),
        jobId: id,
      });
      setVerified(true);
      setMessage("Email verified successfully! Now upload your resume.");
    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid or expired OTP");
    } finally {
      setSending(false);
    }
  };

  const handleResumeUpload = async (e) => {
    e.preventDefault();
    if (!resume) {
      setMessage("Please select a resume file (PDF/DOC/DOCX)");
      return;
    }

    // File size check (optional - 5MB max)
    if (resume.size > 5 * 1024 * 1024) {
      setMessage("Resume size should be less than 5MB");
      return;
    }

    setSending(true);
    setMessage("");

    const formData = new FormData();
    formData.append("email", email.trim());
    formData.append("jobId", id);
    formData.append("resume", resume);

    try {
      const res = await axios.post(
        `${API}/api/apply/upload-resume`,
        formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
        // Header mat daalo! Browser khud set karega
      );

      setMessage(res.data.message || "Application submitted successfully!");

      // Safe navigation
      setTimeout(() => {
        navigate("/careers");
      }, 2000);

    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Failed to upload resume");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEO
        title="Apply for IT Jobs & Developer Positions at The IT Talent"
        description="Ready to join a global team? Submit your job application, resume, and details for open positions in software development, AI, and cloud engineering."
      />
      <div className="apply-container">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Apply for Job
        </h1>

        {loadingJob ? (
          <p style={{ textAlign: "center", padding: "20px" }}>Loading job details...</p>
        ) : job ? (
          <div className="jobs-info">
            <h2>{job.techstack || "Software Engineer Position"}</h2>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px", margin: "15px 0", fontSize: "15px" }}>
              <p><strong>Engagement Type:</strong> {job.engagementtype || "Full-time"}</p>
              <p><strong>Location:</strong> {job.location || "Remote"}</p>
              {job.budget && <p><strong>Budget:</strong> {job.budget}</p>}
              <p><strong>Status:</strong> <span style={{ color: job.status === "Open" ? "green" : "orange" }}>
                {job.status || "Open"}
              </span></p>
            </div>

            {job.description && (
              <div className="job-description-preview">
                <h4>Job Description:</h4>
                <p style={{ lineHeight: "1.6", color: "#555" }}>
                  {job.description.length > 400
                    ? job.description.substring(0, 400) + "..."
                    : job.description}
                </p>
              </div>
            )}
          </div>
        ) : (
          <p style={{ textAlign: "center", color: "red" }}>Job not found or has been removed.</p>
        )}

        {/* Step 1 */}
        {!otpSent && (
          <div className="apply-step">
            <h3>Step 1 — Enter Your Details</h3>
            <input
              placeholder="Full Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Contact Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              rows="4"
              placeholder="Tell us about yourself (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleSendOtp} disabled={sending}>
              {sending ? "Sending OTP..." : "Send OTP"}
            </button>
          </div>
        )}

        {/* Step 2 */}
        {otpSent && !verified && (
          <div className="apply-step">
            <h3>Step 2 — Enter OTP</h3>
            <p>We sent a 6-digit code to <strong>{email}</strong></p>
            <input
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              maxLength="6"
            />
            <button onClick={handleVerifyOtp} disabled={sending}>
              {sending ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        )}

        {/* Step 3 */}
        {verified && (
          <form className="apply-step" onSubmit={handleResumeUpload}>
            <h3>Step 3 — Upload Resume</h3>
            <p>Only PDF, DOC, DOCX allowed (Max 5MB)</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={(e) => setResume(e.target.files[0] || null)}
              required
            />
            {resume && (
              <p style={{ fontSize: "14px", color: "green" }}>
                Selected: {resume.name} ({(resume.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
            <button type="submit" disabled={sending}>
              {sending ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}

        {/* Success/Error Message */}
        {message && (
          <p
            className="apply-message"
            style={{
              color: message.includes("success") || message.includes("verified")
                ? "green"
                : "red",
              fontWeight: "bold",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </>
  );
}