import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import { VscThreeBars } from "react-icons/vsc";
import SEO from './SEO';

export default function Navbar({ isHome }) {
  const [openService, setOpenService] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const images = [
    "./images/Banner1.jpg",
    "./images/Banner2.jpg",
    "./images/Banner3.png"
  ];

  const heroContents = [
    { title: "Best IT Solutions", desc: "With Over 14 Years of Expertise in", btn: "IT Services", link: "/contact" },
    { title: "Unleashing The Power of Artificial Intelligence", desc: "Smartr Solutions | Real-time Insights | Future-Ready Technology", btn: "Explore Now", link: "/contact" },
    { title: "Empowering Businesses With Smart IT Solutions", desc: "With 14+ years of expertise in IT services, The IT Talent delivers reliable, scalable, and future-ready digital solutions.", btn: "Get a Free Consultations", link: "/contact" }
  ];

  useEffect(() => {
    if (isHome) {
      const interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHome]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Mobile Menu Content (Same for all pages)
  const MobileMenu = () => (
    <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
      <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
        <a href="/" onClick={closeMobileMenu}>Home</a>

        <div className="mobile-nav-item">
          <span className="mobile-dropdown-btn" onClick={() => setOpenService(!openService)}>
            Services {openService ? "↑" : "↓"}
          </span>
          {openService && (
            <div className="mobile-dropdown-menu">
              <a href="/service" onClick={closeMobileMenu}>Services</a>
              <a href="/webappdevelopment" onClick={closeMobileMenu}>Web & App Development</a>
              <a href="/staff-augmentation" onClick={closeMobileMenu}>Staff Augmentation</a>
              <a href="/dataengineering" onClick={closeMobileMenu}>Data Engineering</a>
              <a href="/clouddevops" onClick={closeMobileMenu}>Cloud Engineering & DevOps</a>
              <a href="/artifiacialintelligence" onClick={closeMobileMenu}>Artificial Intelligence</a>
              <a href="/maintenanceSupport" onClick={closeMobileMenu}>Maintenance & Support</a>
            </div>
          )}
        </div>

        <div className="mobile-nav-item">
          <span className="mobile-dropdown-btn" onClick={() => setOpenAbout(!openAbout)}>
            About Us {openAbout ? "↑" : "↓"}
          </span>
          {openAbout && (
            <div className="mobile-dropdown-menu">
              <a href="/aboutus" onClick={closeMobileMenu}>About Us</a>
              <a href="/leadershipteam" onClick={closeMobileMenu}>Leadership & Team</a>
              <a href="/blog" onClick={closeMobileMenu}>Blog</a>
              <a href="/careers" onClick={closeMobileMenu}>Career</a>
            </div>
          )}
        </div>

        <a href="/contact" onClick={closeMobileMenu}>Contact Us</a>
        <a href="/contact" className="mobile-get-started" onClick={closeMobileMenu}>
          Get Started
        </a>
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title="The IT Talent - Top IT Staffing & Development Company"
        description=""
      />
      {isHome ? (
        <header
          className="home-header"
          style={{
            backgroundImage: `url(${images[bgIndex]})`,
            transition: "background-image 1s ease-in-out"
          }}
        >
          <div className="overlay"></div>

          <nav className={`navbar flex transparent ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
              <img src="./images/logo.jpeg" alt="Logo" />
            </div>

            <div className="nav-links flex desktop-only">
              <a href="/">Home</a>
              <div className="nav-item">
                <span className="nav-dropdown-btn" onClick={() => { setOpenService(!openService); setOpenAbout(false); }}>
                  Services ▾
                </span>
                {openService && (
                  <div className="dropdown-menu stay-open">
                    <a href="/service">Services</a>
                    <a href="/webappdevelopment">Web & App Development</a>
                    <a href="/staff-augmentation">Staff Augmentation</a>
                    <a href="/dataengineering">Data Engineering</a>
                    <a href="/clouddevops">Cloud Engineering & DevOps</a>
                    <a href="/artificialintelligence">Artificial Intelligence</a>
                    <a href="/maintenanceSupport">Maintenance & Support</a>
                  </div>
                )}
              </div>

              <div className="nav-item">
                <span className="nav-dropdown-btn" onClick={() => { setOpenAbout(!openAbout); setOpenService(false); }}>
                  About Us ▾
                </span>
                {openAbout && (
                  <div className="dropdown-menu stay-open">
                    <a href="/aboutus">About Us</a>
                    <a href="/leadershipteam">Leadership & Team</a>
                    <a href="/blog">Blog</a>
                    <a href="/careers">Career</a>
                  </div>
                )}
              </div>
              <a href="/contact">Contact Us</a>
            </div>

            <a href="/contact" className="get-start-btn desktop-only">Get Started</a>

            <button
              className={`hamburger mobile-only ${mobileMenuOpen ? "active" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span>< VscThreeBars /></span>
            </button>
          </nav>

          <div className="container">
            <div className="hero-content fade-hero">
              <h1>{heroContents[bgIndex].title}</h1>
              <p>{heroContents[bgIndex].desc}</p>
              <a href={heroContents[bgIndex].link} className="hero-btn">{heroContents[bgIndex].btn}</a>
            </div>
          </div>
        </header>
      ) : (
        <nav className={`navbar flex small-nav ${scrolled ? "scrolled" : ""}`}>
          <div className="logo">
            <img src="./images/logo.jpeg" alt="Logo" />
          </div>

          <div className="nav-links flex desktop-only">
            <a href="/">Home</a>
            <div className="nav-item">
              <span className="nav-dropdown-btn" onClick={() => { setOpenService(!openService); setOpenAbout(false); }}>
                Services ▾
              </span>
              {openService && (
                <div className="dropdown-menu stay-open">
                  <a href="/service">Services</a>
                  <a href="/webappdevelopment">Web & App Development</a>
                  <a href="/staff-augmentation">Staff Augmentation</a>
                  <a href="/dataengineering">Data Engineering</a>
                  <a href="/clouddevops">Cloud Engineering & DevOps</a>
                  <a href="/artificialintelligence">Artificial Intelligence</a>
                  <a href="/maintenanceSupport">Maintenance & Support</a>
                </div>
              )}
            </div>

            <div className="nav-item">
              <span className="nav-dropdown-btn" onClick={() => { setOpenAbout(!openAbout); setOpenService(false); }}>
                About Us ▾
              </span>
              {openAbout && (
                <div className="dropdown-menu stay-open">
                  <a href="/aboutus">About Us</a>
                  <a href="/leadershipteam">Leadership & Team</a>
                  <a href="/blog">Blog</a>
                  <a href="/careers">Career</a>
                </div>
              )}
            </div>
            <a href="/contact">Contact Us</a>
          </div>

          <a href="/contact" className="get-start-btn desktop-only">Get Started</a>

          <button
            className={`hamburger mobile-only ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span>< VscThreeBars /></span>
          </button>
        </nav>
      )}

      {mobileMenuOpen && <MobileMenu />}
    </>
  );
}