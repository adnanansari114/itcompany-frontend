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
        setTitle(blog.title);
        setHeading1(blog.heading1);
        setParagraphs1(blog.paragraphs1.length ? blog.paragraphs1 : [""]);
        setHeading2(blog.heading2);
        setParagraphs2(blog.paragraphs2.length ? blog.paragraphs2 : [""]);
        setWhyChoosePoints(blog.whyChoosePoints);
        setAdditionalHeading(blog.additionalHeading);
        setAdditionalPoints(blog.additionalPoints);
        setLoading(false);
      } catch (err) {
        setMsg("Error loading blog");
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // Same handleParaChange, addPara, removePara, handlePointChange as in AddBlog (copy them here)
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

  const updateBlog = async (e) => {
    e.preventDefault();
    setMsg("");

    // Same validation as in AddBlog
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    // Validate fixed lengths
    if (whyChoosePoints.filter(p => p.trim()).length !== 4) {
      setMsg("Please enter exactly 4 points for Why Choose section");
      return;
    }
    if (additionalPoints.filter(p => p.trim()).length !== 5) {
      setMsg("Please enter exactly 5 points for additional section");
      return;
    }
    

    try {
      await axios.put(
        `${API}/api/blogs/${id}`,
        {
          title,
          heading1,
          paragraphs1: paragraphs1.filter(p => p.trim()),
          heading2,
          paragraphs2: paragraphs2.filter(p => p.trim()),
          whyChoosePoints,
          additionalHeading,
          additionalPoints,
        },
        { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } }
      );
      setMsg("Blog updated successfully!");
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error updating blog");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <SEO title="Edit Blog" description="Edit blog" canonicalUrl={`/admin/edit-blog/${id}`} />
      <div className="admin-job-container">
        <div className="job-box">
          <h2>Edit Blog</h2>
          {msg && <p className={msg.includes("success") ? "success" : "error"}>{msg}</p>}
          <form onSubmit={updateBlog}>
            {/* Same form fields as AddBlog, with values and onChanges */}
            {/* ... Paste the form JSX from AddBlog here, replacing states accordingly */}
            <div className="inputGroup">
              <label>Title *</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Heading 1 *</label>
              <input value={heading1} onChange={(e) => setHeading1(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Paragraphs for Heading 1 (Add/Remove as needed)</label>
              {paragraphs1.map((para, index) => (
                <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
                  <textarea
                    value={para}
                    onChange={(e) => handleParaChange(setParagraphs1, index, e.target.value, paragraphs1)}
                    rows="3"
                    required={index === 0} // At least one para
                    style={{ flex: 1 }}
                  />
                  <button type="button" onClick={() => addPara(setParagraphs1, paragraphs1)}>+</button>
                  {paragraphs1.length > 1 && (
                    <button type="button" onClick={() => removePara(setParagraphs1, index, paragraphs1)}>-</button>
                  )}
                </div>
              ))}
            </div>

            <div className="inputGroup">
              <label>Heading 2 *</label>
              <input value={heading2} onChange={(e) => setHeading2(e.target.value)} required />
            </div>

            <div className="inputGroup">
              <label>Paragraphs for Heading 2</label>
              {paragraphs2.map((para, index) => (
                <div key={index} style={{ display: "flex", marginBottom: "10px" }}>
                  <textarea
                    value={para}
                    onChange={(e) => handleParaChange(setParagraphs2, index, e.target.value, paragraphs2)}
                    rows="3"
                    required={index === 0}
                    style={{ flex: 1 }}
                  />
                  <button type="button" onClick={() => addPara(setParagraphs2, paragraphs2)}>+</button>
                  {paragraphs2.length > 1 && (
                    <button type="button" onClick={() => removePara(setParagraphs2, index, paragraphs2)}>-</button>
                  )}
                </div>
              ))}
            </div>

            <div className="inputGroup">
              <label>Why Choose? Points (Exactly 4) *</label>
              {whyChoosePoints.map((point, index) => (
                <input
                  key={index}
                  value={point}
                  onChange={(e) => handlePointChange(setWhyChoosePoints, index, e.target.value, whyChoosePoints)}
                  placeholder={`Point ${index + 1}`}
                  required
                  style={{ marginBottom: "10px" }}
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
                  style={{ marginBottom: "10px" }}
                />
              ))}
            </div>
            <button type="submit" className="btn">Update Blog</button>
          </form>
        </div>
      </div>
    </>
  );
}