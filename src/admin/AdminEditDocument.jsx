// src/pages/admin/AdminEditDocument.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./admin.css";
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

export default function AdminEditDocument() {
  const { id } = useParams(); // Document ID from URL
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [currentFileUrl, setCurrentFileUrl] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchDocument();
  }, [id]);

  const fetchCategories = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const res = await axios.get(`${API}/api/document/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(res.data);
    } catch (err) {
      setMsg("Error loading categories");
    }
  };

  const fetchDocument = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin");
      return;
    }

    try {
      const res = await axios.get(`${API}/api/document/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const doc = res.data;
      setTitle(doc.title);
      setCategoryId(doc.category_id);
      setDescription(doc.description || "");
      setCurrentFileUrl(doc.file_url);
    } catch (err) {
      setMsg("Document not found or error loading");
    }
  };

  const submitUpdate = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("_method", "PUT"); // Important for update
    formData.append("title", title);
    formData.append("category_id", categoryId);
    if (description) formData.append("description", description);
    if (file) formData.append("file", file); // Optional new file

    try {
      await axios.post(`${API}/api/document/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMsg("Document updated successfully!");
      setTimeout(() => navigate("/admin/documents"), 1500); // Back to list
    } catch (err) {
      setMsg(err.response?.data?.message || "Error updating document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Edit Document - Admin"
        description="Edit existing document details"
      />

      <div className="admin-job-container">
        <div className="job-box upload-document-box">
          <h2>Edit Document</h2>

          {msg && (
            <p className={msg.includes("success") ? "success" : "error"}>
              {msg}
            </p>
          )}

          <form onSubmit={submitUpdate}>
            <div className="inputGroup">
              <label>Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label>Category *</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="inputGroup">
              <label>Description (Optional)</label>
              <textarea
                rows="4"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="inputGroup">
              <label>Current File</label>
              <a href={currentFileUrl} target="_blank" rel="noopener noreferrer">
                View Current File
              </a>
            </div>

            <div className="inputGroup">
              <label>New File (Optional - Upload to replace)</label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.ppt,.pptx,.doc,.docx"
              />
              {file && <p className="file-name">New: {file.name}</p>}
            </div>

            <div className="btn-log">
              <button
                type="submit"
                className="admin-btn upload-btn"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Document"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}