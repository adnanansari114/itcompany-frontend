// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import "./admin.css";
// import SEO from "../components/SEO";

// const API = import.meta.env.VITE_APP_API_URL;

// export default function EditBlog() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [title, setTitle] = useState("");
//   const [heading1, setHeading1] = useState("");
//   const [paragraphs1, setParagraphs1] = useState([""]);
//   const [heading2, setHeading2] = useState("");
//   const [paragraphs2, setParagraphs2] = useState([""]);
//   const [whyChoosePoints, setWhyChoosePoints] = useState(["", "", "", ""]);
//   const [additionalHeading, setAdditionalHeading] = useState("");
//   const [additionalPoints, setAdditionalPoints] = useState(["", "", "", "", ""]);

//   const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

//   const [currentImage, setCurrentImage] = useState(""); 
//   const [imageFile, setImageFile] = useState(null);    
//   const [imagePreview, setImagePreview] = useState("");

//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Please login as admin");
//       setLoading(false);
//       return;
//     }

//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`${API}/api/blogs/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const blog = res.data;

//         setTitle(blog.title || "");
//         setHeading1(blog.heading1 || "");
//         setParagraphs1(blog.paragraphs1?.length ? blog.paragraphs1 : [""]);
//         setHeading2(blog.heading2 || "");
//         setParagraphs2(blog.paragraphs2?.length ? blog.paragraphs2 : [""]);
//         setWhyChoosePoints(blog.whyChoosePoints?.length === 4 ? blog.whyChoosePoints : ["", "", "", ""]);
//         setAdditionalHeading(blog.additionalHeading || "");
//         setAdditionalPoints(blog.additionalPoints?.length === 5 ? blog.additionalPoints : ["", "", "", "", ""]);
//         setFaqs(blog.faqs?.length > 0 ? blog.faqs : [{ question: "", answer: "" }]);

//         // Set current image if exists
//         if (blog.image) {
//           setCurrentImage(blog.image);
//           setImagePreview(blog.image); // Initial preview
//         }

//         setLoading(false);
//       } catch (err) {
//         setMsg("Error loading blog: " + (err.response?.data?.message || err.message));
//         setLoading(false);
//       }
//     };
//     fetchBlog();
//   }, [id]);

//   // Image change handler
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   // Reusable Handlers
//   const handleParaChange = (setter, index, value) => {
//     setter(prev => {
//       const updated = [...prev];
//       updated[index] = value;
//       return updated;
//     });
//   };

//   const addPara = (setter) => setter(prev => [...prev, ""]);

//   const removePara = (setter, index) => {
//     setter(prev => prev.length > 1 ? prev.filter((_, i) => i !== index) : prev);
//   };

//   const handlePointChange = (setter, index, value) => {
//     setter(prev => {
//       const updated = [...prev];
//       updated[index] = value;
//       return updated;
//     });
//   };

//   // FAQ Handlers
//   const addFaq = () => setFaqs(prev => [...prev, { question: "", answer: "" }]);

//   const removeFaq = (index) => {
//     if (faqs.length > 1) {
//       setFaqs(prev => prev.filter((_, i) => i !== index));
//     }
//   };

//   const handleFaqChange = (index, field, value) => {
//     setFaqs(prev => {
//       const updated = [...prev];
//       updated[index][field] = value;
//       return updated;
//     });
//   };

//   // Update Blog with FormData
//   const updateBlog = async (e) => {
//     e.preventDefault();
//     setMsg("");

//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Please login as admin first");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title.trim());
//     formData.append("heading1", heading1.trim());
//     formData.append("paragraphs1", JSON.stringify(paragraphs1.filter(p => p.trim())));
//     if (heading2.trim()) formData.append("heading2", heading2.trim());
//     formData.append("paragraphs2", JSON.stringify(paragraphs2.filter(p => p.trim())));
//     formData.append("whyChoosePoints", JSON.stringify(whyChoosePoints.filter(p => p.trim())));
//     if (additionalHeading.trim()) formData.append("additionalHeading", additionalHeading.trim());
//     formData.append("additionalPoints", JSON.stringify(additionalPoints.filter(p => p.trim())));
//     formData.append("faqs", JSON.stringify(faqs.filter(f => f.question.trim() && f.answer.trim())));

