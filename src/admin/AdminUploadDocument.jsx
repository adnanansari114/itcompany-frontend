// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Agar Option 1 choose kiya to yeh rakh sakte ho
// // import { uploadApi } from "../../main.jsx"; // Agar Option 2

// import "./admin.css";
// import SEO from '../components/SEO';

// const API = import.meta.env.VITE_APP_API_URL;

// export default function AdminUploadDocument() {
//   const [title, setTitle] = useState("");
//   const [categoryId, setCategoryId] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Please login as admin first");
//       return;
//     }

//     try {
//       const res = await axios.get(`${API}/api/document/categories`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCategories(res.data);
//     } catch (err) {
//       setMsg("Error loading categories");
//     }
//   };

//   const submitDocument = async (e) => {
//     e.preventDefault();
//     setMsg("");
//     setLoading(true);

//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Please login as admin first");
//       setLoading(false);
//       return;
//     }

//     if (!file) {
//       setMsg("Please select a file");
//       setLoading(false);
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("category_id", categoryId);
//     if (description) formData.append("description", description);
//     formData.append("file", file);

//     try {
//       // Option 1: Agar global header hata diya to
//       await axios.post(`${API}/api/document`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Option 2: Agar alag instance banaya to
//       // await uploadApi.post("/api/document", formData, {
//       //   headers: { Authorization: `Bearer ${token}` },
//       // });

//       setMsg("Document uploaded successfully! 🎉");
//       setTitle("");
//       setCategoryId("");
//       setDescription("");
//       setFile(null);
//       e.target.reset(); // Form reset
//     } catch (err) {
//       // console.error("Upload Error:", err.response || err);
//       setMsg(err.response?.data?.message || "Upload failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <SEO title="Upload Document - Admin" />

//       <div className="admin-job-container">
//         <div className="job-box upload-document-box">
//           <h2>Upload New Document</h2>

//           {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

//           <form onSubmit={submitDocument}>
//             <div className="inputGroup">
//               <label>Title *</label>
//               <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Category *</label>
//               <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
//                 <option value="">Select Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat.id} value={cat.id}>{cat.name}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="inputGroup">
//               <label>Description (Optional)</label>
//               <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
//             </div>

//             <div className="inputGroup">
//               <label>File *</label>
//               <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
//               {file && <p className="file-name">Selected: {file.name}</p>}
//             </div>

//             <div className="btn-log">
//               <button type="submit" className="admin-btn upload-btn" disabled={loading}>
//                 {loading ? "Uploading..." : "Upload Document"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
// import uploadApi from "../api/uploadApi"; // ← Path apne folder structure ke hisab se adjust kar lo
// Ya phir: import uploadApi from "../api/uploadApi";

import "./admin.css";
import SEO from '../components/SEO';
import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL; // Agar kahin aur use kar rahe ho to rakh lo

export default function AdminUploadDocument() {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    try {
      // Yahan normal axios ya api instance use kar sakte ho, kyuki yeh JSON response hai
      const res = await axios.get(`${API}/document/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      }
      );
      // Ya phir agar alag api.js banaya hai to: await api.get(...)
      setCategories(res.data);
    } catch (err) {
      setMsg("Error loading categories: " + (err.response?.data?.message || err.message));
    }
  };

  const submitDocument = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    if (!file) {
      setMsg("Please select a file");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category_id", categoryId);
    if (description) formData.append("description", description);
    formData.append("file", file);

    try {
      await uploadApi.post("/api/document", formData);
      // Token already interceptor se lag gaya hai

      setMsg("Document uploaded successfully! 🎉");
      setTitle("");
      setCategoryId("");
      setDescription("");
      setFile(null);
      e.target.reset();
    } catch (err) {
      console.error("Upload error:", err.response || err);
      setMsg(err.response?.data?.message || "Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Baaki form same rahega...
  return (
    <>
      <SEO title="Upload Document - Admin" />

      <div className="admin-job-container">
        <div className="job-box upload-document-box">
          <h2>Upload New Document</h2>

          {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

          <form onSubmit={submitDocument}>
            <div className="inputGroup">
              <label>Title *</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Category *</label>
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="inputGroup">
              <label>Description (Optional)</label>
              <textarea rows="4" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="inputGroup">
              <label>File *</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
              {file && <p className="file-name">Selected: {file.name}</p>}
            </div>

            <div className="btn-log">
              <button type="submit" className="admin-btn upload-btn" disabled={loading}>
                {loading ? "Uploading..." : "Upload Document"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}