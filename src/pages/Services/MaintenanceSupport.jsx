import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '../../components/SEO';
import '../../style/services.css';

const staffingOptions = [
  {

    title: "Website & Application Maintenance",
    icon: "⚡",
    list: [
      "Regular Updates & Patch Management",
      "Bug Fixes & Error Resolution",
      "Performance Optimization & Speed Enhancements",
      "Content Updates & UI/UX Improvements"
    ]
  },
  {
    title: "24/7 Technical Support",
    icon: "👥",
    list: [
      "Ongoing Assistance & Troubleshooting",
      "Dedicated Support Team Available Round the Clock",
      "Remote & On-Site Support Options"
    ]
  },
  {
    title: "Security & Compliance Monitoring",
    icon: "🧬",
    list: [
      "Regular Security Audits & Vulnerability Scanning",
      "Data Backup & Disaster Recovery Planning",
      "Compliance Support for GDPR, HIPAA, SOC 2, etc.",
      "SSL, Firewall, & Security Configuration"
    ]
  },
  {
    title: " Software & System Updated",
    icon: "",
    list: [
      "Version Upgrades & Compatibility Checks",
      "Integration of New Features & Functionalities",
      "Continuous Improvement & System Enhancements"
    ]
  }
];

const whyChoose = [
  { title: " Proactive Maintenance", desc: "We don’t wait for issues to arise. Our team provides regular checks, updates, and optimizations to prevent potential problems." },
  { title: " Custom Support Plans", desc: "We offer flexible support packages tailored to your business needs, ensuring you only pay for what you use." },
  { title: " 24/7 Availability", desc: "Whether it’s a minor bug or a major issue, our expert support team is available round-the-clock to assist you." },
  { title: " Cost-Effective Solutions", desc: "We help reduce unexpected costs by identifying and addressing potential issues early, ensuring minimal downtime and disruption." },
  { title: "Experienced Support Team", desc: "With over 14 years of IT expertise, we have the skills and experience to support complex systems and technologies." }
];

const process = [
  { num: "01", title: " Initial Assessment & Onboarding", desc: "We begin by reviewing your current system and understanding your maintenance needs." },
  { num: "02", title: " Custom Maintenance Plan", desc: "We design a personalized maintenance and support plan that aligns with your business goals and technical requirements." },
  { num: "03", title: " Ongoing Maintenance & Monitoring", desc: "Our team ensures your systems are constantly updated, secure, and performing optimally." },
  { num: "04", title: " Incident Management & Resolution", desc: "If any issues arise, we provide quick troubleshooting and resolution to minimize downtime." }
];

const faqs = [
  { q: "Q1: How do you handle critical system failures? ", a: "We have a well-defined incident management process, with a dedicated support team ready to resolve critical issues as quickly as possible to minimize downtime." },
  { q: "Q2: Do you provide 24/7 customer support?", a: "Yes, we offer 24/7 support to ensure that your systems are always running smoothly, regardless of the time of day." },
  { q: "Q3: How often do you perform maintenance on our systems?", a: "We perform regular maintenance based on your needs, including monthly system checks, security patches, and performance enhancements." }
];

export default function MaintenanceSupport() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <SEO
        title="IT Staff Augmentation Services | Hire Top Developers Fast"
        description="Scale your team instantly with pre-vetted senior IT professionals."
      />

      {/* Hero - Light & Clean */}
      <section className="relative h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2934&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

        <div className="relative z-10 max-w-6xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Maintenance & Support<br />
            <span className="text-indigo-600">With Confidence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto">
            Access pre-vetted senior developers, architects, and IT experts — ready to contribute from day one.
          </p>
          <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl px-14 py-6 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Hire Talent Today
          </Link>
        </div>
      </section>



      <section className="staff-section container">
        <motion.div
          className="staff-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="staff-heading">
            Ensure Smooth Operations with Expert Maintenance & Ongoing Support        </h2>

          <p className="staff-para">
            At The IT Talent, we believe that a successful digital product doesn’t stop at launch. To keep your systems running smoothly and up-to-date, we provide comprehensive maintenance and support services that ensure optimal performance, security, and longevity.        </p>

          <p className="staff-para">
            Whether you’re looking for bug fixes, security updates, performance enhancements, or technical support, our team is here to help you every step of the way.        </p>

          <h3 className="staff-sub-heading">What We Offer</h3>

          <p className="staff-para">
            We offer reliable maintenance and support solutions that help you focus on growing your business while we take care of your digital infrastructure.
          </p>
        </motion.div>
      </section>

      <section className="staffing-section">
        <div className="staffing-container">

          <h2 className="staffing-title">Flexible Staffing Options</h2>
          <p className="staffing-desc">
            From short-term support to long-term team members — we’ve got you covered.
          </p>

          <div className="staffing-grid">
            {staffingOptions.map((option, i) => (
              <div
                key={i}
                className="staffing-card-wrapper"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="staffing-card">
                  <div className="staffing-icon">
                    {option.icon}
                  </div>
                  <h3 className="staffing-card-title">{option.title}</h3>
                  <ul className="staffing-list">
                    {option.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why Choose The IT Talent for Maintenance & Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-7xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-l font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-400 to-transparent"></div>
                )}
                <div className="text-6xl font-bold text-indigo-600 mb-6">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="text-xl font-medium text-gray-800">{faq.q}</span>
                  <span className="text-3xl text-indigo-600 font-light">{openFAQ === i ? "−" : "+"}</span>
                </button>
                {openFAQ === i && (
                  <div className="px-8 pb-8 text-gray-700 bg-gray-50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="staff-section container">
        <motion.div
          className="staff-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="staff-heading">
            Keep Your Systems Running Smoothly        </h2>

          <p className="staff-para">
            Let The IT Talent ensure your digital assets are secure, up-to-date, and performing at their best. Our maintenance and support services are designed to give you peace of mind, knowing your systems are in good hands.        </p>

          <p className="staff-para">Contact us today to learn more about our maintenance and support solutions
          </p>

        </motion.div>
      </section>



      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to Grow Your Team?</h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto opacity-90">
            Join hundreds of companies scaling smarter with The IT Talent.
          </p>
          <Link to="/contact" className="inline-block bg-white text-indigo-600 font-bold text-2xl px-16 py-8 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Get Started Now
          </Link>
        </div>
      </section>

    </>
  );
}