//     // Only append new image if user selected one
//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     try {
//       await axios.put(`${API}/api/blogs/${id}`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMsg("Blog updated successfully!");
//       setTimeout(() => navigate("/admin/blogs"), 1500);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Error updating blog");
//       console.error(err);
//     }
//   };

//   if (loading) return <div className="admin-job-container"><p>Loading blog...</p></div>;

//   return (
//     <>
//       <SEO title="Edit Blog" description="Edit blog post" canonicalUrl={`/admin/edit-blog/${id}`} />
//       <div className="admin-job-container">
//         <div className="job-box">
//           <h2>Edit Blog</h2>
//           {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

//           <form onSubmit={updateBlog}>
//             <div className="inputGroup">
//               <label>Title *</label>
//               <input value={title} onChange={(e) => setTitle(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Featured Image</label>
//               <input type="file" accept="image/*" onChange={handleImageChange} />
              
//               {imagePreview && (
//                 <div className="image-preview-container" style={{ marginTop: "15px" }}>
//                   <p style={{ fontWeight: "600", marginBottom: "8px" }}>
//                     {imageFile ? "New Image Preview:" : "Current Image:"}
//                   </p>
//                   <div style={{
//                     border: "2px dashed #ccc",
//                     borderRadius: "12px",
//                     overflow: "hidden",
//                     maxWidth: "600px"
//                   }}>
//                     <img
//                       src={imagePreview}
//                       alt="Blog preview"
//                       style={{
//                         width: "100%",
//                         height: "auto",
//                         maxHeight: "400px",
//                         objectFit: "cover",
//                         display: "block"
//                       }}
//                     />
//                   </div>
//                   {imageFile && <p style={{ marginTop: "8px", color: "#e67e22", fontSize: "14px" }}>
//                     This will replace the current image on save.
//                   </p>}
//                 </div>
//               )}
//             </div>

//             {/* Main Heading */}
//             <div className="inputGroup">
//               <label>Main Heading *</label>
//               <input value={heading1} onChange={(e) => setHeading1(e.target.value)} required />
//             </div>

