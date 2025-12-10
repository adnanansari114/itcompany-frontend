import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Home.css";
import SEO from './SEO';
import TechnologiesSection from "./TechnologiesSection";
import { Phone, Mail, MapPin } from 'lucide-react';
import ReadySection from "./ReadySection";
import ServicesSlider from "./ServicesSlider";
import GalleryStats from "./GalleryStats";

const cards = [
    { id: 1, link: "/artifiacialintelligence", title: "Artificial Intelligence", slug: "artifiacialintelligence", para: "Revolutionize your business with AI and machine learning solutions. Deploy intelligent systems that drive operational efficiency, deliver predictive insights, and automate critical processes.", img: "/images/gallery1.jpg" },
    { id: 2, link: "/dataengineering", title: "Data Engineering", slug: "dataengineering", para: "Harness the power of your data. Our data engineering experts build scalable, analytics-ready pipelines that support advanced data strategies and business intelligence.", img: "/images/gallery2.jpg" },
    { id: 3, link: "/clouddevops", title: "Cloud Engineering & DevOps", slug: "clouddevops", para: "Accelerate your development lifecycle with our DevOps and cloud expertise. We create efficient CI/CD pipelines, scalable cloud architectures, and automated workflows.", img: "/images/gallery3.jpg" },
    { id: 4, link: "/webappdevelopment", title: "Web & App Development", slug: "webappdevelopment", para: "Build custom web applications and mobile solutions tailored to your business needs. From frontend to backend, we deliver high-quality, performant, and secure software.", img: "/images/gallery4.jpg" },
    { id: 5, link: "/staff-augmentation", title: "Staff Augmentation", slug: "staff-augmentation", para: "Scale your team quickly with pre-vetted IT professionals. Whether you need developers, designers, or engineers, we provide talent that integrates seamlessly with your team.", img: "/images/gallery5.jpg" },
    { id: 6, link: "/maintenanceSupport", title: "Maintenance & Support", slug: "maintenanceSupport", para: "Keep your systems running smoothly. Our team offers ongoing maintenance, bug fixes, performance optimization, and technical support to ensure long-term reliability." }
];

