// src/pages/DocumentCategories.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Agar routing use kar rahe ho
import "../style/Documents.css"; // New CSS file for this page
import SEO from '../components/SEO';

const API = import.meta.env.VITE_APP_API_URL;

export default function DocumentCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // Public endpoint - no auth needed (assuming you have /api/document/categories public)
      const res = await axios.get(`${API}/api/document/categories`);
      setCategories(res.data);
    } catch (err) {
      setError("Failed to load categories. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Resources & Documents - The IT Talent"
        description="Browse company documents, policies, guides by category"
        canonicalUrl="https://www.theittalent.com/resources"
      />

      <div className="categories-page-container">
        <div className="categories-header">
          <h1>Resources & Documents</h1>
          <p>Browse all important documents categorized for easy access</p>
        </div>

        {loading ? (
          <div className="loading">Loading categories...</div>
        ) : error ? (
          <div className="error-msg">{error}</div>
        ) : categories.length === 0 ? (
          <div className="no-data">No categories available yet.</div>
        ) : (
          <div className="categories-grid">
            {categories.map((category) => (
              <div key={category.id} className="category-card">
                <div className="category-info">
                  <div className="category-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7h18M3 12h18M3 17h18"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7v10m0 0H6a2 2 0 01-2-2V9a2 2 0 012-2h2m0 10h8m0-10H14a2 2 0 00-2 2v6a2 2 0 002 2h2"
                      />
                    </svg>
                  </div>
                  <div className="category-details">
                    <h3>{category.name}</h3>
                    {category.description && (
                      <p className="category-desc">{category.description}</p>
                    )}
                  </div>
                </div>

                <Link to={`/resources/category/${category.id}`}>
                  <button className="view-docs-btn">
                    View Documents
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}