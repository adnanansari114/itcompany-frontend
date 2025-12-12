
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
      formData.append("image", imageFile);
    }

    try {
      await axios.post(`${API}/api/blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        timeout: 30000,
      });

      setMsg("Blog added successfully!");
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      console.error(err);
      setMsg("Error: " + (err.response?.data?.message || "Failed to add blog"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Add Blog" description="Create a new blog post" canonicalUrl="/admin/add-blog" />

      <div className="admin-job-container">
        <div className="job-box">
          <h2>Add New Blog</h2>

          {msg && (
            <p className={msg.includes("success") || msg.includes("added") ? "success" : "error"}>
              {msg}
            </p>
          )}

          <form onSubmit={submitBlog}>
            <div className="inputGroup">
              <label>Title <span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                placeholder="Enter blog title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label>Main Heading <span style={{ color: "red" }}>*</span></label>
              <input
                type="text"
                placeholder="Enter main heading"
                value={heading1}
                onChange={(e => setHeading1(e.target.value))}
                required
              />
            </div>

            <div className="inputGroup">
              <label>Featured Image (Optional)</label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/jpg,image/webp"
                onChange={handleImageChange}
              />

              {imagePreview && (
                <div style={{ marginTop: "15px", textAlign: "center" }}>
                  <img
                    src={imagePreview}
                    alt="Blog preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "300px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                  />
                  <br />
                  <button
                    type="button"
                    onClick={removeImage}
                    style={{
                      padding: "6px 12px",
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      marginTop: "10px",
                      cursor: "pointer"
                    }}
                  >
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            <div className="inputGroup">
              <label>Paragraphs <span style={{ color: "red" }}>*</span> (At least one)</label>
              {paragraphs1.map((para, index) => (
                <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <textarea
                    placeholder="Write paragraph..."
                    value={para}
                    onChange={(e) => updatePara(index, e.target.value)}
                    rows={4}
                    style={{ flex: 1, padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
                    required={index === 0}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <button
                      type="button"
                      onClick={addPara}
                      className="small-btn"
                      style={{ background: "#28a745", height: "40px" }}
                    >
                      +
                    </button>
                    {paragraphs1.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePara(index)}
                        className="small-btn"
                        style={{ background: "#dc3545" }}
                      >
                        −
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="btn-log">
              <button
                type="submit"
                className="admin-btn"
                disabled={loading}
                style={{
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer"
                }}
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