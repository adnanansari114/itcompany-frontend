import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '../../components/SEO';
import '../../style/services.css';

const staffingOptions = [
  {
    title: "Dedicated Developers",
    icon: "⚡",
    list: [
    "Frontend & Backend Developers",
    "Mobile App Developers",
    "Full Stack Engineers",
    "CMS & E-commerce Developers"
    ]
  },
  {
    title: "Cloud & DevOps Experts",
    icon: "👥",
    list: [
    "Cloud Architects (AWS, Azure, GCP)",
    "DevOps Engineers & CI/CD Experts",
    "Infrastructure & Deployment Specialists"
    ]
  },
  {
    title: "QA & Support Specialists",
    icon: "🧬",
    list: [
    "Manual & Automation Testes",
    "Tech Support Engineers",
    "Application Maintenance Teams"
    ]
  },
  {
    title:"AI, Data & Analytics Talent",
    icon: "",
    list:[
    "Data Engineers & Scientists",
    "Machine Learning Experts",
    "BI Analysts & Data Visualizers"

]
  }
];

const whyChoose = [
  { title: " Access to a Wide Talent Pool", desc: "Choose from 100+ pre-vetted, certified IT professionals ready to join your team." },
  { title: " Faster Hiring Cycles", desc: "We deliver qualified candidates within days, not weeks." },
  { title: " Flexible Engagement Models", desc: "Hourly, part-time, or full-time—scale your team exactly as you need." },
  { title: " Industry-Specific Expertise", desc: "We understand domain-specific requirements across fintech, healthcare, logistics, and more." },
  { title: " Seamless Integration", desc: "Our professionals work as an extension of your team using your tools, processes, and time zones." }
];

const process = [
  { num: "01", title: " Requirement Gathering", desc: "We analyze your staffing needs, required skillsets, and duration." },
  { num: "02", title: " Talent Match", desc: "We shortlist and share profiles of vetted candidates for your review." },
  { num: "03", title: " Interview & Select", desc: "You interview the candidates and choose who fits your team best." },
  { num: "04", title: " Onboard & Integrate", desc: "We handle onboarding and ensure smooth integration into your projects." }
];

const faqs = [
  { q: "Q1: How is staff augmentation different from outsourcing? ", a: "In staff augmentation, you manage the resources directly, while outsourcing involves handing over entire projects. It gives you better control and flexibility." },
  { q: "Q2: Can I scale up or down during the project?", a: "Yes! You can easily add or reduce resources based on your project demands." },
  { q: "Q3: Do you provide offshore and onshore talent?", a: " We primarily offer offshore IT staffing with remote-ready professionals, but onshore availability can also be arranged." }
];

export default function StaffAugmentation() {
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
            Staff Augmentation<br />
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
          Scale Your Tech Teams with Top IT Talent—On Demand
        </h2>

        <p className="staff-para">
          Struggling to find skilled developers, engineers, or IT experts fast? With The IT Talent’s Staff Augmentation services, you can quickly scale your team with pre-vetted, experienced professionals—exactly when and where you need them.
        </p>

        <p className="staff-para">
          We help businesses stay agile by providing dedicated IT resources that integrate seamlessly with your in-house team and culture.
        </p>

        <h3 className="staff-sub-heading">What We Offer</h3>

        <p className="staff-para">
          Whether you need short-term support or long-term team extensions, our flexible IT staffing model has you covered.
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
            Why Choose The IT Talent for Staff Augmentation?
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10">Our Staffing Process</h2>
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
          Let’s Strengthen Your Team—Together
        </h2>

        <p className="staff-para">
          Get access to highly skilled developers, engineers, testers, and IT professionals—exactly when you need them. With The IT Talent, you get the right talent without the hassle.
        </p>

        <p className="staff-para">Talk to us today and find the perfect match for your team.
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