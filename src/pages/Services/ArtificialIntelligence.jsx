import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '../../components/SEO';
import '../../style/services.css';

const staffingOptions = [
  {
    title: "Machine Learning (ML) Development",
    icon: "⚡",
    list: [
      "Custom ML Models for Prediction & Forecasting",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Deep Learning Solutions",
      "Model Training & Optimization"
    ]
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: "👥",
    list: [
      "Text Analytics & Sentiment Analysis",
      "Chatbot Development & Virtual Assistants",
      "Speech Recognition & Language Translation",
      "Automated Document Processing"
    ]
  },
  {
    title: "Computer Vision",
    icon: "🧬",
    list: [
      "Image Recongnition & Classification",
      "Object Detection & Tracking",
      "Facial Recognition & Video Analytics",
      "AI-Power Visual Search"
    ]
  },
  {
    title: "AI-Powered Automation",
    icon: "🧬",
    list: [
      "Robotic Process Automation (RPA)",
      "Intelligent Workflow Automation",
      "AI-Powered Business Intelligence & Analytics",
      "Predictive Maintenance & Anomaly Detection"
    ]
  },
  {
    title: "AI Consulting & Strategy",
    icon: "🧬",
    list: [
      "AI Roadmap Development",
      "AI Maturity Assessment",
      "Data Strategy & AI Integration Consulting",
      "AI Training & Knowledge Transfer"
    ]
  }
];

const whyChoose = [
  { title: " Innovative AI Solutions", desc: "We harness the latest AI technologies to deliver solutions that are not just smart, but innovative and tailored to your business needs." },
  { title: " End-to-End AI Development", desc: "From ideation and data collection to model development and deployment, we handle all aspects of your AI project." },
  { title: " Scalable Solutions", desc: "Our AI solutions are built to scale with your business, ensuring long-term success and growth." },
  { title: " Proven Expertise", desc: "With over 14 years of experience, our AI experts have delivered transformative solutions across various industries." },
  { title: "Data-Driven Insights", desc: "We ensure your AI systems are powered by accurate, clean, and relevant data for optimal performance." }
];

const process = [
  { num: "01", title: " Data Collection & Preparation", desc: "We gather, clean, and prepare data to train AI models and ensure accuracy." },
  { num: "02", title: " Model Development & Training", desc: "We develop and train custom AI models tailored to your specific requirements." },
  { num: "03", title: " Testing & Deployment", desc: "We rigorously test AI models for performance and accuracy before deploying them to production." },
  { num: "04", title: " Monitoring & Continuous Improvement", desc: "We continuously monitor AI systems and fine-tune models to improve results over time." }
];

const faqs = [
  { q: "Q1: What types of AI models do you build?", a: "We build a variety of models, including predictive analytics, recommendation engines, image recognition, and natural language processing models." },
  { q: "Q2: How long does it take to implement an AI solution?", a: "The timeline depends on the complexity of the project. It typically takes a few weeks to several months for full deployment, including data collection and model training." },
  { q: "Q3: Is AI expensive to implement?", a: "While there is an initial investment in AI development, our solutions are designed to deliver high ROI by optimizing business processes and driving growth." }
];

export default function Artificialintelligence() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <SEO
        title="AI & Machine Learning Development Services"
        description="Implement cutting-edge AI and Machine Learning models for automation, predictive analytics, and enhanced decision-making in your business."
        canonicalUrl="https://www.theittalent.com/artificialintelligence"
      />

      {/* Hero - Light & Clean */}
      <section className="hero-content-web relative h-[50vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2934&auto=format&fit=crop')] bg-cover bg-center opacity-2"></div>

        <div className="relative z-10 max-w-6xl px-6 mt-2">
          <h1 className="text-4xl md:text-4xl mt-2 font-bold text-gray-900 mb-3 leading-tight">
            Artificial Intelligence<br />
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
            Empowering Businesses with Smart AI Solutions
          </h2>

          <p className="staff-para">
            At The IT Talent, we bring the power of Artificial Intelligence (AI) to your business. Our AI services are designed to solve complex challenges and unlock new opportunities by integrating machine learning (ML), natural language processing (NLP), computer vision, and automation into your processes.
          </p>

          <p className="staff-para">
            Whether you’re looking to enhance customer experiences, optimize operations, or predict business trends, our AI solutions deliver measurable results that align with your business goals.
          </p>

          <h3 className="staff-sub-heading">What We Offer</h3>

          <p className="staff-para">
            We offer end-to-end AI services that help businesses leverage data-driven insights for decision-making, automation, and growth.
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
          <h2 className="text-3xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose The IT Talent for Web & Mobile App Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 max-w-7xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="text-center px-5">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-l leading-tight font-bold text-gray-800 mb-3">{item.title}</h3>
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
            Ready to Unlock the Potential of AI?
          </h2>

          <p className="staff-para">
            Build intelligent, scalable data infrastructure with The IT Talent and turn your data into a competitive advantage.
          </p>

          <p className="staff-para">Reach out today for a free consultation on your data engineering needs
          </p>

        </motion.div>
      </section>



      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-4">Ready to Grow Your Team?</h2>
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