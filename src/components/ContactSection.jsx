import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react"; 
import "../style/Home.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
const API = import.meta.env.VITE_APP_API_URL;

const ContactSection = () => {
  const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const socialStats = [
        { icon: FaLinkedin, title: "LinkedIn", stat: "5K+", desc: "Professional Connections", link: "#" },
        { icon: FaInstagram, title: "Instagram", stat: "12K+", desc: "Creative Updates", link: "#" },
        { icon: FaFacebookF, title: "Facebook", stat: "8K+", desc: "Community Engagement", link: "#" },
      ];
    
      const locations = [
        { icon: FaMapMarkerAlt, country: "India (HQ)", address: "1st Floor, Pramukh Plaza, Vijay Nagar, Indore, MP 452010", phone: "+91 91543 64386" },
        { icon: FaMapMarkerAlt, country: "USA", address: "2200 Kraft Drive #1050, Blacksburg, VA 24060", phone: "+1 425 543 7777" },
        { icon: FaMapMarkerAlt, country: "Singapore", address: "08-72 Midview City, 22 Sin Ming Lane, Singapore", phone: "+65 9715 4554" },
      ];

      


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
          const res = await fetch(`${API}/api/contact`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: form.name,
              email: form.email,
              phone: form.phone,
              company: form.company,
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
    <div className="container">
      <section className="contact-grid-section">
        <div className="contact-grid">
          <div className="contact-card contact-info" aria-label="Contact information">
            <h3 id="contact-heading">YOU ARE HERE</h3>
            <h2 id="contact-heading2">Let's Start</h2>
            <p>Initiating Your Journey to Success and Growth</p>
            <div className="contact-infos">
              <div className="info-items">
                <div className="icon-circle">
                  <Phone size={24} />
                </div>
                <a href="tel:+919154364386" className="info-text">
                  +91 91543 64386
                </a>
              </div>

              <div className="info-items">
                <div className="icon-circle">
                  <Mail size={24} />
                </div>
                <a href="mailto:contact@theittalent.com" className="info-text">
                  contact@theittalent.com
                </a>
              </div>

              <div className="info-items">
                <div className="icon-circle">
                  <MapPin size={24} />
                </div>
                <span className="info-text">Indore, (M.P) India</span>
              </div>
            </div>

            <div className="steps-section">
              <div className="step">
                <div className="step-numbers">01</div>
                <span>Share your requirements</span>
                <div className="arrow">→</div>
              </div>
              <div className="step">
                <div className="step-numbers">02</div>
                <span>Discuss with our experts</span>
                <div className="arrow">→</div>
              </div>
              <div className="step">
                <div className="step-numbers">03</div>
                <span>Get a free quote</span>
                <div className="arrow">→</div>
              </div>
              <div className="step last">
                <div className="step-numbers">04</div>
                <span>Start the project</span>
              </div>
            </div>
            <div className="divider" />
          </div>

          <form id="contact-card" className="contact-card contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
            <h3>LET'S CONNECT!</h3>
            <h2>Send us a message, and we'll promptly get in touch to discuss your project.</h2>

            <div className="two-col">
              <label className="label">
                <span className="label-text">Your name</span>
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
                <span className="label-text">Your Email</span>
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
                <span className="label-text">Your Phone Number*</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 00000"
                />
              </label>
              <label className="label">
                <span className="label-text">Your Company Name</span>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </label>
            </div>

            <label className="label">
              <span className="label-text">How can we help you?</span>
              <textarea
                name="message"
                rows="5"
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
              <button type="submit" className="contact-primary" disabled={sending} aria-busy={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>
              <button type="button" className="contact-secondary" onClick={() => {
                setForm({ name: "", email: "", phone: "", company: "", message: "" });
                window.grecaptcha?.reset();
              }}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;