//             {/* Paragraphs */}
//             <div className="inputGroup">
//               <label>Paragraphs for Main Heading</label>
//               {paragraphs1.map((para, index) => (
//                 <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
//                   <textarea
//                     value={para}
//                     onChange={(e) => handleParaChange(setParagraphs1, index, e.target.value)}
//                     rows="4"
//                     required={index === 0}
//                     style={{ flex: 1 }}
//                   />
//                   <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
//                     <button type="button" onClick={() => addPara(setParagraphs1)} className="small-btn">+</button>
//                     {paragraphs1.length > 1 && (
//                       <button type="button" onClick={() => removePara(setParagraphs1, index)} className="small-btn">−</button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="btn-log">
//               <button type="submit" className="admin-btn">Update Blog</button>
//             </div>
//           </form>
//         </div>
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

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [heading1, setHeading1] = useState("");
  const [paragraphs1, setParagraphs1] = useState([""]);

  const [currentImage, setCurrentImage] = useState(""); 
  const [imageFile, setImageFile] = useState(null);    
  const [imagePreview, setImagePreview] = useState("");

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  // Load Blog Data
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const blog = res.data;

        setTitle(blog.title || "");
        setHeading1(blog.heading1 || "");
        setParagraphs1(blog.paragraphs1?.length ? blog.paragraphs1 : [""]);
        setCurrentImage(blog.image || "");
        setImagePreview(blog.image || "");

        setLoading(false);
      } catch (err) {
        setMsg("Error loading blog: " + (err.response?.data?.message || err.message));
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Image Handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(currentImage);
  };

  // Paragraphs Handler
  const addPara = () => setParagraphs1(prev => [...prev, ""]);
  const removePara = (index) => {
    if (paragraphs1.length > 1) {
      setParagraphs1(prev => prev.filter((_, i) => i !== index));
    }
  };

  const updatePara = (index, value) => {
    setParagraphs1(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // UPDATE BLOG - SABSE IMPORTANT PART
  const updateBlog = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Error: Admin login required");
      return;
    }

    if (!title.trim() || !heading1.trim()) {
      setMsg("Title and Heading are required!");
      return;
    }

    const cleanParas = paragraphs1.map(p => p.trim()).filter(p => p.length > 0);
    if (cleanParas.length === 0) {
      setMsg("At least one paragraph required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("heading1", heading1.trim());
    formData.append("paragraphs1", JSON.stringify(cleanParas));

    // Sirf nayi image select ki ho toh append karo
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await axios.put(`${API}/api/blogs/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
        // Yeh line zaroori hai FormData ke saath
        transformRequest: [(data) => data],
      });

      setMsg("Blog updated successfully!");
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      console.error("Update error:", err.response || err);
      setMsg("Error: " + (err.response?.data?.message || "Failed to update"));
    }
  };

  if (loading) {
    return (
      <div className="admin-job-container text-center py-20">
        <p className="text-xl">Loading blog...</p>
      </div>
    );
  }

  return (
    <>
      <SEO title="Edit Blog" description="Edit existing blog post" />

      <div className="admin-job-container">
        <div className="job-box">
          <h2 className="text-3xl font-bold mb-8 text-center">Edit Blog</h2>

          {msg && (
            <div className={`text-center p-4 rounded-lg mb-6 text-lg font-medium ${msg.includes("success") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
              {msg}
            </div>
          )}

          <form onSubmit={updateBlog} className="space-y-8">

            {/* Title */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-2">Title <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-2">Featured Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-600 file:text-white"
              />

              {imagePreview && (
                <div className="mt-6 text-center">
                  <p className="text-sm font-medium text-gray-600 mb-3">
                    {imageFile ? "New Image Preview:" : "Current Image:"}
                  </p>
                  <div className="inline-block border-4 border-dashed border-gray-300 rounded-xl overflow-hidden">
                    <img
                      src={imagePreview}
                      alt="Blog"
                      className="max-w-full max-h-96 object-cover"
                    />
                  </div>
                  {imageFile && (
                    <div className="mt-4">
                      <p className="text-orange-600 text-sm font-medium mb-2">
                        This will replace the current image when saved
                      </p>
                      <button
                        type="button"
                        onClick={removeImage}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                      >
                        Cancel New Image
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Main Heading */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-2">Main Heading <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={heading1}
                onChange={(e) => setHeading1(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Paragraphs */}
            <div className="inputGroup">
              <label className="block text-lg font-medium mb-4">Paragraphs <span className="text-red-500">*</span></label>
              {paragraphs1.map((para, index) => (
                <div key={index} className="flex gap-3 mb-4 items-start">
                  <textarea
                    value={para}
                    onChange={(e) => updatePara(index, e.target.value)}
                    rows={5}
                    placeholder="Write paragraph..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-vertical"
                    required={index === 0}
                  />
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={addPara}
                      className="w-10 h-10 bg-green-600 text-white rounded-lg text-2xl hover:bg-green-700"
                      title="Add paragraph"
                    >
                      +
                    </button>
                    {paragraphs1.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePara(index)}
                        className="w-10 h-10 bg-red-600 text-white rounded-lg text-2xl hover:bg-red-700"
                        title="Remove"
                      >
                        −
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="text-center pt-8">
              <button
                type="submit"
                className="px-10 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
              >
                Update Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}