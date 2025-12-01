import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";  // ← Ye import kar do

export default function AdminComments() {
  const [comments, setComments] = useState([]);

  const loadComments = async () => {
    const res = await axios.get("http://localhost:5000/api/comments/all");
    setComments(res.data);
  };

  const deleteComment = async (id) => {
    if (window.confirm("Delete this comment?")) {
      await axios.delete(`http://localhost:5000/api/comments/delete/${id}`);
      loadComments();
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div className="admin-comments-wrapper">
      <div className="comments-header">
        <h2>All Blog Comments</h2>
        <p>Manage and review user comments</p>
      </div>

      <div className="comments-table-container">
        <table className="comments-table">
          <thead>
            <tr>
              <th>Blog ID</th>
              <th>Title</th>
              <th>Name</th>
              <th>Comment</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {comments.length === 0 ? (
              <tr>
                <td colSpan="6" style={{textAlign:"center", padding:"40px", color:"#999"}}>
                  No comments found
                </td>
              </tr>
            ) : (
              comments.map(c => (
                <tr key={c._id}>
                  <td>{c.blogId?._id || "—"}</td>
                  <td>{c.blogtitle || "Untitled"}</td>
                  <td><strong>{c.name}</strong></td>
                  <td>{c.comment}</td>
                  <td>{new Date(c.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => deleteComment(c._id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}