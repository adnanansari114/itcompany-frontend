import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import '../../style/Blog.css';
import { ArrowRight, CheckCircle, Zap, Brain, Rocket, Target, ArrowDown } from 'lucide-react';

const steps = [
    {
        number: "1",
        title: "Big Government Initiatives",
        desc: "Programs like Vision 2030 in Saudi Arabia and UAE Vision 2031 are making digital growth a national priority.",
        example: "",
        icon: <Target size={28} />
    },
    {
        number: "2",
        title: "Tech Startups Are Booming",
        desc: "And they need skilled developers yesterday.",
        example: "",
        icon: <Brain size={28} />
    },
    {
        number: "3",
        title: "Remote Work Has Changed Everything",
        desc: "You don’t have to hire locally anymore — global talent is just a call away.",
        example: "",
        icon: <Rocket size={28} />
    }
];

const faqs = [
    { q: "Q: What is an ideal time-to-hire for tech positions?", a: " A: For general IT roles, under 30 days is a strong benchmark. For niche roles, 40-45 days is acceptable with the right staffing partner." },
    { q: "Q: How does partnering with an IT staffing agency help?", a: " A: Staffing agencies have access to pre-vetted candidates and streamlined processes, significantly reducing time-to-hire." },
    { q: "Q: Can I reduce time-to-hire without compromising candidate quality?", a: " A: Yes, by focusing on skills-based assessments, automation, and expert recruiters, you can hire both faster and smarter." }
];

const features = [
    {
        title: "Faster Hiring",
        desc: "No more months-long delays in finding the right developer."
    },
    {
        title: "Cost Control",
        desc: "Only pay for what you need, when you need it."
    },
    {
        title: "Access to Experts",
        desc: "Need a cloud engineer? A React developer? A data scientist? Done."
    },
    {
        title: "Visa & Compliance Support",
        desc: "Many staffing partners handle the paperwork, so you don’t have to."
    }
];

const recentPosts = [
    "Top Technologies Transforming IT Staff Augmentation in 2025",
    "Why IT Staffing Is Booming in the Middle East And How Your Business Can Benefit",
    "How Custom AI Software Is Transforming Industries in 2025",
    "How to Reduce Time-to-Hire for Critical Tech Positions"
];

