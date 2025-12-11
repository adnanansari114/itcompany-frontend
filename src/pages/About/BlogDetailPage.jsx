import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../../style/Blog.css'; // Assuming you have the CSS for SubBlog here
import SEO from '../../components/SEO';
import ReadySection from '../../components/ReadySection';
import { ArrowRight } from 'lucide-react';
const API = import.meta.env.VITE_APP_API_URL;

const faqs = [
  { q: "What's the difference between custom AI and off-the-shelf tools?", a: "Custom AI is built for your processes. Off-the-shelf tools are built for mass use and may not align with your needs." },
  { q: "Can small or mid-sized businesses afford custom AI?", a: "Yes. Many companies start with a single use case and scale as ROI becomes clear." },
  { q: "Is my data safe with custom AI solutions?", a: "Absolutely. With strong security measures and compliance protocols, sensitive information is protected." }
];

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`);
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRecentPosts(sorted);
      } catch (err) {
        setError("Unable to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    getBlogs();
  }, []);
  // Comment form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    comment: ""
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs/${id}`);
        setBlog(res.data);
        setError("");
      } catch (err) {
        const message = err.response
          ? `Error ${err.response.status}: ${err.response.data?.message || "Blog not found"}`
          : `Network error: ${err.message}`;
        setError(message);
        console.error("Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/comments/add`, {
        blogId: id,
        ...form
      });
      alert("Comment submitted!");
      setForm({ name: "", email: "", website: "", comment: "" });
    } catch (err) {
      alert("Failed to submit comment. Please try again.");
    }
  };

  if (loading) {
    return <div style={{ padding: "100px", textAlign: "center" }}>Loading article...</div>;
  }

  if (error || !blog) {
    return (
      <div style={{ padding: "100px", textAlign: "center", color: "red" }}>
        <h2>{error ? "Oops! Something went wrong" : "Blog not found"}</h2>
        <p>{error || "The requested blog could not be found."}</p>
        <p><Link to="/blog">← Back to Blogs</Link></p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.heading1?.substring(0, 160) || "Read the latest insights from The IT Talent"}
        canonicalUrl={`https://www.theittalent.com/blog/${id}`}
      />

      <div className='Blogpostdetail'>
        <section className="blog-hero-dark">
          <div className="hero-bg-overlay"></div>
          <div className="blog-container">
            <h1 className="hero-title-dark">{blog.title}</h1>
          </div>
        </section>

        <div className="container">
          <div className="blog-post-content">
            <section className='left-blog-sec'>
              <article className="blog-main-layout">
                <div className="blog-container">
                  <div className="post-meta-top">
                    <div className="author-info">
                      <span className="author-avatar">IT</span>
                      <div>
                        <strong>The IT Talent Team</strong>
                        <div className="meta-links">
                          <span>0 Comments</span> • <span>
                            {new Date(blog.createdAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-grid-layout">
                    <div className="blog-content-area">
                      {/* Main Intro */}
                      {blog.heading1 && <h2 className='blogheading'>{blog.heading1}</h2>}
                      {blog.paragraphs1?.map((para, i) => (
                        <p key={i} className="intro-text">{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </section>

            {/* Sidebar */}
            <section className="right-blog-sec">
              <aside className="blog-sidebar">
                <div className="sidebar-card">
                  <h3>Recent Blog</h3>

                  {recentPosts.slice(0, 5).map((post, i) => (
                    <ul key={i}>
                      <li ><Link to={`/blog/${post._id}`}>{post.title}</Link></li>
                    </ul>
                  ))}

                </div>

              </aside>
            </section>
          </div>

          {/* Comment Section */}
          <div className="comment-area">
            <h3>Leave a Comment</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" value={blog.title} readOnly placeholder="Blog Title" />
              <input
                placeholder="Your name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your email *"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                placeholder="Your website (optional)"
                value={form.website}
                onChange={(e) => setForm({ ...form, website: e.target.value })}
              />
              <textarea
                placeholder="Comment…"
                required
                rows="5"
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
              ></textarea>
              <button type="submit">Submit Comment</button>
            </form>
          </div>
        </div>
      </div>

      <ReadySection />
    </>
  );
}