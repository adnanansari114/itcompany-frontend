import React from 'react';
import '../style/components.css';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import SEO from './SEO';

const Footer = () => {
  return (
    <>
      <SEO
        title="Top IT Talent Solutions & Custom Software Services"
        description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
        canonicalUrl="https://www.theittalent.com/"
      />
      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-grid">
                <div className='footer-company'>
                  <h2>TheITTalent</h2>
                  <p>The IT Talent is a global IT staffing partner helping businesses scale faster with the right people. With over 14 years of expertise, we specialize in C2C, full-time, and contract hiring.</p>
                  <div className="social-links">
                    <a
                      href="https://www.facebook.com/theittalents"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="social-icon"
                    >
                      <Facebook size={20} />
                    </a>

                    <a
                      href="https://www.instagram.com/theittalent?igsh=eWxkYm9xNmVodHZj"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="social-icon"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/theittalents/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="social-icon"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
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
                    <li><a href="/artificialintelligence">Artificial Intelligence</a></li>
                    <li><a href="/dataengineering">Data Engineering</a></li>
                    <li><a href="/clouddevops">Cloud Engineering & DevOps</a></li>
                    <li><a href="/webappdevelopment">Web & App Development</a></li>
                    <li><a href="/staff-augmentation">Staff Augmentation</a></li>
                    <li><a href="/maintenanceSupport">Maintenance & Support</a></li>
                  </ul>
                </div>
              </div>

              <div className="footer-copyright">
                <p>&copy; 2025 The IT Talent. All rights reserved. | Talent | Technology | Transformation</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;