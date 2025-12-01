import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../style/About.css';
import ReadySection from '../../components/ReadySection';

const blogPosts = [
  {
    id: 1,
    title: "How Custom AI Software Is Transforming Industries in 2025",
    excerpt: "",
    author: "Murtaza Ali",
    role: "Founder & CEO",
    date: "November 20, 2025",
    readTime: "8 min read",
    category: "AI & Future",
    featured: true,
    link: "/subblog",
    image: "/images/Banner1.jpg"
  },
  {
    id: 2,
    title: "How to Reduce Time-To-Hire for Critical Tech Positions",
    excerpt: "",
    author: "Murtaza Ali",
    role: "Chief Technology Officer",
    date: "May 28, 2025",
    readTime: "6 min read",
    category: "Hiring Strategy",
    featured: false,
    link: "/subblogtwo"
  },
  {
    id: 3,
    title: "Why IT Staffing is Booming in the Middle East and How Your",
    excerpt: "",
    author: "Murtaza Ali",
    role: "Founder & CEO",
    date: "November 10, 2025",
    readTime: "10 min read",
    category: "Industry Insights",
    featured: false,
    link: "/subblogthree"
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <section className="blog-hero">
        <div className="blog-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="blog-badge">Insights & Ideas</span>
            <h1 className="blog-title">
              The IT Talent <span className="gradient-highlight">Blog</span>
            </h1>
            <p className="blog-subtitle">
              Latest thinking on IT staffing, remote teams, emerging technologies, and building world-class engineering organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {featuredPost && (
        <section className="featured-section">
          <div className="featured-container">
            <motion.div
              className="featured-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="featured-image-wrapper">
                <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
                <div className="featured-badge">Featured</div>
              </div>
              <div className="featured-content">
                <span className="post-category">{featuredPost.category}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <div className="author-info">
                    <div className="author-avatar">MA</div>
                    <div>
                      <p className="author-name">{featuredPost.author}</p>
                      <p className="author-role">{featuredPost.role}</p>
                    </div>
                  </div>
                  <div className="post-details">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    only
                    <span>{featuredPost.readTime}</span>
                  </div>
                <div className="read-more-btn">
                    <Link to="/subblog" >
                      Read Article →
                </Link>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="posts-section">
        <div className="posts-container">
          <h2 className="section-heading">Latest Articles</h2>
          <div className="posts-grid">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="post-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="post-thumbnail">
                  <div className="placeholder-image">
                    <span>{post.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="post-content">
                  <span className="post-category-sm">{post.category}</span>
                  <h3 className="post-title-sm">{post.title}</h3>
                  <p className="post-excerpt-sm">{post.excerpt}</p>
                  <div className="post-meta-sm">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="read-more-btns">
                    <Link to={post.link} >
                      Read Article →
                </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <ReadySection />
    </>
  );
}