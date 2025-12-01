import React from 'react';
import '../style/components.css';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-grid">
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-icon">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-icon">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/service">Services</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/Careers">Career</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Artificial Intelligence</a></li>
                <li><a href="#">Data Engineering</a></li>
                <li><a href="#">Cloud Engineering & DevOps</a></li>
                <li><a href="#">Web & App Development</a></li>
                <li><a href="#">Staff Augmentation</a></li>
                <li><a href="#">Maintenance & Support</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-copyright">
            <p>&copy; 2025 The IT Talent. All rights reserved. | Talent | Technology | Transformation</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;