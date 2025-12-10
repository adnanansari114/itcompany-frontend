// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import '../../style/About.css';
// import ReadySection from '../../components/ReadySection';
// import SEO from '../../components/SEO';

// const blogPosts = [
//   {
//     id: 1,
//     title: "How Custom AI Software Is Transforming Industries in 2025",
//     excerpt: "",
//     author: "Murtaza Ali",
//     role: "Founder & CEO",
//     date: "November 20, 2025",
//     readTime: "8 min read",
//     category: "AI & Future",
//     featured: true,
//     link: "/subblog",
//     image: "/images/Banner1.jpg"
//   },
//   {
//     id: 2,
//     title: "How to Reduce Time-To-Hire for Critical Tech Positions",
//     excerpt: "",
//     author: "Murtaza Ali",
//     role: "Chief Technology Officer",
//     date: "May 28, 2025",
//     readTime: "6 min read",
//     category: "Hiring Strategy",
//     featured: false,
//     link: "/subblogtwo"
//   },
//   {
//     id: 3,
//     title: "Why IT Staffing is Booming in the Middle East and How Your",
//     excerpt: "",
//     author: "Murtaza Ali",
//     role: "Founder & CEO",
//     date: "November 10, 2025",
//     readTime: "10 min read",
//     category: "Industry Insights",
//     featured: false,
//     link: "/subblogthree"
//   }
// ];

// export default function BlogPage() {
//   const featuredPost = blogPosts.find(post => post.featured);
//   const regularPosts = blogPosts.filter(post => !post.featured);

//   return (
//     <>
//       <SEO
//         title="Insights & Trends in IT, Software & Digital Transformation"
//         description="Read the latest articles and expert insights on web development trends, data engineering best practices, cloud technology, and AI innovation."
//         canonicalUrl="https://www.theittalent.com/blogpage"
//       />
//       <section className="blog-hero">
//         <div className="blog-hero-content">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="blog-badge">Insights & Ideas</span>
//             <h1 className="blog-title">
//               The IT Talent <span className="gradient-highlight">Blog</span>
//             </h1>
//             <p className="blog-subtitle">
//               Latest thinking on IT staffing, remote teams, emerging technologies, and building world-class engineering organizations.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {featuredPost && (
//         <section className="featured-section">
//           <div className="featured-container">
//             <motion.div
//               className="featured-card"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//             >
//               <div className="featured-image-wrapper">
//                 <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
//                 <div className="featured-badge">Featured</div>
//               </div>
//               <div className="featured-content">
//                 <span className="post-category">{featuredPost.category}</span>
//                 <h2 className="featured-title">{featuredPost.title}</h2>
//                 <p className="featured-excerpt">{featuredPost.excerpt}</p>
//                 <div className="post-meta">
//                   <div className="author-info">
//                     <div className="author-avatar">MA</div>
//                     <div>
//                       <p className="author-name">{featuredPost.author}</p>
//                       <p className="author-role">{featuredPost.role}</p>
//                     </div>
//                   </div>
//                   <div className="post-details">
//                     <span>{featuredPost.date}</span>
//                     <span>•</span>
//                     only
//                     <span>{featuredPost.readTime}</span>
//                   </div>
//                   <div className="read-more-btn">
//                     <Link to="/subblog" >
//                       Read Article →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* All Posts Grid */}
//       <section className="posts-section">
//         <div className="posts-container">
//           <h2 className="section-heading">Latest Articles</h2>
//           <div className="posts-grid">
//             {regularPosts.map((post, index) => (
//               <motion.article
//                 key={post.id}
//                 className="post-card"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="post-thumbnail">
//                   <div className="placeholder-image">
//                     <span>{post.title.charAt(0)}</span>
//                   </div>
//                 </div>
//                 <div className="post-content">
//                   <span className="post-category-sm">{post.category}</span>
//                   <h3 className="post-title-sm">{post.title}</h3>
//                   <p className="post-excerpt-sm">{post.excerpt}</p>
//                   <div className="post-meta-sm">
//                     <span>{post.date}</span>
//                     <span>•</span>
//                     <span>{post.readTime}</span>
//                   </div>
//                   <div className="read-more-btns">
//                     <Link to={post.link} >
//                       Read Article →
//                     </Link>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>
//       <ReadySection />
//     </>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import '../../style/About.css';
// import ReadySection from '../../components/ReadySection';
// import SEO from '../../components/SEO';
// import axios from 'axios';

