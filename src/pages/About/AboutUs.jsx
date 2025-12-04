import React from "react";
import { color, motion } from "framer-motion";
import { FaArrowRight, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import "./about.css";
import { FaUserClock } from "react-icons/fa";
import { GiBullseye, GiCyberEye } from "react-icons/gi";
import { GrStatusGood } from "react-icons/gr";
import { TiLeaf } from "react-icons/ti";
import { FiBox } from "react-icons/fi";
import { HiDocumentPlus, HiComputerDesktop } from "react-icons/hi2";
import { IoTelescopeOutline } from "react-icons/io5";
import SEO from '../../components/SEO';

export default function AboutUs() {
  const stats = [
    { number: "14+", label: "Years Building Trust", delay: 0.1 },
    { number: "90+", label: "Projects Delivered", delay: 0.2 },
    { number: "100+", label: "Expert Developers", delay: 0.3 },
    { number: "100%", label: "Client Happiness", delay: 0.4 },
  ];

  const journey = [
    { year: <GrStatusGood />, title: "Quality Comes Fisrt" },
    { year: <TiLeaf />, title: "Flexible Cooperation" },
    { year: <FiBox />, title: "On-time Delivery" },
    { year: <HiDocumentPlus />, title: "Transparent Costs" },
    { year: <HiComputerDesktop />, title: "Qualified Developers" },
    { year: <IoTelescopeOutline />, title: "Quick Scale-up" },
  ];

  const values = [
    { title: "Our Story", desc: "At The IT Talent, our journey began with a simple yet powerful idea: to bridge the gap between exceptional IT talent and businesses in need of innovative solutions. Founded by a team of passionate technology enthusiasts, we started with a vision to transform how companies approach IT staffing and solutions.", icon: <FaUserClock /> },
    { title: "Our Vision", desc: "Our mission is to provide unparalleled IT expertise and consultancy services that drive innovation and growth for our clients. We strive to be the authority in our field, continuously pushing the boundaries of what's possible and setting new standards for excellence.", icon: <GiCyberEye /> },
    { title: "Our Mission", desc: "To continue being the premier IT company that delivers prompt, affordable, and high-quality solutions to clients worldwide. We aim to transcend geographical and linguistic barriers, ensuring that our services are accessible to all, regardless of location or language.", icon: <GiBullseye /> },
  ];

  return (
    <>
      <SEO
        title="About The IT Talent: Our Vision, Mission & Expertise"
        description="Learn about The IT Talent’s mission to connect businesses with certified, highly skilled IT professionals and cutting-edge software solutions worldwide."
        canonicalUrl="https://www.theittalent.com/aboutus"
      />
      <section className="about-hero-pro">
        <div className="hero-bg"></div>
        <motion.div className="container hero-content-pro">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About
            <span className="gradient-text"> Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            At The IT Talent, we are a dynamic and innovative IT consultancy company, dedicated to helping businesses transform and thrive in the digital landscape. With over 14 years of experience, we have established a strong reputation for delivering exceptional results and empowering our clients to achieve their full potential.
          </motion.p>

          <div className="stats-pro">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stat-pro"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="values-pro">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-title-pro"
            viewport={{ once: true }}
          >
          </motion.h2>
          <div className="values-grid-pro">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="value-card-pro"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="value-icon-pro">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title-pro"
          >
            Why Our Services are Better Than Others?
          </motion.h2>
          <div className="timeline">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="team-pro">
        <div className="container">
          <motion.div
            className="team-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-pro">
              Built by People <span className="highlight">Who Care</span>
            </h2>
            <motion.div
              className="title-line"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
            <p className="team-subtitle">
              Meet the passionate minds behind your success
            </p>
          </motion.div>

          <div className="team-grid-pro">
            {[
              {
                name: "Murtaza Jawadwala",
                role: "CEO & Founder",
                img: "https://randomuser.me/api/portraien/11.jpg",
                color: "from-blue-500 to-cyan-500",
                link: "https://www.linkedin.com/in/murtazajawadwala?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              },
              {
                name: "Seema Bairagi",
                role: "Head of Delivery",
                img: "./images/seema.jpg",
                color: "from-purple-500 to-pink-500",
                link: "https://www.linkedin.com/in/seema-bairagi-49b474266/"
              },
              {
                name: "Palak Gehani",
                role: "Tech Lead",
                img: "https://randomuser.me/api/ports/men/32.jpg",
                color: "from-orange-500 to-red-500"
              },
              {
                name: "Dhananjay Solanki",
                role: "Vendor Menager",
                img: "./images/dhananjay.png",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/dhananjay-solanki-b50b30252"
              },
              {
                name: "Md Adnan",
                role: "Lead Developer",
                img:"",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/mdadnanansari"
              },
              {
                name: "Yatan Sharma",
                role: "Vendor Manager",
                img:"images/yatan2.jpg",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/yatan-s-a212a6389"
              },
              {
                name: "Yash",
                role: "CFO",
                img: "",
                color: "from-orange-500 to-red-500"
              }
            ].map((member, i) => (
              <motion.div
                key={i}
                className="team-member"
                initial={{ opacity: 0, y: 60, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <div className="member-card">
                  <div className={`card-gradient ${member.color}`}></div>

                  <div className="member-image-wrapper">
                    <img src={member.img} alt={member.name} className="member-img" />
                    <div className="image-overlay"></div>
                  </div>

                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <div className="social-links-team">
                      <motion.a whileHover={{ scale: 1.2 }} href={member.link} target="_blank" rel="noopener noreferrer" ><FaLinkedin /></motion.a>
                      {/* <motion.a whileHover={{ scale: 1.2 }} href="#"><FaInstagram /></motion.a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <h2>Ready to Build Something Amazing?</h2>
            <p>Let's turn your vision into reality — together.</p>
            <motion.button
              className="cta-btn-pro"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" >Start Your Project </a><FaArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}