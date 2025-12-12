import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../style/About.css';
import ReadySection from '../../components/ReadySection';
import SEO from '../../components/SEO';
import axios from 'axios';

const API = import.meta.env.VITE_APP_API_URL;

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`);
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sorted);
      } catch (err) {
        setError("Unable to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  return (
    <>
      <SEO
        title="Blog - The IT Talent"
        description="Latest tech articles"
        canonicalUrl="https://www.theittalent.com/blog"
      />
      <div className="container">
        <section className="blog-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="blog-main-title">Our Latest <span>Blogs</span></h1>
            <p className="blog-main-subtitle">Insights, ideas, and tech trends.</p>
          </motion.div>
        </section>

        <section className="blog-grid-section">
          <div className="blog-grid-container">

            {loading && <p className="blog-loading">Loading blogs...</p>}
            {error && <p className="blog-error">{error}</p>}

            <div className="blog-grid">
              {blogs.map((post, index) => (
                <motion.div
                  className="blog-card"
                  key={post._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="blog-thumb">
                    <div className="blog-thumb-placeholder">
                      {post.title.charAt(0)}
                    </div>
                  </div>

                  <div className="blog-card-body">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.heading1 || "Click to read more..."}</p>

                    <div className="blog-meta">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </div>

                    <Link to={`/blog/${post._id}`} className="blog-read-btn">
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </div>
      <ReadySection />
    </>
  );
}