// const API = import.meta.env.VITE_APP_API_URL;

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${API}/api/blogs`);
//         // Sort by latest first
//         const sortedBlogs = res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//         setBlogs(sortedBlogs);
//       } catch (err) {
//         setError("Failed to load blogs. Please try again later.");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   // First blog as featured (latest one)
//   const featuredPost = blogs[0];
//   const regularPosts = blogs.slice(1);

//   if (loading) {
//     return <div style={{ padding: "100px", textAlign: "center" }}>Loading blogs...</div>;
//   }

//   if (error) {
//     return <div style={{ padding: "100px", textAlign: "center", color: "red" }}>{error}</div>;
//   }

//   return (
//     <>
//       <SEO
//         title="Insights & Trends in IT, Software & Digital Transformation"
//         description="Read the latest articles on AI, software development, remote teams, and tech hiring from The IT Talent."
//         canonicalUrl="https://www.theittalent.com/blog"
//       />

//       <section className="blog-hero">
//         <div className="blog-hero-content">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="blog-badge">Insights & Ideas</span>
//             <h1 className="blog-title">
//               The IT Talent <span className="gradient-highlight">Blog</span>
//             </h1>
//             <p className="blog-subtitle">
//               Latest thinking on IT staffing, remote teams, emerging technologies, and building world-class engineering organizations.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Blog */}
//       {featuredPost && (
//         <section className="featured-section">
//           <div className="featured-container">
//             <motion.div
//               className="featured-card"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//             >
//               <div className="featured-image-wrapper">
//                 <div className="featured-placeholder">
//                   <span>{featuredPost.title.charAt(0)}</span>
//                 </div>
//                 <div className="featured-badge">Featured</div>
//               </div>
//               <div className="featured-content">
//                 <span className="post-category">Latest Article</span>
//                 <h2 className="featured-title">{featuredPost.title}</h2>
//                 <p className="featured-excerpt">
//                   {featuredPost.heading1 || "Click to read the full article..."}
//                 </p>
//                 <div className="post-meta">
//                   <div className="author-info">
//                     <div className="author-avatar">IT</div>
//                     <div>
//                       <p className="author-name">The IT Talent Team</p>
//                       <p className="author-role">Expert Insights</p>
//                     </div>
//                   </div>
//                   <div className="post-details">
//                     <span>{new Date(featuredPost.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
//                     <span>•</span>
//                     <span>8 min read</span>
//                   </div>
//                   <div className="read-more-btn">
//                     <Link to={`/blog/${featuredPost._id}`}>
//                       Read Article →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       )}

//       {/* All Other Blogs */}
//       <section className="posts-section">
//         <div className="posts-container">
//           <h2 className="section-heading">All Articles</h2>
//           {regularPosts.length === 0 ? (
//             <p style={{ textAlign: "center", padding: "50px", color: "#666" }}>
//               No blogs published yet. Stay tuned!
//             </p>
//           ) : (
//             <div className="posts-grid">
//               {regularPosts.map((post, index) => (
//                 <motion.article
//                   key={post._id}
//                   className="post-card"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   whileHover={{ y: -10 }}
//                 >
//                   <div className="post-thumbnail">
//                     <div className="placeholder-image">
//                       <span>{post.title.charAt(0)}</span>
//                     </div>
//                   </div>
//                   <div className="post-content">
//                     <h3 className="post-title-sm">{post.title}</h3>
//                     <p className="post-excerpt-sm">
//                       {post.heading1 || "Click to read more..."}
//                     </p>
//                     <div className="post-meta-sm">
//                       <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//                     </div>
//                     <div className="read-more-btns">
//                       <Link to={`/blog/${post._id}`}>
//                         Read Article →
//                       </Link>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       <ReadySection />
//     </>
//   );
// }





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

      <ReadySection />
    </>
  );
}
