// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import '../../style/Blog.css'; // Assuming you have the CSS for SubBlog here
// import SEO from '../../components/SEO';
// import ReadySection from '../../components/ReadySection';
// import { ArrowRight } from 'lucide-react';
// const API = import.meta.env.VITE_APP_API_URL;

// const faqs = [
//   { q: "What's the difference between custom AI and off-the-shelf tools?", a: "Custom AI is built for your processes. Off-the-shelf tools are built for mass use and may not align with your needs." },
//   { q: "Can small or mid-sized businesses afford custom AI?", a: "Yes. Many companies start with a single use case and scale as ROI becomes clear." },
//   { q: "Is my data safe with custom AI solutions?", a: "Absolutely. With strong security measures and compliance protocols, sensitive information is protected." }
// ];

// export default function BlogDetailPage() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [openFaq, setOpenFaq] = useState(null);
//   const [recentPosts, setRecentPosts] = useState([]);

//   useEffect(() => {
//     const getBlogs = async () => {
//       try {
//         const res = await axios.get(`${API}/api/blogs`);
//         const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//         setRecentPosts(sorted);
//       } catch (err) {
//         setError("Unable to load blogs.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     getBlogs();
//   }, []);
//   // Comment form state
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     website: "",
//     comment: ""
//   });

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`${API}/api/blogs/${id}`);
//         setBlog(res.data);
//         setError("");
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

//     if (id) fetchBlog();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${API}/api/comments/add`, {
//         blogId: id,
//         ...form
//       });
//       alert("Comment submitted!");
//       setForm({ name: "", email: "", website: "", comment: "" });
//     } catch (err) {
//       alert("Failed to submit comment. Please try again.");
//     }
//   };

//   if (loading) {
//     return <div style={{ padding: "100px", textAlign: "center" }}>Loading article...</div>;
//   }

//   if (error || !blog) {
//     return (
//       <div style={{ padding: "100px", textAlign: "center", color: "red" }}>
//         <h2>{error ? "Oops! Something went wrong" : "Blog not found"}</h2>
//         <p>{error || "The requested blog could not be found."}</p>
//         <p><Link to="/blog">← Back to Blogs</Link></p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <SEO
//         title={blog.title}
//         description={blog.heading1?.substring(0, 160) || "Read the latest insights from The IT Talent"}
//         canonicalUrl={`https://www.theittalent.com/blog/${id}`}
//       />

//       <div className='Blogpostdetail'>
//         <section className="blog-hero-dark">
//           <div className="hero-bg-overlay"></div>
//           <div className="blog-container">
//             <h1 className="hero-title-dark">{blog.title}</h1>
//           </div>
//         </section>

//         <div className="container">
//           <div className="blog-post-content">
//             <section className='left-blog-sec'>
//               <article className="blog-main-layout">
//                 <div className="blog-container">
//                   <div className="post-meta-top">
//                     <div className="author-info">
//                       <span className="author-avatar">IT</span>
//                       <div>
//                         <strong>The IT Talent Team</strong>
//                         <div className="meta-links">
//                           <span>0 Comments</span> • <span>
//                             {new Date(blog.createdAt).toLocaleDateString('en-US', {
//                               month: 'long',
//                               day: 'numeric',
//                               year: 'numeric'
//                             })}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="blog-grid-layout">
//                     <div className="blog-content-area">
//                       {/* Main Intro */}
//                       {blog.heading1 && <h2 className='blogheading'>{blog.heading1}</h2>}
//                       {blog.paragraphs1?.map((para, i) => (
//                         <p key={i} className="intro-text">{para}</p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </section>

//             {/* Sidebar */}
//             <section className="right-blog-sec">
//               <aside className="blog-sidebar">
//                 <div className="sidebar-card">
//                   <h3>Recent Blog</h3>

//                   {recentPosts.slice(0, 5).map((post, i) => (
//                     <ul key={i}>
//                       <li ><Link to={`/blog/${post._id}`}>{post.title}</Link></li>
//                     </ul>
//                   ))}

//                 </div>

//               </aside>
//             </section>
//           </div>

