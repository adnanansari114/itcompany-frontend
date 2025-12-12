
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./admin.css";
// import SEO from "../components/SEO";

// const API = import.meta.env.VITE_APP_API_URL;

// export default function AddBlog() {
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [heading1, setHeading1] = useState("");
//   const [paragraphs1, setParagraphs1] = useState([""]);

//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const addPara = () => setParagraphs1([...paragraphs1, ""]);
//   const removePara = (index) => {
//     if (paragraphs1.length > 1) {
//       setParagraphs1(paragraphs1.filter((_, i) => i !== index));
//     }
//   };

//   const updatePara = (index, value) => {
//     const updated = [...paragraphs1];
//     updated[index] = value;
//     setParagraphs1(updated);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const removeImage = () => {
//     setImageFile(null);
//     setImagePreview(null);
//   };

//   const submitBlog = async (e) => {
//     e.preventDefault();
//     setMsg("");
//     setLoading(true);

//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Error: Please login as admin first");
//       setLoading(false);
//       return;
//     }

//     if (!title.trim()) return setMsg("Title is required!");
//     if (!heading1.trim()) return setMsg("Heading is required!");
//     const cleanParas = paragraphs1.map(p => p.trim()).filter(p => p.length > 0);
//     if (cleanParas.length === 0) return setMsg("At least one paragraph required!");

//     const formData = new FormData();

//     formData.append("title", title.trim());
//     formData.append("heading1", heading1.trim());

//     formData.append("paragraphs1", JSON.stringify(cleanParas));

//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     try {
//       await axios.post(`${API}/api/blogs`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         timeout: 30000,
//       });

//       setMsg("Blog added successfully!");
//       setTimeout(() => navigate("/admin/blogs"), 1500);
//     } catch (err) {
//       console.error(err);
//       setMsg("Error: " + (err.response?.data?.message || "Failed to add blog"));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <SEO title="Add Blog" description="Create a new blog post" canonicalUrl="/admin/add-blog" />

//       <div className="admin-job-container">
//         <div className="job-box">
//           <h2>Add New Blog</h2>

//           {msg && (
//             <p className={msg.includes("success") || msg.includes("added") ? "success" : "error"}>
//               {msg}
//             </p>
//           )}

//           <form onSubmit={submitBlog}>
//             <div className="inputGroup">
//               <label>Title <span style={{ color: "red" }}>*</span></label>
//               <input
//                 type="text"
//                 placeholder="Enter blog title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="inputGroup">
//               <label>Main Heading <span style={{ color: "red" }}>*</span></label>
//               <input
//                 type="text"
//                 placeholder="Enter main heading"
//                 value={heading1}
//                 onChange={(e => setHeading1(e.target.value))}
//                 required
//               />
//             </div>

//             <div className="inputGroup">
//               <label>Featured Image (Optional)</label>
//               <input
//                 type="file"
//                 accept="image/jpeg,image/png,image/jpg,image/webp"
//                 onChange={handleImageChange}
//               />

//               {imagePreview && (
//                 <div style={{ marginTop: "15px", textAlign: "center" }}>
//                   <img
//                     src={imagePreview}
//                     alt="Blog preview"
//                     style={{
//                       maxWidth: "100%",
//                       maxHeight: "300px",
//                       borderRadius: "10px",
//                       boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//                     }}
//                   />
//                   <br />
//                   <button
//                     type="button"
//                     onClick={removeImage}
//                     style={{
//                       padding: "6px 12px",
//                       background: "#dc3545",
//                       color: "white",
//                       border: "none",
//                       borderRadius: "5px",
//                       marginTop: "10px",
//                       cursor: "pointer"
//                     }}
//                   >
//                     Remove Image
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="inputGroup">
//               <label>Paragraphs <span style={{ color: "red" }}>*</span> (At least one)</label>
//               {paragraphs1.map((para, index) => (
//                 <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
//                   <textarea
//                     placeholder="Write paragraph..."
//                     value={para}
//                     onChange={(e) => updatePara(index, e.target.value)}
//                     rows={4}
//                     style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
//                     required={index === 0}
//                   />
//                   <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
//                     <button
//                       type="button"
//                       onClick={addPara}
//                       className="small-btn"
//                       style={{ background: "#28a745", height: "40px" }}
//                     >
//                       +
//                     </button>
//                     {paragraphs1.length > 1 && (
//                       <button
//                         type="button"
//                         onClick={() => removePara(index)}
//                         className="small-btn"
//                         style={{ background: "#dc3545" }}
//                       >
//                         −
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="btn-log">
//               <button
//                 type="submit"
//                 className="admin-btn"
//                 disabled={loading}
//                 style={{
//                   opacity: loading ? 0.7 : 1,
//                   cursor: loading ? "not-allowed" : "pointer"
//                 }}
//               >
//                 {loading ? "Adding Blog..." : "Add Blog"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import SEO from "../components/SEO";