export default function SubBlogThree() {
    const [openFaq, setOpenFaq] = useState(null);
    const [form, setForm] = useState({
        blogtitle: "How Custom AI Software Is Transforming Industries in 2025",
        name: "",
        email: "",
        website: "",
        comment: ""
    });
    const blog = {
        _id: "64a7f0c2e1b1c8b5f4d2a123",
        title: "How Custom AI Software Is Transforming Industries in 2025"
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/api/comments/add", {
            blogId: blog._id,
            ...form
        });

        alert("Comment submitted!");
        setForm({ name: "", email: "", comment: "" });
    };

    return (
        <>
            <div className='Blogpostdetail'>
                <section className="blog-hero-dark">
                    <div className="hero-bg-overlay"></div>
                    <div className="blog-container">
                        <h1 className="hero-title-dark">
                            Why IT Staffing Is Booming in the Middle East And How Your Business Can Benefit
                        </h1>
                    </div>
                </section>
                <div className="container">
                    <div className="blog-post-content">
                        <section className='left-blog-sec'>
                            <article className="blog-main-layout">
                                <div className="blog-container">

                                    <div className="post-meta-top">
                                        <div className="author-info">
                                            <span className="author-avatar">MJ</span>
                                            <div>
                                                <strong>Murtaza Jawadwala</strong>
                                                <div className="meta-links">
                                                    <span>0 Comments</span> • <span>June 10, 2025</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog-grid-layout">

                                        <div className="blog-content-area">
                                            <h2>Why IT Staffing Is Booming in the Middle East And How Your Business Can Benefit</h2>
                                            <p className="intro-text">
                                                The Middle East is going through a major tech revolution. Countries like the UAE and Saudi Arabia are investing heavily in digital transformation — think smart cities, AI adoption, fintech, and automation. But while the projects are growing, the tech talent pool isn’t keeping up.
                                            </p>
                                            <p className="intro-text">
                                                Whether you’re building an agile product team, scaling your startup, or replacing a key resource, every day a tech seat stays vacant costs time, money, and momentum
                                            </p>
                                            <p className='intro-text'>
                                                In this guide, we’ll show you proven strategies to reduce time-to-hire, streamline your recruitment pipeline, and secure top IT talent before your competitors do.
                                            </p>
                                            <h2>What is Time-to-Hire in Tech Recruitment?</h2>
                                            <p>
                                                Time-to-hire is the number of days between when a candidate applies (or is sourced) and when they accept your offer. It’s a key recruitment metric for HR teams and hiring managers alike.
                                            </p>
                                            <p className='extra-para'>According to industry data:</p>
                                            <li className='extra-para-point'>
                                                The average time-to-hire for IT roles is 42 days, but for niche roles like DevOps engineers, AI/ML experts, or cloud architects, it can take 60+ days.
                                            </li>
                                        </div>
                                    </div>
                                </div>


                            </article>
                            <section className="why-section">
                                <h2>What Makes IT Staffing a Smart Move in the Middle East</h2>

                                <div className="features-grid">
                                    {features.map((item) => (
                                        <div key={item.title} className="feature-card">
                                            <strong>{item.title}:</strong> {item.desc}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="industry-section">
                                <h2>Industry-Wise Impact of Custom AI Software</h2>
                                <div className="industry-grid">
                                    {[
                                        { industry: "Healthcare", title: "Smarter Diagnoses and Streamlined Workflows", challenge: "Overloaded staff, delayed diagnoses, rising administrative costs", solution: "Predictive triage, diagnostic imaging analysis, billing automation", result: "A mid-sized hospital used custom AI to analyze patient data, cutting wait times by 15% and improving diagnostic accuracy by 10%." },
                                        { industry: "Finance", title: "Real-Time Fraud Detection and Personalized Banking", challenge: "Increasing fraud risks, strict compliance standards, demand for personalization", solution: "Real-time fraud alerts, automated compliance checks, customer-specific investment advice", result: "A regional bank implemented custom AI to flag 98% of fraud attempts in milliseconds and boost customer retention by 12% with tailored insights." },
                                        { industry: "Retail", title: "From Inventory to Customer Experience", challenge: "Overstocking, poor demand forecasting, generic shopping experiences", solution: "Demand prediction, dynamic supply chain optimization, personalized product suggestions", result: "An e-commerce brand saw a 20% drop in overstock and a 10% sales lift by using AI to align inventory with customer behavior." },
                                        { industry: "Manufacturing", title: "Predictive Maintenance and Production Optimization", challenge: "Downtime, supply chain delays, rising costs", solution: "Predictive maintenance, optimized scheduling, quality assurance", result: "A production plant deployed AI to monitor machinery, reducing downtime by 25% and saving 15% on operational expenses." }
                                    ].map((item) => (
                                        <div key={item.industry} className="industry-card">
                                            <h3>{item.industry}: {item.title}</h3>
                                            <p className="challenge"><strong>Challenge:</strong> {item.challenge}</p>
                                            <p><strong>AI Solution:</strong> {item.solution}</p>
                                            <p className="result"><strong>Real Example:</strong> {item.result}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>


                            <section className="ai-process-light">
                                <div className="container">
                                    <div className="process-header">
                                        <h2>What’s Driving the Shift?</h2>
                                    </div>

                                    <div className="process-grid">
                                        {steps.map((step, index) => (
                                            <div key={index} className="process-step">
                                                <div className="step-header">
                                                    <div className="step-number">{step.number}</div>
                                                    <div className="step-icon">{step.icon}</div>
                                                </div>

                                                <div className="step-content">
                                                    <h3>{step.title}</h3>
                                                    <p className="step-desc">{step.desc}</p>
                                                    <div className="step-example">
                                                        <strong></strong> {step.example}
                                                    </div>
                                                </div>

                                                {index < steps.length - 1 && (
                                                    <ArrowDown className="step-connector" size={28} />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="barriers-section">
                                <h2>What Roles Are in Demand Right Now?</h2>
                                <div className="barriers-grid">
                                    {[
                                        { title: "", desc: "Frontend and Backend Developers" },
                                        { title: "", desc: "Mobile App Developers (iOS & Android)" },
                                        { title: "", desc: "Cloud Architects and DevOps Engineers" },
                                        { title: "", desc: "Cybersecurity Analysts" }
                                    ].map((item) => (
                                        <div key={item.title} className="barrier-card">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <div className="blog-grid-layout">

                                <div className="blog-content-area">
                                    <h2>How We Support Middle Eastern Businesses</h2>
                                    <p className="intro-text-final">
                                        At The IT Talent, we work with companies across the UAE, Saudi Arabia, Qatar, and beyond. We understand the regional challenges — from language needs to local regulations — and we bring in tech talent that’s ready to deliver.
                                    </p>
                                </div>
                            </div>

                            <section className="faq-section">
                                <h2>Frequently Asked Questions (FAQs)</h2>
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

                        <section className="right-blog-sec">
                            <aside className="blog-sidebar">
                                <div className="sidebar-card">
                                    <h3>Search Blog</h3>
                                    <div className="search-box">
                                        <input type="text" placeholder="Search posts..." />
                                        <button>Search</button>
                                    </div>
                                </div>

                                <div className="sidebar-card">
                                    <h3>Recent Posts</h3>
                                    <ul>
                                        {recentPosts.map((post, i) => (
                                            <li key={i}><Link to="#">{post}</Link></li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="sidebar-card">
                                    <h3>Archives</h3>
                                    <ul>
                                        <li><Link to="#">November 2025</Link></li>
                                        <li><Link to="#">July 2025</Link></li>
                                        <li><Link to="#">June 2025</Link></li>
                                    </ul>
                                </div>
                            </aside>
<div className="comment-area">
                            <h3>Leave a Comment</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="blogname" value={blog.title} readOnly id="" />
                        <input
                            placeholder="Your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />

                        <input
                            placeholder="Your email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                        <input
                            placeholder="Your website"
                            value={form.website}
                            onChange={(e) => setForm({ ...form, website: e.target.value })}
                        />

                        <textarea
                            placeholder="Comment…"
                            value={form.comment}
                            onChange={(e) => setForm({ ...form, comment: e.target.value })}
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>
                    </div>


                        </section>
                    </div>
                    <section className="blog-cta-section">
                        <div className="cta-card">
                            <h3>Let’s Talk Strategy</h3>
                            <p>Wondering if AI is the right move for your business? A quick strategy session can help you find the answer. Whether you’re exploring new ideas or have a specific challenge in mind, The IT Talent is here to support you with insights, expertise, and tailored solutions.</p>
                            <Link to="/contact" className="cta-button">Schedule a Free Strategy Session</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}