export default function Home() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        userLocation: "",
        companyLocation: "",
        company: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const duplicatedCards = [...cards, ...cards];

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required.";
        if (!form.email.trim()) errs.email = "Email is required.";
        else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email.";
        if (!form.message.trim() || form.message.length < 10)
            errs.message = "Please write at least 10 characters.";
        return errs;
    };

    const handleReadMoreClick = (slug) => {
        navigate(`/${slug}`);
    }

    const handleChange = (e) => {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
        setErrors((s) => ({ ...s, [e.target.name]: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess("");

        const recaptchaValue = window.grecaptcha?.getResponse();
        if (!recaptchaValue) {
            setErrors({ captcha: "Please verify that you are not a robot." });
            return;
        }

        const v = validate();
        if (Object.keys(v).length) {
            setErrors(v);
            return;
        }

        setSending(true);
        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    phone: form.phone,
                    company: form.company,
                    userLocation: form.userLocation,
                    companyLocation: form.companyLocation,
                    message: form.message,
                    "g-recaptcha-response": recaptchaValue,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("Message sent. We will contact you shortly.");
                setForm({ name: "", email: "", phone: "", company: "", message: "" });
                window.grecaptcha.reset();
            } else {
                setErrors({ submit: data.message || "Failed to send message." });
                window.grecaptcha.reset();
            }
        } catch (err) {
            setErrors({ submit: "Failed to send. Try again later." });
            window.grecaptcha.reset();
        } finally {
            setSending(false);
        }
    };

    return (
        <div>
            <SEO
                title="IT Talent"
                description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
                canonicalUrl="https://www.theittalent.com/"
            />
            <ServicesSlider />
            <GalleryStats />
            <TechnologiesSection />

            <div className="container">
                <section className="contact-grid">
                    <div id="left-contact" className="contact-card contact-info" aria-label="Contact information">
                        <h3 id="contact-heading">YOU ARE HERE</h3>
                        <h2 id="contact-heading2">Let's Start</h2>
                        <p id="contact-para">Initiating Your Journey to Success and Growth</p>
                        <div className="contact-infos">
                            <div className="info-items">
                                <div className="icon-circle">
                                    <Phone size={20} />
                                </div>
                                <a href="tel:+919154364386" className="info-text">
                                    +91 91543 64386
                                </a>
                            </div>

                            <div className="info-items">
                                <div className="icon-circle">
                                    <Mail size={20} />
                                </div>
                                <a href="mailto:contact@theittalent.com" className="info-text">
                                    contact@theittalent.com
                                </a>
                            </div>

                            <div className="info-items">
                                <div className="icon-circle">
                                    <MapPin size={20} />
                                </div>
                                <span className="info-text">Indore, (M.P) India</span>
                            </div>
                        </div>
                        <div className="divider" />
                    </div>
                    <form id="contact-card" className="contact-card contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                        <h3>LET'S CONNECT!</h3>
                        <h2>Send us a message, and we'll promptly get in touch to discuss your project.</h2>

                        <div className="two-col">
                            <label className="label">
                                {/* <span className="label-text">Your name</span> */}
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "error-name" : undefined}
                                />
                                {errors.name && <div id="error-name" className="field-error">{errors.name}</div>}
                            </label>
                            <label className="label">
                                {/* <span className="label-text">Your Email</span> */}
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@domain.com"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "error-email" : undefined}
                                />
                                {errors.email && <div id="error-email" className="field-error">{errors.email}</div>}
                            </label>
                        </div>

                        <div className="two-col">
                            <label className="label">
                                {/* <span className="label-text">Your Phone Number*</span> */}
                                <input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91 90000 00000"
                                />
                            </label>
                            <label className="label">
                                {/* <span className="label-text">Your Company Name</span> */}
                                <input
                                    name="company"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Your company name"
                                />
                            </label>
                        </div>

                        <div className="two-col">
                            <label className="label">
                                {/* <span className="label-text">Your Phone Number*</span> */}
                                <input
                                    name="userLocation"
                                    value={form.userLocation}
                                    onChange={handleChange}
                                    placeholder="Your Current Location"
                                />
                            </label>
                            <label className="label">
                                {/* <span className="label-text">Your Company Name</span> */}
                                <input
                                    name="companyLocation"
                                    value={form.companyLocation}
                                    onChange={handleChange}
                                    placeholder="Company Location"
                                />
                            </label>
                        </div>

                        <label className="label">
                            {/* <span className="label-text">How can we help you?</span> */}
                            <textarea
                                name="message"
                                rows="3"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                aria-invalid={!!errors.message}
                                aria-describedby={errors.message ? "error-message" : undefined}
                            />
                            {errors.message && <div id="error-message" className="field-error">{errors.message}</div>}
                        </label>

                        {errors.submit && <div className="form-error">{errors.submit}</div>}
                        {success && <div className="form-success" role="status">{success}</div>}
                        <div className="recaptcha-container">
                            <div
                                className="g-recaptcha"
                                data-sitekey="6Le7NBksAAAAALf03wDLfC6VYpCF9_Gj-30cW3MQ"
                                style={{ display: "inline-block" }}
                            ></div>
                            {errors.captcha && <div className="field-error">{errors.captcha}</div>}
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn" disabled={sending} aria-busy={sending}>
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                            {/* <button type="button" className="btn btn-secondary" onClick={() => setForm({ name: "", email: "", phone: "", message: "" })
                        }> */}
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                setForm({ name: "", email: "", phone: "", company: "", message: "" });
                                window.grecaptcha?.reset();
                            }}>
                                Reset
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <ReadySection />

        </div>
    );
}
