import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";   
const cards = [
    { id: 1, link:"/artificialintelligence", title: "Artificial Intelligence", slug: "artifiacialintelligence", para: "Revolutionize your business with AI and machine learning solutions. Deploy intelligent systems that drive operational efficiency, deliver predictive insights, and automate critical processes.", img: "/images/gallery1.jpg" },
    { id: 2, link: "/dataengineering", title: "Data Engineering", slug: "dataengineering", para: "Harness the power of your data. Our data engineering experts build scalable, analytics-ready pipelines that support advanced data strategies and business intelligence.", img: "/images/gallery2.jpg" },
    { id: 3, link: "/clouddevops", title: "Cloud Engineering & DevOps", slug: "clouddevops", para: "Accelerate your development lifecycle with our DevOps and cloud expertise. We create efficient CI/CD pipelines, scalable cloud architectures, and automated workflows.", img: "/images/gallery3.jpg" },
    { id: 4, link: "/webappdevelopment", title: "Web & App Development", slug: "webappdevelopment", para: "Build custom web applications and mobile solutions tailored to your business needs. From frontend to backend, we deliver high-quality, performant, and secure software.", img: "/images/gallery4.jpg" },
    { id: 5, link: "/staff-augmentation", title: "Staff Augmentation", slug: "staff-augmentation", para: "Scale your team quickly with pre-vetted IT professionals. Whether you need developers, designers, or engineers, we provide talent that integrates seamlessly with your team.", img: "/images/gallery5.jpg" },
    { id: 6, link: "/maintenanceSupport", title: "Maintenance & Support", slug: "maintenanceSupport", para: "Keep your systems running smoothly. Our team offers ongoing maintenance, bug fixes, performance optimization, and technical support to ensure long-term reliability." }
];

const ServicesSlider = ({  }) => {
  const duplicatedCards = [...cards, ...cards];
  const trackRef = useRef(null); 
  
      useEffect(() => {
          const track = trackRef.current;
          track.innerHTML += track.innerHTML;
      }, []);
  return (
    <section className="services-slider-section">
      <div className="container">
        <h3>OUR SERVICES</h3>
        <h2>How We Can <span>Help </span>You</h2>
        <p>
          From custom software to AI-powered automation, we deliver cutting-edge solutions that drive growth and efficiency.
        </p>

        <div className="slider-container">
          <div className="slider-track flex" ref={trackRef}>
            {duplicatedCards.map((card, index) => (
              <div className="slider-card" key={index}>
                <h3>{card.title}</h3>
                <p>{card.para}</p>
                <button className="read-more-btn"> 
                  <Link to={card.link}>
                  Read More
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;