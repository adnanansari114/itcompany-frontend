import React, { useEffect, useState } from "react";
import "../style/documents.css";
import axios from "axios";

const API = import.meta.env.VITE_APP_API_URL;

export default function Documents() {
  const [docs, setDocs] = useState([]);
  const [active, setActive] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await axios.get(`${API}/api/document`);
      const data = Array.isArray(res.data) ? res.data : [];

      setDocs(data);
      setActive(data.length > 0 ? data[0] : null);
    } catch (err) {
      console.error(err);
      setError("Failed to load documents");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="public-doc-loading">Loading documents...</div>;
  }

  if (error) {
    return <div className="public-doc-error">{error}</div>;
  }

  return (
    <div className="public-doc-wrapper">
      {/* LEFT COLUMN */}
      <div className="public-doc-left">
        {docs.length === 0 && (
          <p className="public-doc-empty">No documents available</p>
        )}

        {docs.map((doc) => (
          <div
            key={doc.id}
            className={`public-doc-item ${
              active?.id === doc.id ? "active" : ""
            }`}
            onClick={() => setActive(doc)}
          >
            {doc.title}
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="public-doc-right">
        {active ? (
          <>
            <h2 className="public-doc-title">{active.title}</h2>

            <button
              className="public-doc-download"
              onClick={() =>
                window.open(active.document_path, "_blank", "noopener,noreferrer")
              }
            >
              Download Document
            </button>
          </>
        ) : (
          <p className="public-doc-select">Select a document to view</p>
        )}
      </div>
    </div>
  );
}
