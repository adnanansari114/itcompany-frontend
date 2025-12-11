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
//   const [paragraphs1, setParagraphs1] = useState([""]); // Start with one empty para
//   const [heading2, setHeading2] = useState("");
//   const [paragraphs2, setParagraphs2] = useState([""]);
//   const [whyChoosePoints, setWhyChoosePoints] = useState(["", "", "", ""]); // Fixed 4
//   const [additionalHeading, setAdditionalHeading] = useState("");
//   const [additionalPoints, setAdditionalPoints] = useState(["", "", "", "", ""]); // Fixed 5
//   const [msg, setMsg] = useState("");

//   const handleParaChange = (setter, index, value, paras) => {
//     const newParas = [...paras];
//     newParas[index] = value;
//     setter(newParas);
//   };

//   const addPara = (setter, paras) => setter([...paras, ""]);

//   const removePara = (setter, index, paras) => {
//     if (paras.length > 1) {
//       const newParas = paras.filter((_, i) => i !== index);
//       setter(newParas);
//     }
//   };

//   const handlePointChange = (setter, index, value, points) => {
//     const newPoints = [...points];
//     newPoints[index] = value;
//     setter(newPoints);
//   };

//   const submitBlog = async (e) => {
//     e.preventDefault();
//     setMsg("");

//     const token = localStorage.getItem("adminToken");
//     if (!token) {
//       setMsg("Please login as admin first");
//       return;
//     }

//     // Validate fixed lengths
//     if (whyChoosePoints.filter(p => p.trim()).length !== 4) {
//       setMsg("Please enter exactly 4 points for Why Choose section");
//       return;
//     }
//     if (additionalPoints.filter(p => p.trim()).length !== 5) {
//       setMsg("Please enter exactly 5 points for additional section");
//       return;
//     }

//     try {
//       await axios.post(
//         `${API}/api/blogs`,
//         {
//           title,
//           heading1,
//           paragraphs1: paragraphs1.filter(p => p.trim()), // Remove empty
//           heading2,
//           paragraphs2: paragraphs2.filter(p => p.trim()),
//           whyChoosePoints,
//           additionalHeading,
//           additionalPoints,
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setMsg("Blog added successfully!");
//       setTimeout(() => navigate("/admin/blogs"), 1500);
//     } catch (err) {
//       setMsg(err.response?.data?.message || "Error adding blog");
//     }
//   };

//   return (
//     <>
//       <SEO title="Add Blog" description="Add new blog" canonicalUrl="/admin/add-blog" />
//       <div className="admin-job-container">
//         <div className="job-box">
//           <h2>Add New Blog</h2>
//           {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}
//           <form onSubmit={submitBlog}>
//             <div className="inputGroup">
//               <label>Title *</label>
//               <input value={title} onChange={(e) => setTitle(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Heading 1 *</label>
//               <input value={heading1} onChange={(e) => setHeading1(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Paragraphs for Heading 1 (Add/Remove as needed)</label>
//               {paragraphs1.map((para, index) => (
//                 <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
//                   <textarea
//                     value={para}
//                     onChange={(e) => handleParaChange(setParagraphs1, index, e.target.value, paragraphs1)}
//                     rows="3"
//                     required={index === 0} // At least one para
//                     style={{ flex: 1 }}
//                   />
//                   <button type="button" onClick={() => addPara(setParagraphs1, paragraphs1)}>+</button>
//                   {paragraphs1.length > 1 && (
//                     <button type="button" onClick={() => removePara(setParagraphs1, index, paragraphs1)}>-</button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="inputGroup">
//               <label>Heading 2 *</label>
//               <input value={heading2} onChange={(e) => setHeading2(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Paragraphs for Heading 2</label>
//               {paragraphs2.map((para, index) => (
//                 <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
//                   <textarea
//                     value={para}
//                     onChange={(e) => handleParaChange(setParagraphs2, index, e.target.value, paragraphs2)}
//                     rows="3"
//                     required={index === 0}
//                     style={{ flex: 1 }}
//                   />
//                   <button type="button" onClick={() => addPara(setParagraphs2, paragraphs2)}>+</button>
//                   {paragraphs2.length > 1 && (
//                     <button type="button" onClick={() => removePara(setParagraphs2, index, paragraphs2)}>-</button>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <div className="inputGroup">
//               <label>Why Choose? Points (Exactly 4) *</label>
//               {whyChoosePoints.map((point, index) => (
//                 <input
//                   key={index}
//                   value={point}
//                   onChange={(e) => handlePointChange(setWhyChoosePoints, index, e.target.value, whyChoosePoints)}
//                   placeholder={`Point ${index + 1}`}
//                   required
//                   style={{ marginBottom: "10px" }}
//                 />
//               ))}
//             </div>

