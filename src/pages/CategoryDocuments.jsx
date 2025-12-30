// src/pages/CategoryDocuments.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../style/Documents.css";
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

export default function CategoryDocuments() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategoryAndDocuments();
  }, [id]);

  const fetchCategoryAndDocuments = async () => {
    setLoading(true);
    try {
      const docsRes = await axios.get(`${API}/api/document`);
      const allDocs = docsRes.data;

      const filteredDocs = allDocs.filter(doc => doc.category_id === parseInt(id));

      if (filteredDocs.length > 0) {
        setCategory({
          id: filteredDocs[0].category_id,
          name: filteredDocs[0].category_name
        });
        setDocuments(filteredDocs);
        setSelectedDoc(filteredDocs[0]); // Auto select first
      } else {
        setError("No documents found in this category.");
      }
    } catch (err) {
      setError("Failed to load documents. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
  };

  if (loading) return <div className="loading-page">Loading documents...</div>;
  if (error) return <div className="error-page">{error}</div>;

  return (
    <>
      <SEO
        title={`${category?.name || "Documents"} - The IT Talent`}
        description={`View documents in ${category?.name}`}
      />

      <div className="category-docs-wrapper">
        <div className="category-docs-layout">
          {/* Left Sidebar */}
          <aside className="docs-sidebar">
            <div className="sidebar-header">
              <h2>{category?.name}</h2>
              <span className="doc-count">
                {documents.length} document{documents.length !== 1 ? 's' : ''}
              </span>
            </div>
            <nav className="docs-nav">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className={`doc-nav-item ${selectedDoc?.id === doc.id ? "active" : ""}`}
                  onClick={() => handleDocClick(doc)}
                >
                  <div className="doc-nav-title">{doc.title}</div>
                  {doc.description && (
                    <div className="doc-nav-desc">{doc.description}</div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Right Preview */}
          <main className="docs-main">
            {selectedDoc ? (
              <article className="document-preview">
                <header className="preview-header">
                  <h1>{selectedDoc.title}</h1>
                  {selectedDoc.description && (
                    <p className="preview-desc">{selectedDoc.description}</p>
                  )}
                </header>

                <div className="preview-buttons">
                  <a
                    href={selectedDoc.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-open"
                  >
                    Open in New Tab
                  </a>
                  <a
                    href={selectedDoc.file_url}
                    download={selectedDoc.title}
                    className="btn-download"
                  >
                    Download File
                  </a>
                </div>

                {/* <div className="preview-container">
                  {selectedDoc.file_url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <img src={selectedDoc.file_url} alt={selectedDoc.title} className="preview-img" />
                  ) : selectedDoc.file_url.match(/\.(pdf)$/i) ? (
                    <iframe
                      src={selectedDoc.file_url}
                      title={selectedDoc.title}
                      className="preview-pdf"
                    />
                  ) : (
                    <div className="preview-fallback">
                      <p>Preview not available for this file type.</p>
                      <p>Use the buttons above to open or download the file.</p>
                    </div>
                  )}
                </div> */}
              </article>
            ) : (
              <div className="no-doc-selected">
                <p>Select a document from the left sidebar to view it here.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}