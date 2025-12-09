import React from "react";
import '../style/components.css';
import { FaArrowRight } from 'react-icons/fa';
import SEO from './SEO';

export default function ReadySection() {
  return (
    <>
      <SEO
        title="Top IT Talent Solutions & Custom Software Services"
        description="Empower your business with top-tier remote IT talent, custom software development, and expert cloud and AI engineering. Start your transformation today."
        canonicalUrl="https://www.theittalent.com/"
      />
            <section className="ready-section">
        <video autoPlay muted loop className="ready-video">
          <source src="./images/GetReady.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="ready-overlay"></div>

        <div className="ready-content fade-ready">
          <h2>READY TO WORK? LET'S CHAT</h2>
          <p>
            Our team of experts is ready to collaborate with you every step of the
            way, from initial consultation to implementation.
          </p>

          <a href="/contact" className="ready-btn" > 
            CONTACT US TODAY <FaArrowRight />
          </a>
        </div>
      </section>
    </>
  );
}