const API = import.meta.env.VITE_APP_API_URL;

export default function AddBlog() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [heading1, setHeading1] = useState("");
  const [paragraphs1, setParagraphs1] = useState([""]);

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // Paragraphs Functions
  const addPara = () => setParagraphs1([...paragraphs1, ""]);

  const removePara = (index) => {
    if (paragraphs1.length > 1) {
      setParagraphs1(paragraphs1.filter((_, i) => i !== index));
    }
  };

  const updatePara = (index, value) => {
    const updated = [...paragraphs1];
    updated[index] = value;
    setParagraphs1(updated);
  };

  // Image Functions
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  // SUBMIT BLOG — YEH SABSE IMPORTANT PART HAI
  const submitBlog = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Error: Please login as admin first");
      setLoading(false);
      return;
    }

    if (!title.trim()) return setMsg("Title is required!");
    if (!heading1.trim()) return setMsg("Heading is required!");

    const cleanParas = paragraphs1.map(p => p.trim()).filter(p => p.length > 0);
    if (cleanParas.length === 0) return setMsg("At least one paragraph required!");

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("heading1", heading1.trim());
    formData.append("paragraphs1", JSON.stringify(cleanParas));

    if (imageFile) {
      formData.append("image", imageFile); // ← Exactly matches multer.single("image")
    }

    try {
      await axios.post(`${API}/api/blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          // Content-Type mat daalo → axios khud sahi boundary ke saath daalega
        },
        timeout: 30000,
        // Yeh line sabse zaroori hai → axios ko bolta hai FormData ko chhedo mat!
        transformRequest: [(data) => data],
      });

      setMsg("Blog added successfully! Redirecting...");
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      console.error("Add blog error:", err.response || err);
      const errorMsg =
        err.response?.data?.message ||
        err.message ||
        "Failed to add blog. Check console.";
      setMsg("Error: " + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Add Blog" description="Create a new blog post" canonicalUrl="/admin/add-blog" />

      <div className="admin-job-container">
        <div className="job-box">
          <h2 className="text-3xl font-bold mb-6 text-center">Add New Blog</h2>

          {msg && (
            <div
              className={`text-center p-4 rounded-lg mb-6 text-lg font-medium ${
                msg.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {msg}
            </div>
          )}

          <form onSubmit={submitBlog} className="space-y-8">
            {/* Title */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-2">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Heading */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-2">
                Main Heading <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter main heading"
                value={heading1}
                onChange={(e) => setHeading1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-2">Featured Image (Optional)</label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/jpg,image/webp,image/gif"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
              />

              {imagePreview && (
                <div className="mt-6 text-center">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-full max-h-96 rounded-xl shadow-xl mx-auto"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            {/* Paragraphs */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-4">
                Paragraphs <span className="text-red-500">*</span> (At least one)
              </label>
              {paragraphs1.map((para, index) => (
                <div key={index} className="flex gap-3 mb-4 items-start">
                  <textarea
                    placeholder="Write your paragraph here..."
                    value={para}
                    onChange={(e) => updatePara(index, e.target.value)}
                    rows={5}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-vertical"
                    required={index === 0}
                  />
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={addPara}
                      className="w-10 h-10 bg-green-600 text-white rounded-lg text-2xl hover:bg-green-700 transition"
                      title="Add paragraph"
                    >
                      +
                    </button>
                    {paragraphs1.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePara(index)}
                        className="w-10 h-10 bg-red-600 text-white rounded-lg text-2xl hover:bg-red-700 transition"
                        title="Remove paragraph"
                      >
                        −
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Adding Blog..." : "Add Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}