import React from "react";
import '../style/components.css';
import { FaArrowRight } from 'react-icons/fa';

export default function ReadySection() {
  return (
    <>
    <section className="ready-section">
            <div className="ready-overlay"></div>
    
            <div className="ready-content">
              <h2>READY TO WORK? LET'S CHAT</h2>
              <p>
                Our team of experts is ready to collaborate with you every step of the
                way, from initial consultation to implementation.
              </p>
    
              <button className="ready-btn">
                CONTACT US TODAY <FaArrowRight />
              </button>
            </div>
          </section>
    </>
  );
}