//             <div className="inputGroup">
//               <label>Additional Heading *</label>
//               <input value={additionalHeading} onChange={(e) => setAdditionalHeading(e.target.value)} required />
//             </div>

//             <div className="inputGroup">
//               <label>Additional Points (Exactly 5) *</label>
//               {additionalPoints.map((point, index) => (
//                 <input
//                   key={index}
//                   value={point}
//                   onChange={(e) => handlePointChange(setAdditionalPoints, index, e.target.value, additionalPoints)}
//                   placeholder={`Point ${index + 1}`}
//                   required
//                   style={{ marginBottom: "10px" }}
//                 />
//               ))}
//             </div>

            
//               <div className="btn-log">
//             <button type="submit" className="admin-btn">Add Blog</button>
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
  const [heading2, setHeading2] = useState("");
  const [paragraphs2, setParagraphs2] = useState([""]);
  const [whyChoosePoints, setWhyChoosePoints] = useState(["", "", "", ""]);
  const [additionalHeading, setAdditionalHeading] = useState("");
  const [additionalPoints, setAdditionalPoints] = useState(["", "", "", "", ""]);

  // New State for FAQs
  const [faqs, setFaqs] = useState([
    { question: "", answer: "" }
  ]);

  const [msg, setMsg] = useState("");

  // Helper Functions
  const handleParaChange = (setter, index, value, paras) => {
    const newParas = [...paras];
    newParas[index] = value;
    setter(newParas);
  };

  const addPara = (setter, paras) => setter([...paras, ""]);

  const removePara = (setter, index, paras) => {
    if (paras.length > 1) {
      const newParas = paras.filter((_, i) => i !== index);
      setter(newParas);
    }
  };

  const handlePointChange = (setter, index, value, points) => {
    const newPoints = [...points];
    newPoints[index] = value;
    setter(newPoints);
  };

  // FAQ Handlers
  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index) => {
    if (faqs.length > 1) {
      setFaqs(faqs.filter((_, i) => i !== index));
    }
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][field] = value;
    setFaqs(updatedFaqs);
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    // Optional: Agar chahte ho ki kam se kam 1 FAQ ho
    // if (faqs.length === 0 || faqs.some(f => !f.question.trim() || !f.answer.trim())) {
    //   setMsg("Please fill all FAQ fields or remove empty ones");
    //   return;
    // }

    try {
      await axios.post(
        `${API}/api/blogs`,
        {
          title,
          heading1,
          paragraphs1: paragraphs1.filter(p => p.trim()),
          heading2,
          paragraphs2: paragraphs2.filter(p => p.trim()),
          whyChoosePoints: whyChoosePoints.filter(p => p.trim()),
          additionalHeading,
          additionalPoints: additionalPoints.filter(p => p.trim()),
          faqs: faqs.filter(f => f.question.trim() && f.answer.trim()) // Only valid FAQs
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMsg("Blog added successfully!");
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error adding blog");
    }
  };

  return (
    <>
      <SEO title="Add Blog" description="Add new blog" canonicalUrl="/admin/add-blog" />
      <div className="admin-job-container">
        <div className="job-box">
          <h2>Add New Blog</h2>
          {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

          <form onSubmit={submitBlog}>
            {/* Existing Fields (Title, Heading1, etc.) */}
            <div className="inputGroup">
              <label>Title *</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Heading 1 *</label>
              <input value={heading1} onChange={(e) => setHeading1(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Paragraphs for Heading 1</label>
              {paragraphs1.map((para, index) => (
                <div key={index} style={{ display: "flex", marginBottom: "10px", gap: "8px" }}>
                  <textarea
                    value={para}
                    onChange={(e) => handleParaChange(setParagraphs1, index, e.target.value, paragraphs1)}
                    rows="3"
                    required={index === 0}
                    style={{ flex: 1 }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <button type="button" onClick={() => addPara(setParagraphs1, paragraphs1)} style={{ width: "40px" }}>+</button>
                    {paragraphs1.length > 1 && (
                      <button type="button" onClick={() => removePara(setParagraphs1, index, paragraphs1)} style={{ width: "40px" }}>-</button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Heading 2 & Paragraphs */}
            <div className="inputGroup">
              <label>Heading 2 *</label>
              <input value={heading2} onChange={(e) => setHeading2(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Paragraphs for Heading 2</label>
              {paragraphs2.map((para, index) => (
                <div key={index} style={{ display: "flex", marginBottom: "10px", gap: "8px" }}>
                  <textarea
                    value={para}
                    onChange={(e) => handleParaChange(setParagraphs2, index, e.target.value, paragraphs2)}
                    rows="3"
                    required={index === 0}
                    style={{ flex: 1 }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <button type="button" onClick={() => addPara(setParagraphs2, paragraphs2)} style={{ width: "40px" }}>+</button>
                    {paragraphs2.length > 1 && (
                      <button type="button" onClick={() => removePara(setParagraphs2, index, paragraphs2)} style={{ width: "40px" }}>-</button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Points */}
            <div className="inputGroup">
              <label>Why Choose Points (Exactly 4) *</label>
              {whyChoosePoints.map((point, index) => (
                <input
                  key={index}
                  value={point}
                  onChange={(e) => handlePointChange(setWhyChoosePoints, index, e.target.value, whyChoosePoints)}
                  placeholder={`Point ${index + 1}`}
                  required
                  style={{ marginBottom: "10px", display: "block" }}
                />
              ))}
            </div>

            <div className="inputGroup">
              <label>Additional Heading *</label>
              <input value={additionalHeading} onChange={(e) => setAdditionalHeading(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Additional Points (Exactly 5) *</label>
              {additionalPoints.map((point, index) => (
                <input
                  key={index}
                  value={point}
                  onChange={(e) => handlePointChange(setAdditionalPoints, index, e.target.value, additionalPoints)}
                  placeholder={`Point ${index + 1}`}
                  required
                  style={{ marginBottom: "10px", display: "block" }}
                />
              ))}
            </div>

            {/* New FAQ Section */}
            <div className="inputGroup">
              <label>
                <strong>FAQs (Optional - Add as many as you want)</strong>
              </label>
              {faqs.map((faq, index) => (
                <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", marginBottom: "15px" }}>
                  <input
                    type="text"
                    placeholder="Question *"
                    value={faq.question}
                    onChange={(e) => handleFaqChange(index, "question", e.target.value)}
                    style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
                  />
                  <textarea
                    placeholder="Answer *"
                    value={faq.answer}
                    onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
                    rows="3"
                    style={{ width: "100%", padding: "10px" }}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <button type="button" onClick={addFaq} style={{ marginRight: "10px" }}>
                      + Add Another FAQ
                    </button>
                    {faqs.length > 1 && (
                      <button type="button" onClick={() => removeFaq(index)} style={{ background: "#e74c3c", color: "white" }}>
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-log">
              <button type="submit" className="admin-btn">Add Blog</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}