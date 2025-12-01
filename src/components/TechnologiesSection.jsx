import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../style/components.css';
import '../style/Global.css';
import { FaPython, FaDocker, FaAws, FaNode } from "react-icons/fa";
import { SiTensorflow, SiKubernetes, SiTypescript } from "react-icons/si";
import { TbBrandGraphql } from "react-icons/tb";

const techCategories = {
  "Web Platform": [
    { name: "React", logo: "⚛️" },
    { name: "Angular", logo: "🅰️" },
    { name: "Vue.js", logo: "V" },
    { name: "jQuery", logo: "jQ" },
    { name: "Bootstrap", logo: "🅱️" },
    { name: "Backbone", logo: "B" },
    { name: "Node.js", logo: "🟢" },
    { name: "Django", logo: "🐍" },
    { name: "Ruby on Rails", logo: "💎" },
    { name: "ASP.NET Core", logo: "🟦" },
    { name: "Spring", logo: "☘️" },
    { name: "Laravel", logo: "L" }
  ],
  "Databases": [
    { name: "MySQL", logo: "🟡" },
    { name: "PostgreSQL", logo: "🐘" },
    { name: "Oracle", logo: "🔴" },
    { name: "Microsoft Azure", logo: "🔵" },
    { name: "MariaDB", logo: "🐬" },
    { name: "SQLite", logo: "🟦" },
    { name: "MongoDB", logo: "🟢" },
    { name: "Couchbase", logo: "🟠" }
  ],
  "Cloud & DevOps": [
    { name: "AWS", logo: "☁️" },
    { name: "Azure", logo: "🔵" },
    { name: "Google Cloud", logo: "🌈" },
    { name: "Terraform", logo: "🟣" },
    { name: "Kubernetes", logo: "🔵" },
    { name: "Docker", logo: "🐳" },
    { name: "Ansible", logo: "🔴" },
    { name: "Jenkins", logo: "🟠" }
  ],
  "Artificial Intelligence": [
    { name: "TensorFlow", logo: "🟠" },
    { name: "PyTorch", logo: "🔴" },
    { name: "Keras", logo: "🔴" },
    { name: "scikit-learn", logo: "🟦" },
    { name: "Hugging Face", logo: "🤗" },
    { name: "OpenCV", logo: "🔵" },
    { name: "spaCy", logo: "🔵" },
    { name: "NLTK", logo: "🟢" }
  ]
};

const tabs = Object.keys(techCategories);

export default function TechnologiesSection() {
  const [activeTab, setActiveTab] = useState("Web Platform");

  return (
    <section className="tech-section">
      <div className="circuit-left"></div>

      <div className="matrix-right"></div>
      <div className="floating-icons">
        <span>⚛️</span>
        <span><FaNode /></span>
        <span><FaDocker /></span>
        <span><SiTensorflow /></span>
        <span><SiKubernetes /></span>
        <span><FaPython /></span>
        <span><FaAws /></span>
        <span><TbBrandGraphql /></span>
        <span><SiTypescript /></span>
      </div>
      <div className="tech-container">
        {/* Heading */}
        <div className="tech-heading">
          <p className="tech-subtitle">OUR TECHNOLOGIES</p>
          <h2 className="tech-title">
            We Use <span className="tech-highlight">Technologies</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="tech-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tech-tab ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="activeTabLine" className="tab-underline" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="tech-grid"
        >
          {techCategories[activeTab].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="tech-card"
            >
              <div className="tech-rect-box">
                <div className="hexagon">
                  <div className="hex-inner">
                    <span className="tech-logo">{tech.logo}</span>
                    <p className="tech-name">{tech.name}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
