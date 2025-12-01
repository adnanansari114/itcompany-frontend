import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../style/Blog.css';
import axios from 'axios';
import { ArrowRight, CheckCircle, Zap, Brain, Rocket, Target, ArrowDown } from 'lucide-react';
const API = import.meta.env.VITE_APP_API_URL;

const steps = [
    {
        number: "1",
        title: "Discovery & Strategy",
        desc: "Every AI journey starts with understanding your business goals and technical environment.",
        example: "For a healthcare partner, identifying pain points in scheduling led to an AI-based prioritization system.",
        icon: <Target size={28} />
    },
    {
        number: "2",
        title: "Custom Development",
        desc: "Engineers build AI models using Python-based frameworks, tailoring them to your data and business processes.",
        example: "For a retail platform, a recommendation engine increased conversions through real-time personalization.",
        icon: <Brain size={28} />
    },
    {
        number: "3",
        title: "Seamless Deployment",
        desc: "AI systems are integrated with minimal disruption to business operations.",
        example: "A finance client rolled out a fraud detection AI system with zero downtime.",
        icon: <Rocket size={28} />
    },
    {
        number: "4",
        title: "Training and Support",
        desc: "Once deployed, teams receive hands-on training to use and scale the AI solution effectively.",
        example: "A manufacturing team shortened adoption time by 30% with on-site training.",
        icon: <Zap size={28} />
    },
    {
        number: "5",
        title: "Continuous Optimization",
        desc: "Performance is monitored and improved using data-driven feedback loops.",
        example: "An AI diagnostic tool was optimized post-deployment, boosting its accuracy by an additional 5%.",
        icon: <CheckCircle size={28} />
    }
];

const features = [
    {
        title: "Precision",
        desc: "Custom AI models give output tailored exactly to your business rules."
    },
    {
        title: "Integration",
        desc: "It seamlessly connects with your existing tools and workflows."
    },
    {
        title: "Scalability",
        desc: "Your AI system grows as your user base and data grow."
    },
    {
        title: "Competitive Advantage",
        desc: "You get unique AI capabilities that your competitors cannot copy."
    }
];


const faqs = [
    { q: "What's the difference between custom AI and off-the-shelf tools?", a: "Custom AI is built for your processes. Off-the-shelf tools are built for mass use and may not align with your needs." },
    { q: "Can small or mid-sized businesses afford custom AI?", a: "Yes. Many companies start with a single use case and scale as ROI becomes clear." },
    { q: "Is my data safe with custom AI solutions?", a: "Absolutely. With strong security measures and compliance protocols, sensitive information is protected." }
];

const recentPosts = [
    "Top Technologies Transforming IT Staff Augmentation in 2025",
    "Why IT Staffing Is Booming in the Middle East And How Your Business Can Benefit",
    "How Custom AI Software Is Transforming Industries in 2025",
    "How to Reduce Time-to-Hire for Critical Tech Positions"
];

export default function SubBlog() {
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

        await axios.post(`${API}/api/comments/add`, {
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
                            How Custom AI Software Is Transforming Industries in 2025
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
                                            <h2>How Custom AI Software Is Transforming Industries in 2025</h2>
                                            <p className="intro-text">
                                                Imagine reducing operational costs by 20%, improving customer satisfaction, and staying ahead of the competition—all through one smart investment. In 2025, custom AI software has moved from optional to essential. Unlike one-size-fits-all tools, custom AI is built specifically for your industry, solving the challenges that off-the-shelf solutions can’t.
                                            </p>
                                            <p className="intro-text">
                                                Whether it’s streamlining patient care, predicting fraud, or automating factory operations, tailor-made AI is changing the way we work. This blog explores how AI software is being customized for real-world use cases across sectors like healthcare, finance, retail, and manufacturing—and how companies are getting it right.
                                            </p>

                                            <h2>What Is Custom AI Software?</h2>
                                            <p>
                                                Custom AI software refers to artificial intelligence systems designed for specific business needs rather than general-purpose tasks. These solutions are often built using frameworks like TensorFlow or PyTorch and are integrated with existing IT infrastructure (like ERP, CRM, or EHR platforms) to automate, analyze, or predict more effectively.
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </article>
                            <section className="why-section">
                                <h2>Why Are Businesses Choosing Custom AI Over Generic Tools?</h2>

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
                                        <h2>How Our AI Development Process Works</h2>
                                        <p className="process-subtitle">
                                            A proven 5-step journey from idea to impact — transparent, collaborative, and built for long-term success
                                        </p>
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
                                                        <strong>Real Example:</strong> {step.example}
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
                                <h2>Common Barriers and How to Overcome Them</h2>
                                <div className="barriers-grid">
                                    {[
                                        { title: "Cost Concerns", desc: "Start small with pilot programs that prove ROI before scaling up. Most projects pay for themselves within 6–12 months." },
                                        { title: "Data Quality", desc: "AI is only as good as the data it learns from. Pre-project data cleansing ensures better outcomes." },
                                        { title: "Ethical & Legal Issues", desc: "Compliance with laws like the EU AI Act is baked into development. Ethical guidelines are followed for fairness and transparency." },
                                        { title: "Skill Gaps", desc: "Access to experienced AI talent through dedicated staffing ensures successful implementation and growth." }
                                    ].map((item) => (
                                        <div key={item.title} className="barrier-card">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="future-vision">
                                <h2>What’s Next for Custom AI in 2025 and Beyond?</h2>
                                <div className="vision-items">
                                    <div className="vision-item">
                                        <strong>Autonomous Systems</strong>
                                        <p>AI will run IT operations, detect system issues, and auto-correct in real-time.</p>
                                    </div>
                                    <div className="vision-item">
                                        <strong>Sustainability</strong>
                                        <p>Green AI models are reducing energy usage while maintaining performance.</p>
                                    </div>
                                    <div className="vision-item">
                                        <strong>Multimodal Intelligence</strong>
                                        <p>Future solutions will combine text, image, and voice data for richer analysis — think analyzing product reviews, videos, and support chats in one place.</p>
                                    </div>
                                </div>
                            </section>



                            {/* FAQ */}
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
                        </section>
                    </div>

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