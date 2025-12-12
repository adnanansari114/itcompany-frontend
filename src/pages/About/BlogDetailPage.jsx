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

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);

  const [mainForm, setMainForm] = useState({ name: "", email: "", website: "", comment: "" });
  const [replyForms, setReplyForms] = useState({});
  const [replyNames, setReplyNames] = useState({});

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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`${API}/api/comments/blog/${id}`);
        setComments(res.data || []);
      } catch (err) {
        console.error("Comments load failed:", err);
      }
    };
    if (id) fetchComments();
  }, [id]);  

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

  if (loading) return <div className="text-center py-32 text-2xl">Loading article...</div>;
  if (error || !blog) return (
    <div className="text-center py-32">
      <h2 className="text-3xl text-red-600 mb-4">Blog not found</h2>
      <Link to="/blog" className="text-blue-600 underline">Back to Blogs</Link>
    </div>
  );

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
              {new Date(comment.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <p className="text-gray-800 leading-relaxed mt-2">{comment.comment}</p>
          <button onClick={() => setReplyingTo(comment._id)} className="mt-3 text-sm font-medium text-blue-600 hover:underline">
            Reply
          </button>
          {replyingTo === comment._id && (
            <div className="mt-6 ml-10 p-5 bg-gray-50 rounded-2xl border">
              <input type="text" placeholder="Your name *" className="w-full border rounded-lg px-4 py-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={replyNames[comment._id] || ""} onChange={(e) => setReplyNames({ ...replyNames, [comment._id]: e.target.value })} />
              <textarea placeholder="Write a reply..." rows="3" className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={replyForms[comment._id] || ""} onChange={(e) => setReplyForms({ ...replyForms, [comment._id]: e.target.value })} />
              <div className="mt-4 flex gap-3">
                <button onClick={() => handleReply(comment._id)} className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition">Post Reply</button>
                <button onClick={() => setReplyingTo(null)} className="text-gray-600 hover:text-black">Cancel</button>
              </div>
            </div>
          )}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-8 ml-12 space-y-6 border-l-2 border-gray-200 pl-6">
              {comment.replies.map(reply => <CommentItem key={reply._id} comment={reply} />)}
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

                {blog.image ? (
                  <div className="featured-image-container mb-12 mt-8 relative z-10">
                    <img
                      src={blog.image}
                      alt={blog.title || "Blog image"}
                      className="w-full max-h-96 object-cover rounded-2xl shadow-2xl"
                      loading="lazy"
                      onError={(e) => {
                        console.error("Image failed to load:", blog.image); 
                        e.target.src = "/fallback-image.jpg";
                        e.target.alt = "Image not available";
                      }}
                    />
                  </div>
                ) : (
                  <div className="featured-image-container mb-12 -mt-8 bg-gray-100 rounded-2xl h-96 flex items-center justify-center text-gray-500">
                    <p>No featured image available</p>
                  </div>
                )}

                <div className="prose prose-lg max-w-none text-gray-700">
                  {blog.heading1 && <h2 className="text-4xl font-bold mt-8 mb-6">{blog.heading1}</h2>}
                  {blog.paragraphs1?.map((para, i) => (
                    <p key={i} className="text-lg leading-8 mb-6">{para}</p>
                  ))}
                </div>
              </article>

              <div className="comments-section mt-16">
                <button onClick={() => setShowComments(!showComments)} className="comments-toggle-btn">
                  {comments.length} Comments
                  <span className="arrow-icon">{showComments ? '↑' : '↓'}</span>
                </button>

                {showComments && (
                  <div className="comments-wrapper">
                    <form onSubmit={handleMainComment} className="comment-form">
                      <h3 className="form-title">Add a Comment</h3>
                      <div className="form-row">
                        <input type="text" placeholder="Your name *" required value={mainForm.name}
                          onChange={e => setMainForm({ ...mainForm, name: e.target.value })} className="input-field" />
                        <input type="email" placeholder="Your email * (won't be shown)" required value={mainForm.email}
                          onChange={e => setMainForm({ ...mainForm, email: e.target.value })} className="input-field" />
                      </div>
                      <input type="text" placeholder="Website (optional)" value={mainForm.website}
                        onChange={e => setMainForm({ ...mainForm, website: e.target.value })} className="input-field full-width" />
                      <textarea placeholder="Write your comment here..." rows="6" required value={mainForm.comment}
                        onChange={e => setMainForm({ ...mainForm, comment: e.target.value })} className="textarea-field"></textarea>
                      <button type="submit" className="submit-btn">Post Comment</button>
                    </form>

                    <div className="comments-list">
                      {comments.length === 0 ? (
                        <p className="no-comments">No comments yet. Be the first one!</p>
                      ) : (
                        comments.map(comment => <CommentItem key={comment._id} comment={comment} />)
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
                <ul className="space-y-5">
                  {recentPosts.slice(0, 6).map(post => (
                    <li key={post._id}>
                      <Link to={`/blog/${post._id}`} className="text-blue-600 hover:text-purple-600 font-medium hover:underline block">
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