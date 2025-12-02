import React from 'react';
import { motion } from 'framer-motion';
import '../../style/About.css';
import ReadySection from '../../components/ReadySection';

const teamMembers = [
  {
    name: "Murtaza",
    role: "Founder & CEO",
    image: "/images/founder.jpg",
    bio: "Murtaza is a seasoned innovator and advocate in global digital and data transformation, with a strong focus on FinTech, InsurTech, and digital transformation. With over 17 years of business experience across the USA, UK, Middle East, Germany, Hong Kong, and India, I’ve driven enterprise expansion and organizational transformations."
  }
];

export default function LeadershipTeam() {
  return (
    <>
      <section className="leadership-hero-light">
        <div className="hero-content-light">
          <motion.h1
            className="hero-title-light"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Leadership Team
          </motion.h1>
          <motion.p
            className="hero-subtitle-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experienced professionals committed to your success
          </motion.p>
        </div>
      </section>

      <section className="leadership-section-light">
        <div className="leadership-container-light">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className={`leadership-card-light ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-side-light">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image-light"
                />
              </div>

              <div className="content-side-light">
                <div className="content-inner-light">
                  <h2 className="member-name-light">{member.name}</h2>
                  <h3 className="member-role-light">{member.role}</h3>
                  <div className="role-line-light"></div>
                  <p className="member-bio-light">{member.bio}</p>

                  <div className="social-links-light">
                    <a href="https://www.linkedin.com/in/murtazajawadwala?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-btn-light">LinkedIn</a>
                    <a href="https://about.me/murtazajawadwala" className="social-btn-light">about.me</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <ReadySection />
    </>
  );
}