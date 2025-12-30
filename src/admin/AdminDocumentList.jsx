// src/pages/admin/AdminDocumentList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Agar routing use kar rahe ho
import "./admin.css";
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

export default function AdminDocumentList() {
  const [documents, setDocuments] = useState([]);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      setMsg("Please login as admin first");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.get(`${API}/api/document`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDocuments(res.data);
    } catch (err) {
      setMsg("Error loading documents");
    } finally {
      setLoading(false);
    }
  };

  const deleteDocument = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    if (window.confirm("Are you sure you want to delete this document?")) {
      try {
        await axios.delete(`${API}/api/document/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMsg("Document deleted successfully!");
        fetchDocuments(); // Refresh list
      } catch (err) {
        setMsg("Error deleting document");
      }
    }
  };

  return (
    <>
      <SEO
        title="Document List - Admin"
        description="View and manage all uploaded documents"
        canonicalUrl="https://www.theittalent.com/admin/documents"
      />

      <div className="admin-job-container">
        <div className="job-box">
          <h2>All Documents</h2>

          {msg && (
            <p className={msg.includes("success") ? "success" : "error"}>
              {msg}
            </p>
          )}

          {loading ? (
            <p>Loading documents...</p>
          ) : documents.length === 0 ? (
            <p>No documents uploaded yet.</p>
          ) : (
            <div className="table-container">
              <table className="documents-table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>View</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr key={doc.id}>
                      <td>{index + 1}</td>
                      <td>{doc.title}</td>
                      <td>{doc.category_name}</td>
                      <td>
                        <a
                          href={doc.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="view-btn"
                        >
                          View File
                        </a>
                      </td>
                      <td className="actions">
                        <Link to={`/admin/edit-document/${doc.id}`}>
                          <button className="edit-btn">Edit</button>
                        </Link>
                        <button
                          className="delete-btn"
                          onClick={() => deleteDocument(doc.id)}
                        >
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
      </div>
    </>
  );
}