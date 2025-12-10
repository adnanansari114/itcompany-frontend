import React, { useState, useEffect } from "react";
import "../style/Contact.css";
import ContactSection from "../components/ContactSection";
import ReadySection from "../components/ReadySection";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SocialSection from "../components/SocialSection";
import LocationSection from "../components/LocationSection";
import SEO from "../components/SEO";

export default function Contact() {

  const socialStats = [
    { icon: FaLinkedin, title: "LinkedIn", stat: "2K+", desc: "Professional Connections", link: "https://linkedin.com/company/theittalents/" },
    { icon: FaInstagram, title: "Instagram", stat: "12K+", desc: "Creative Updates", link: "https://www.instagram.com/theittalent?igsh=eWxkYm9xNmVodHZj" },
    { icon: FaFacebookF, title: "Facebook", stat: "8K+", desc: "Community Engagement", link: "https://www.facebook.com/profile.php?id=61572628922020" },
  ];

  const locations = [
    { icon: FaMapMarkerAlt, country: "India (HQ)", address: "Indore M.P.", phone: "+91 91543 64386" },
    // { icon: FaMapMarkerAlt, country: "USA", address: "Chicago", phone: "+1 425 543 7777" },
    { icon: FaMapMarkerAlt, country: "UAE", address: "Al Khaleej St - Al Corniche - Deira - Dubai", phone: "+971 54 750 9138" },
  ];

  return (
    <>
      <SEO
        title="Contact The IT Talent for IT Staffing & Software Services"
        description="Get in touch with The IT Talent team for queries regarding custom software development, IT staff augmentation, or technical consultation."
        canonicalUrl="https://www.theittalent.com/contact"
      />
      <div className="contact-page" aria-labelledby="contact-heading">
        <div className="contact-container">
          <section className="contact-banner">
      <video autoPlay muted loop className="contact-video">
        <source src="./images/contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contact-overlay"></div>
      <div className="contact-content fade-contact">
        <h2>GET IN TOUCH</h2>
        <p>
          Questions about our services or want to get a quote? Fill the form or
          reach us via phone / email.
        </p>
      </div>
    </section>

          <SocialSection />

          <ContactSection />

          <LocationSection />

          <ReadySection />
        </div>
      </div>
    </>
  );
} 