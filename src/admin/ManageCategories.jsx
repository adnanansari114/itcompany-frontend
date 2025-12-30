// src/pages/admin/ManageCategories.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css"; // Reuse the same CSS or create new if needed
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

axios.defaults.headers.common["Content-Type"] = "application/json";

export default function ManageCategories() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null); // For edit mode
  const [msg, setMsg] = useState("");

  // Fetch all categories on load
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
      const res = await axios.get(`${API}/api/category`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(res.data);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error fetching categories");
    }
  };

  const submitCategory = async (e) => {
    e.preventDefault();
    setMsg("");

    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    const data = { name, description };

    try {
      if (editingId) {
        // Update mode
        await axios.put(`${API}/api/category/${editingId}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMsg("Category updated successfully!");
      } else {
        // Add mode
        await axios.post(`${API}/api/category`, data, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMsg("Category added successfully!");
      }

      // Reset form and refresh list
      setName("");
      setDescription("");
      setEditingId(null);
      fetchCategories();
    } catch (err) {
      setMsg(err.response?.data?.message || "Error saving category");
    }
  };

  const editCategory = (category) => {
    setName(category.name);
    setDescription(category.description || "");
    setEditingId(category.id);
    setMsg("");
  };

  const deleteCategory = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      return;
    }

    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`${API}/api/category/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMsg("Category deleted successfully!");
        fetchCategories();
      } catch (err) {
        setMsg(err.response?.data?.message || "Error deleting category");
      }
    }
  };

  return (
    <>
      <SEO
        title="Manage Categories - Admin"
        description="Add, edit, delete categories - The IT Talent"
        canonicalUrl="https://www.theittalent.com/admin/manage-categories"
      />

      <div className="admin-job-container"> {/* Reuse class for styling */}
        <div className="job-box">
          <h2>{editingId ? "Update Category" : "Add New Category"}</h2>

          {msg && (
            <p className={msg.includes("success") ? "success" : "error"}>
              {msg}
            </p>
          )}

          <form onSubmit={submitCategory}>
            <div className="inputGroup">
              <label>Name *</label>
              <input
                type="text"
                placeholder="e.g., Web Development"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="inputGroup">
              <label>Description (Optional)</label>
              <textarea
                rows="4"
                placeholder="Brief description of the category..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="btn-log">
              <button type="submit" className="admin-btn">
                {editingId ? "Update Category" : "Add Category"}
              </button>
            </div>
          </form>

          {/* List of categories below */}
          <div className="categories-list">
            <h3>Existing Categories</h3>
            {categories.length === 0 ? (
              <p>No categories found.</p>
            ) : (
              <ul>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <strong>{cat.name}</strong> {cat.description && `- ${cat.description}`}
                    <div className="category-btn">
                      <button onClick={() => editCategory(cat)}>Edit</button>
                      <button onClick={() => deleteCategory(cat.id)}>Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}