import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.css";
import SEO from "../components/SEO";

const API = import.meta.env.VITE_APP_API_URL;

export default function BlogList() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [msg, setMsg] = useState(""); // { type: "success" | "error", text: "" }
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      setMsg("Please login as admin to access this page.");
      setLoading(false);
      return;
    }

    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data);
      } catch (err) {
        setMsg("Error fetching blogs. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`${API}/api/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBlogs(blogs.filter((blog) => blog._id !== id));
      setMsg("Blog deleted successfully!");
      setTimeout(() => setMsg(""), 4000); // Auto clear after 4 seconds
    } catch (err) {
      setMsg("Failed to delete blog. Please try again.");
      console.error(err);
    }
  };

  return (
    <>
      <SEO title="Admin - Manage Blogs" description="Manage all blog posts" />

      <div className="admin-blog-container">
        <div className="admin-header">
          <h2>Manage Blogs</h2>
          <button onClick={() => navigate("/admin/add-blog")} className="add-btn">
            + Add New Blog
          </button>
        </div>

        {/* Message Alert */}
        {msg && (
          <p
            className={`msg ${
              msg.includes("success") || msg.includes("deleted") ? "success" : "error"
            }`}
          >
            {msg}
          </p>
        )}

        {/* Loading State */}
        {loading && (
          <p style={{ textAlign: "center", padding: "50px", fontSize: "18px", color: "#666" }}>
            Loading blogs...
          </p>
        )}

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
          <div className="empty-state">
            <p>No blogs found.</p>
            <button onClick={() => navigate("/admin/add-blog")} className="add-btn">
              Create Your First Blog
            </button>
          </div>
        )}

        {/* Blogs Table */}
        {!loading && blogs.length > 0 && (
          <div className="table-responsive">
            <table className="blog-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Published Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td data-label="Title">{blog.title}</td>
                    <td data-label="Date">
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </td>
                    <td data-label="Actions" className="actions bloglist-btn">
                      <button
                        onClick={() => navigate(`/admin/edit-blog/${blog._id}`)}
                        className="edit-btn"
                      >
                        Edit
                      </button>
                      <button onClick={() => deleteBlog(blog._id)} className="delete-btn">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}