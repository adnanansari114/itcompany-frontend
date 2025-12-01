import React, { useState, useEffect } from "react";
import "../style/Contact.css";
import ContactSection from "../components/ContactSection";
import ReadySection from "../components/ReadySection";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {

  const socialStats = [
      { icon: FaLinkedin, title: "LinkedIn", stat: "2K+", desc: "Professional Connections", link: "#" },
      { icon: FaInstagram, title: "Instagram", stat: "12K+", desc: "Creative Updates", link: "#" },
      { icon: FaFacebookF, title: "Facebook", stat: "8K+", desc: "Community Engagement", link: "#" },
    ];
  
    const locations = [
      { icon: FaMapMarkerAlt, country: "India (HQ)", address: "Indore M.P.", phone: "+91 91543 64386" },
      { icon: FaMapMarkerAlt, country: "USA", address: "Chicago", phone: "+1 425 543 7777" },
      { icon: FaMapMarkerAlt, country: "UAE", address: "Abu Dhabi", phone: "+65 9715 4554" },
    ];

  return (
    <div className="contact-page" aria-labelledby="contact-heading">
      <div className="contact-container">
      <section className="contact-banner">
        <div className="contact-overlay"></div>
        <div className="contact-content">
          <h2>GET IN TOUCH</h2>
          <p>
            Questions about our services or want to get a quote? Fill the form or
            reach us via phone / email.
          </p>
        </div>
      </section>

      <section>
        <div className="social-grid">
          {socialStats.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="social-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
              >
                <Icon className="social-icon" size={40} />
                <h3>{item.title}</h3>
                <p className="stat">{item.stat}</p>
                <p className="desc">{item.desc}</p>
                <a href={item.link} className="card-link">Follow Us</a>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ContactSection />

      <section className="map-section">
        <div className="map-card">
          <iframe
            title="office-location"
            src="https://www.google.com/maps?q=indore&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section>
        <div className="locations-section">
        <div className="container">
          <h2 className="section-title">Our Locations</h2>
          <p className="section-desc">We are expanding globally – offices in key locations for seamless collaboration.</p>
          <div className="locations-grid">
            {locations.map((loc, i) => {
              const Icon = loc.icon;
              return (
                <motion.div
                  key={i}
                  className="location-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Icon className="location-icon" size={24} />
                  <h3>{loc.country}</h3>
                  <p className="address">{loc.address}</p>
                  <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="phone-link">
                    <FaPhone size={16} /> {loc.phone}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      </section>
      

      <ReadySection />
      </div>
    </div>
  );
} 