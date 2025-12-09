import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '../../components/SEO';
import '../../style/services.css';

const staffingOptions = [
  {
    title: "Cloud Infrastructure Engineering",
    icon: "⚡",
    list: [
      "Cloud Architecture Design & Implementation",
      "Infrastructure as Code (Terraform, AWS CloudFormation)",
      "Multi-cloud & Hybrid Cloud Solutions",
      "Cost Optimization & Cloud Resource Management",
    ]
  },
  {
    title: "DevOps Automation & CI/CD",
    icon: "👥",
    list: [
      "Automated Testing & Continuous Integration",
      "Continuous Deployment (CD) Pipelines",
      "Infrastructure Automation & Configuration Management",
      "DevOps Toolchain Integration (Jenkins, GitLab, CircleCI, etc."


    ]
  },
  {
    title: "Cloud-Native Applications",
    icon: "🧬",
    list: [
      "Containerization & Orchestration (Docker, Kubernetes)",
      "Serverless Architecture (AWS Lambda, Azure Functions)",
      "Microservices Architecture & API Management"
    ]
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: "🧬",
    list: [
      "Cloud Security Best Practices",
      "IAM (Identity & Access Management) & Encryption",
      "Compliance & Audit Support (GDPR, HIAA, SOC 2, etc.)"
    ]
  },
];

const whyChoose = [
  { title: " Scalable & Flexible Cloud Solutions", desc: "We help you design cloud architectures that scale seamlessly with your business." },
  { title: " Optimized Deployment Pipelines", desc: "Automate manual processes and ensure faster, reliable releases with CI/CD pipelines." },
  { title: " Cost-Efficiency", desc: "We help you reduce cloud infrastructure costs while maintaining performance and security." },
  { title: " Cross-Platform Expertise", desc: "Whether it’s AWS, Azure, GCP, or hybrid clouds, we work across all major platforms to build solutions tailored to your needs." },
  { title: " Secure & Compliant Architectures", desc: "We ensure your cloud infrastructure adheres to the highest security standards and compliance requirements." }
];

const process = [
  { num: "01", title: " Cloud Strategy & Consultation", desc: "We understand your current infrastructure, assess your needs, and define a cloud strategy." },
  { num: "02", title: " Architecture Design & Implementation", desc: "We design and implement a cloud solution that is scalable, secure, and cost-effective." },
  { num: "03", title: " Automation & CI/CD Pipeline Setup", desc: "We automate your development, testing, and deployment processes for fast, consistent releases." },
  { num: "04", title: " Monitoring & Optimization", desc: "We provide continuous monitoring, performance optimization, and troubleshooting support." }
];

const faqs = [
  { q: "Q1: How do you ensure cloud infrastructure is secure? ", a: "We implement security best practices like encryption, IAM policies, and regular audits to keep your cloud environment secure." },
  { q: "Q2: Do you offer multi-cloud solutions?", a: "Yes, we can implement solutions that span across multiple cloud platforms, providing flexibility and redundancy." },
  { q: "Q3: Can you help us with cloud cost optimization?", a: "Absolutely! We continuously monitor and analyze cloud usage to ensure that resources are used efficiently and that costs are minimized." }
];

export default function CloudDevops() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <SEO
        title="Cloud Engineering, Migration & DevOps Automation"
        description="Achieve peak performance with cloud engineering, seamless migration to AWS/Azure/GCP, and robust DevOps automation and infrastructure management."
        canonicalUrl="https://www.theittalent.com/clouddevops"
      />

      {/* Hero - Light & Clean */}
      <section className="hero-content-web relative h-[50vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2934&auto=format&fit=crop')] bg-cover bg-center opacity-2"></div>

        <div className="relative z-10 max-w-6xl px-6 mt-2">
          <h1 className="text-4xl md:text-4xl mt-2 font-bold text-gray-900 mb-3 leading-tight">
            Cloud Engineering & DevOps<br />
            <span className="text-indigo-600">With Confidence</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-700 mb-5 max-w-4xl mx-auto">
            Access pre-vetted senior developers, architects, and IT experts — ready to contribute from day one.
          </p>
          <Link to="/contact" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xl px-5 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
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
            Unlock the Full Potential of the Cloud with Robust DevOps Practices
          </h2>

          <p className="staff-para">
            In today’s fast-paced digital world, agility, scalability, and reliability are key to staying competitive. With The IT Talent’s Cloud Engineering and DevOps services, we help businesses accelerate their digital transformation by enabling seamless cloud adoption and continuous integration/continuous deployment (CI/CD) practices.
          </p>

          <p className="staff-para">
            From cloud infrastructure management to automated deployments, we ensure your applications run smoothly and scale effortlessly.
          </p>

          <h3 className="staff-sub-heading">What We Offer</h3>

          <p className="staff-para">
            We offer full-cycle development services, from UI/UX design and front-end/backend development to post-launch maintenance and optimization.
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
            Why Choose The IT Talent for Cloud Engineering & DevOps?
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center px-5 relative">
                {/* {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-indigo-400 to-transparent"></div>
                )} */}
                <div className="text-6xl font-bold text-indigo-600 mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition"
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
            Let’s Build Something Great Together
          </h2>

          <p className="staff-para">
            Maximize the potential of the cloud and accelerate your DevOps processes with The IT Talent. Let us help you innovate, scale, and stay secure in the cloud.
          </p>

          <p className="staff-para"> Get in touch today for a consultation on cloud engineering and DevOps solutions.
          </p>

        </motion.div>
      </section>



      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Grow Your Team?</h2>
          <p className="text-2xl mb-6 max-w-4xl mx-auto opacity-90">
            Join hundreds of companies scaling smarter with The IT Talent.
          </p>
          <Link to="/contact" className="inline-block bg-white text-indigo-600 font-bold text-2xl px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Get Started Now
          </Link>
        </div>
      </section>

    </>
  );
}