//           {/* Comment Section */}
//           <div className="comment-area">
//             <h3>Leave a Comment</h3>
//             <form onSubmit={handleSubmit}>
//               <input type="text" value={blog.title} readOnly placeholder="Blog Title" />
//               <input
//                 placeholder="Your name *"
//                 required
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//               />
//               <input
//                 type="email"
//                 placeholder="Your email *"
//                 required
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//               />
//               <input
//                 placeholder="Your website (optional)"
//                 value={form.website}
//                 onChange={(e) => setForm({ ...form, website: e.target.value })}
//               />
//               <textarea
//                 placeholder="Comment…"
//                 required
//                 rows="5"
//                 value={form.comment}
//                 onChange={(e) => setForm({ ...form, comment: e.target.value })}
//               ></textarea>
//               <button type="submit">Submit Comment</button>
//             </form>
//           </div>
//         </div>
//       </div>

//       <ReadySection />
//     </>
//   );
// }





// src/pages/BlogDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import SEO from '../../components/SEO';
import ReadySection from '../../components/ReadySection';
import '../../style/Blog.css';

const API = import.meta.env.VITE_APP_API_URL;

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [recentPosts, setRecentPosts] = useState([]);

  // Comment States
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  // Forms
  const [mainForm, setMainForm] = useState({ name: "", email: "", website: "", comment: "" });
  const [replyForms, setReplyForms] = useState({});
  const [replyNames, setReplyNames] = useState({});

  // Fetch recent posts
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs`);
        const sorted = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setRecentPosts(sorted);
      } catch (err) {
        console.error("Recent posts error:", err);
      }
    };
    getBlogs();
  }, []);

  // Fetch single blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API}/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        setError("Blog not found or error loading.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  // Fetch comments when section opens
  useEffect(() => {
    if (showComments && id) {
      const fetchComments = async () => {
        try {
          const res = await axios.get(`${API}/api/comments/blog/${id}`);
          setComments(res.data || []);
        } catch (err) {
          console.error("Comments load failed:", err);
        }
      };
      fetchComments();
    }
  }, [showComments, id]);

  // Submit main comment
  const handleMainComment = async (e) => {
    e.preventDefault();
    if (!mainForm.name.trim() || !mainForm.email.trim() || !mainForm.comment.trim()) {
      return alert("Name, Email & Comment are required!");
    }

    try {
      const res = await axios.post(`${API}/api/comments/add`, {
        blogId: id,
        blogTitle: blog.title,
        name: mainForm.name,
        email: mainForm.email,
        website: mainForm.website,
        comment: mainForm.comment,
        parentId: null
      });

      setComments([res.data.comment, ...comments]);
      setMainForm({ name: "", email: "", website: "", comment: "" });
    } catch (err) {
      alert("Failed to post comment. Try again.");
    }
  };

  // Submit reply
  const handleReply = async (parentId) => {
    const name = replyNames[parentId]?.trim();
    const text = replyForms[parentId]?.trim();

    if (!name || !text) {
      return alert("Name and reply are required!");
    }

    try {
      const res = await axios.post(`${API}/api/comments/add`, {
        blogId: id,
        blogTitle: blog.title,
        name,
        email: "",
        comment: text,
        parentId
      });

      setComments(comments.map(c =>
        c._id === parentId
          ? { ...c, replies: [...(c.replies || []), res.data.comment] }
          : c
      ));

      setReplyingTo(null);
      setReplyForms(prev => ({ ...prev, [parentId]: "" }));
      setReplyNames(prev => ({ ...prev, [parentId]: "" }));
    } catch (err) {
      alert("Reply failed!");
    }
  };

  if (loading) return <div className="text-center py-32 text-center text-2xl">Loading article...</div>;
  if (error || !blog) return (
    <div className="text-center py-32">
      <h2 className="text-3xl text-red-600 mb-4">Blog not found</h2>
      <Link to="/blog" className="text-blue-600 underline">Back to Blogs</Link>
    </div>
  );

  // Comment Item Component
  const CommentItem = React.memo(({ comment }) => (
    <div className="border-b border-gray-200 pb-8 last:border-0">
      <div className="flex gap-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
          {comment.name?.[0]?.toUpperCase() || "A"}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h4 className="font-semibold">{comment.name || "Anonymous"}</h4>
            <span className="text-sm text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString('en-US', {
                month: 'short', day: 'numeric', year: 'numeric'
              })}
            </span>
          </div>
          <p className="text-gray-800 leading-relaxed mt-2">{comment.comment}</p>

          <button
            onClick={() => setReplyingTo(comment._id)}
            className="mt-3 text-sm font-medium text-blue-600 hover:underline"
          >
            Reply
          </button>

          {/* Reply Form */}
          {replyingTo === comment._id && (
            <div className="mt-6 ml-10 p-5 bg-gray-50 rounded-2xl border">
              <input
                type="text"
                placeholder="Your name *"
                className="w-full border rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={replyNames[comment._id] || ""}
                onChange={(e) => setReplyNames({ ...replyNames, [comment._id]: e.target.value })}
              />
              <textarea
                placeholder="Write a reply..."
                rows="3"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={replyForms[comment._id] || ""}
                onChange={(e) => setReplyForms({ ...replyForms, [comment._id]: e.target.value })}
              />
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => handleReply(comment._id)}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition"
                >
                  Post Reply
                </button>
                <button
                  onClick={() => setReplyingTo(null)}
                  className="text-gray-600 hover:text-black"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-8 ml-12 space-y-6 border-l-2 border-gray-200 pl-6">
              {comment.replies.map(reply => (
                <CommentItem key={reply._id} comment={reply} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.heading1?.substring(0, 160) || "Read latest insights from The IT Talent"}
        canonicalUrl={`https://www.theittalent.com/blog/${id}`}
      />

      <div className="Blogpostdetail">
        {/* Hero Section */}
        <section className="blog-hero-dark relative py-24">
          <div className="hero-bg-overlay"></div>
          <div className="blog-container text-center relative z-10">
            <h1 className="hero-title-dark text-4xl md:text-6xl font-bold text-white max-w-5xl mx-auto">
              {blog.title}
            </h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article>
                <div className="post-meta-top mb-10">
                  <div className="author-info flex items-center gap-5">
                    <span className="author-avatar w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      IT
                    </span>
                    <div>
                      <strong className="block text-xl">The IT Talent Team</strong>
                      <div className="text-gray-600">
                        <span>{comments.length} Comments</span> •{' '}
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'long', day: 'numeric', year: 'numeric'
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700">
                  {blog.heading1 && <h2 className="text-4xl font-bold mt-12 mb-6">{blog.heading1}</h2>}
                  {blog.paragraphs1?.map((para, i) => (
                    <p key={i} className="text-lg leading-8 mb-6">{para}</p>
                  ))}
                  {/* Add more blog content here if needed */}
                </div>
              </article>

              {/* Comment Section */}
              <div className="comments-section">
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="comments-toggle-btn"
                >
                  {comments.length} Comments
                  <span className="arrow-icon">{showComments ? 'Up Arrow' : 'Down Arrow'}</span>
                </button>

                {showComments && (
                  <div className="comments-wrapper">

                    {/* Main Comment Form */}
                    <form onSubmit={handleMainComment} className="comment-form">
                      <h3 className="form-title">Add a Comment</h3>

                      <div className="form-row">
                        <input
                          type="text"
                          placeholder="Your name *"
                          required
                          value={mainForm.name}
                          onChange={e => setMainForm({ ...mainForm, name: e.target.value })}
                          className="input-field"
                        />
                        <input
                          type="email"
                          placeholder="Your email * (won't be shown)"
                          required
                          value={mainForm.email}
                          onChange={e => setMainForm({ ...mainForm, email: e.target.value })}
                          className="input-field"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Website (optional)"
                        value={mainForm.website}
                        onChange={e => setMainForm({ ...mainForm, website: e.target.value })}
                        className="input-field full-width"
                      />

                      <textarea
                        placeholder="Write your comment here..."
                        rows="6"
                        required
                        value={mainForm.comment}
                        onChange={e => setMainForm({ ...mainForm, comment: e.target.value })}
                        className="textarea-field"
                      ></textarea>

                      <button type="submit" className="submit-btn">
                        Post Comment
                      </button>
                    </form>

                    {/* Comments List */}
                    <div className="comments-list">
                      {comments.length === 0 ? (
                        <p className="no-comments">No comments yet. Be the first one!</p>
                      ) : (
                        comments.map(comment => (
                          <CommentItem key={comment._id} comment={comment} />
                        ))
                      )}
                    </div>

                  </div>
                )}
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
                <ul className="space-y-5">
                  {recentPosts.slice(0, 6).map(post => (
                    <li key={post._id}>
                      <Link
                        to={`/blog/${post._id}`}
                        className="text-blue-600 hover:text-purple-600 font-medium hover:underline block"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <ReadySection />
      </div>
    </>
  );
}