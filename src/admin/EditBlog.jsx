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
  const [heading2, setHeading2] = useState("");
  const [paragraphs2, setParagraphs2] = useState([""]);
  const [whyChoosePoints, setWhyChoosePoints] = useState(["", "", "", ""]);
  const [additionalHeading, setAdditionalHeading] = useState("");
  const [additionalPoints, setAdditionalPoints] = useState(["", "", "", "", ""]);

  // FAQ State
  const [faqs, setFaqs] = useState([{ question: "", answer: "" }]);

  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin");
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
        setHeading2(blog.heading2 || "");
        setParagraphs2(blog.paragraphs2?.length ? blog.paragraphs2 : [""]);
        setWhyChoosePoints(blog.whyChoosePoints?.length === 4 ? blog.whyChoosePoints : ["", "", "", ""]);
        setAdditionalHeading(blog.additionalHeading || "");
        setAdditionalPoints(blog.additionalPoints?.length === 5 ? blog.additionalPoints : ["", "", "", "", ""]);

        // Load FAQs (safe check)
        setFaqs(blog.faqs?.length > 0 ? blog.faqs : [{ question: "", answer: "" }]);

        setLoading(false);
      } catch (err) {
        setMsg("Error loading blog: " + (err.response?.data?.message || err.message));
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Reusable Handlers
  const handleParaChange = (setter, index, value, paras) => {
    const newParas = [...paras];
    newParas[index] = value;
    setter(newParas);
  };

  const addPara = (setter, paras) => setter([...paras, ""]);

  const removePara = (setter, index, paras) => {
    if (paras.length > 1) {
      setter(paras.filter((_, i) => i !== index));
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
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const updateBlog = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    // Validation
    try {
      await axios.put(
        `${API}/api/blogs/${id}`,
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

      setMsg("Blog updated successfully!");
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error updating blog");
    }
  };

  if (loading) return <div className="admin-job-container"><p>Loading blog...</p></div>;

  return (
    <>
      <SEO title="Edit Blog" description="Edit blog post" canonicalUrl={`/admin/edit-blog/${id}`} />
      <div className="admin-job-container">
        <div className="job-box">
          <h2>Edit Blog</h2>
          {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}

          <form onSubmit={updateBlog}>
            {/* Title */}
            <div className="inputGroup">
              <label>Title *</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            {/* Heading 1 + Paragraphs */}
            <div className="inputGroup">
              <label>Heading *</label>
              <input value={heading1} onChange={(e) => setHeading1(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Paragraphs for Heading </label>
              {paragraphs1.map((para, index) => (
                <div key={index} style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                  <textarea
                    value={para}
                    onChange={(e) => handleParaChange(setParagraphs1, index, e.target.value, paragraphs1)}
                    rows="3"
                    required={index === 0}
                    style={{ flex: 1 }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <button type="button" onClick={() => addPara(setParagraphs1, paragraphs1)}>+</button>
                    {paragraphs1.length > 1 && (
                      <button type="button" onClick={() => removePara(setParagraphs1, index, paragraphs1)}>-</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-log">
              <button type="submit" className="admin-btn">Update Blog</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}