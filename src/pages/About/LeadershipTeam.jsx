import React from 'react';
import { motion } from 'framer-motion';
import '../../style/About.css';
import ReadySection from '../../components/ReadySection';
import SEO from '../../components/SEO';
import { FaArrowRight, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    name: "Murtaza",
    role: "Founder & CEO",
    image: "/images/mjsir3.jpg",
    bio: "Murtaza is a seasoned innovator and advocate in global digital and data transformation, with a strong focus on FinTech, InsurTech, and digital transformation. With over 17 years of business experience across the USA, UK, Middle East, Germany, Hong Kong, and India, I’ve driven enterprise expansion and organizational transformations."
  },
  {
    name: "Touhid Rahman",
    role: "Leadership Team",
    image:"/images/TouhidPic.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim molestiae, provident dolores iste perferendis commodi repellat a tenetur eum facilis, animi voluptatum alias quidem exercitationem similique totam at magnam repudiandae rerum in necessitatibus consequatur magni."

  }
];

export default function LeadershipTeam() {
  return (
    <>
      <SEO
        title="Meet the Leadership & Expert Team at The IT Talent"
        description="Get to know the experienced leaders and skilled engineering teams driving innovation and delivering technical excellence at The IT Talent."
      />
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
                name: "Touhid Rahman",
                role: "Leadership Team",
                img:"/images/TouhidPic.jpg",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/mdadnanansari"
              },
              {
                name: "Seema Bairagi",
                role: "Sales Team",
                img: "./images/seema.jpg",
                color: "from-purple-500 to-pink-500",
                link: "https://www.linkedin.com/in/seema-bairagi-49b474266/"
              },
              {
                name: "Palak Gehani",
                role: "Sales Team",
                img: "images/palak1.jpg",
                color: "from-orange-500 to-red-500",
                link: "https://teams.live.com/l/message/19:uni01_bjwmm4ad7tu64pv5ip2eoavwm2zs42rmgszcwf2te65briwn3dwa@thread.v2/1765281942694?context=%7B%22contextType%22%3A%22chat%22%7D"
              },
              {
                name: "Dhananjay Solanki",
                role: "Vendor Team",
                img: "./images/dhananjay.png",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/dhananjay-solanki-b50b30252"
              },
              {
                name: "Yatan Sharma",
                role: "Vendor Team",
                img:"images/yatan2.jpg",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/yatan-s-a212a6389"
              },
              {
                name: "Md Adnan",
                role: "Developer Team",
                img:"/images/adnan.jpg",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/mdadnanansari"
              },
              {
                name: "Sushil Keer",
                role: "Support Team",
                img:"/images/sushil.png",
                color: "from-orange-500 to-red-500",
                link: "https://www.linkedin.com/in/mdadnanansari"
              },
              {
                name: "Sunny Chouhan",
                role: "Support Team",
                img: "",
                color: "from-orange-500 to-red-500",
                img:"./images/sunny.png"
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
      
      <ReadySection />
    </>
  );
}