// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import '../../style/About.css';
// import SEO from '../../components/SEO';
// import ReadySection from '../../components/ReadySection';

// export default function BlogDetailPage() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         // IMPORTANT: Relative URL use karo (proxy ke liye)
//         const res = await axios.get(`/api/blogs/${id}`);
//         setBlog(res.data);
//         setError(""); // Clear any previous error
//       } catch (err) {
//         const message = err.response
//           ? `Error ${err.response.status}: ${err.response.data?.message || "Blog not found"}`
//           : `Network error: ${err.message}`;
//         setError(message);
//         console.error("Blog fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchBlog();
//     } else {
//       setError("Invalid blog ID");
//       setLoading(false);
//     }
//   }, [id]);

//   if (loading) {
//     return <div style={{ padding: "100px", textAlign: "center" }}>Loading article...</div>;
//   }

//   if (error) {
//     return (
//       <div style={{ padding: "100px", textAlign: "center", color: "red" }}>
//         <h2>Oops! Something went wrong</h2>
//         <p>{error}</p>
//         <p><Link to="/blog">← Back to Blogs</Link></p>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div style={{ padding: "100px", textAlign: "center" }}>
//         <h2>Blog not found</h2>
//         <p><Link to="/blog">← Back to Blogs</Link></p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <SEO
//         title={blog.title}
//         description={blog.heading1 || "Read the latest insights from The IT Talent"}
//         canonicalUrl={`https://www.theittalent.com/blog/${id}`}
//       />

//       <article className="blog-detail-page">
//         <div className="blog-detail-container">
//           <Link to="/blog" className="back-link">
//             ← Back to Blogs
//           </Link>

//           <header className="blog-header">
//             <h1 className="blog-detail-title">{blog.title}</h1>
//             <p className="blog-date">
//               {new Date(blog.createdAt).toLocaleDateString('en-US', {
//                 month: 'long',
//                 day: 'numeric',
//                 year: 'numeric'
//               })}
//             </p>
//           </header>

//           <div className="blog-content">
//             {/* Heading 1 + Paragraphs */}
//             {blog.heading1 && <h2>{blog.heading1}</h2>}
//             {blog.paragraphs1 && blog.paragraphs1.length > 0 && (
//               blog.paragraphs1.map((para, i) => <p key={i}>{para}</p>)
//             )}

//             {/* Heading 2 + Paragraphs */}
//             {blog.heading2 && (
//               <>
//                 <h2>{blog.heading2}</h2>
//                 {blog.paragraphs2 && blog.paragraphs2.length > 0 && (
//                   blog.paragraphs2.map((para, i) => <p key={i}>{para}</p>)
//                 )}
//               </>
//             )}

//             {/* Why Choose Points */}
//             {blog.whyChoosePoints && blog.whyChoosePoints.length > 0 && (
//               <div className="why-choose-section">
//                 <h2>Why Choose Us?</h2>
//                 <ul>
//                   {blog.whyChoosePoints.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Additional Section */}
//             {blog.additionalHeading && (
//               <>
//                 <h2>{blog.additionalHeading}</h2>
//                 {blog.additionalPoints && blog.additionalPoints.length > 0 && (
//                   <ul>
//                     {blog.additionalPoints.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 )}
//               </>
//             )}
//           </div>
//         </div>
//       </article>

//       <ReadySection />
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../../style/Blog.css'; // Assuming you have the CSS for SubBlog here
import SEO from '../../components/SEO';
import ReadySection from '../../components/ReadySection';
import { ArrowRight } from 'lucide-react';

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
        const res = await axios.get(`/api/blogs/${id}`);
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
      await axios.post(`/api/comments/add`, {
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

                      {/* Heading 2 Section */}
                      {blog.heading2 && (
                        <>
                          <h2>{blog.heading2}</h2>
                          {blog.paragraphs2?.map((para, i) => (
                            <p key={i}>{para}</p>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </article>

              {/* Why Choose Section */}
              {blog.whyChoosePoints && blog.whyChoosePoints.length > 0 && (
                <section className="why-section">
                  <h2>Why Are Businesses Choosing Custom AI Over Generic Tools?</h2>
                  <div className="features-grid">
                    {blog.whyChoosePoints.map((point, i) => (
                      <div key={i} className="feature-card">
                        <strong>{point.split(':')[0]}:</strong> {point.split(':').slice(1).join(':')}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Additional Points Section */}
              {blog.additionalHeading && (
                <section className="industry-section">
                  <h2>{blog.additionalHeading}</h2>
                  <div className="industry-grid">
                    {blog.additionalPoints?.map((point, i) => (
                      <div key={i} className="industry-card">
                        <p><strong>{i + 1}.</strong> {point}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ Section */}
              <section className="faq-section">
                <h2>Frequently Asked Questions (FAQ)</h2>
                <div className="faq-list">
                  {faqs.map((faq, i) => (
                    <motion.div
                      key={i}
                      className={`faq-item ${openFaq === i ? 'open' : ''}`}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <h4 className="faq-question">
                        {faq.q}
                        <span className="faq-icon">{openFaq === i ? '−' : '+'}</span>
                      </h4>
                      {openFaq === i && <p className="faq-answer">{faq.a}</p>}
                    </motion.div>
                  ))}
                </div>
              </section>
            </section>

            {/* Sidebar */}
            <section className="right-blog-sec">
              <aside className="blog-sidebar">
                <div className="sidebar-card">
                  <h3>Search Blog</h3>
                  <div className="search-box">
                    <input type="text" placeholder="Search posts..." />
                    <button>Search</button>
                  </div>
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

          {/* CTA Section */}
          <section className="blog-cta-section">
            <div className="cta-card">
              <h3>Let’s Talk Strategy</h3>
              <p>Wondering if AI is the right move for your business? A quick strategy session can help you find the answer. Whether you’re exploring new ideas or have a specific challenge in mind, The IT Talent is here to support you with insights, expertise, and tailored solutions.</p>
              <Link to="/contact" className="cta-button">
                Schedule a Free Strategy Session <ArrowRight className="arrow-icon" />
              </Link>
            </div>
          </section>
        </div>
      </div>

      <ReadySection />
    </>
  );
}