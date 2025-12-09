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
      "ETL/ELT Development",
      "Batch & Real-Time Processing",
      "Data Ingestion from APIs, Databases, SaaS Tools"
    ]
  },
  {
    title: "Data Warehousing & Lakehouse Solutions",
    icon: "👥",
    list: [
      "Cloud Data Warehouses (Snowflake, BigQuery, Redshift)",
      "Data Lake Architecture (AWS S3, Azure Data Lake, Delta Lake)",
      "Data Modeling & Optimization"
    ]
  },
  {
    title: "Streaming & Real-Time Analytics",
    icon: "🧬",
    list: [
      "Apache Kafka, Spark Streaming",
      "Real-Time Dashboards & Alerts",
      "Event-Driven Architectures"
    ]
  },
  {
    title: "Cloud-Based Data Engineering",
    icon: "🧬",
    list: [
      "AWS Glue, Azure Data Factory, GCP Dataflow",
      "Scalable Cloud Architecture",
      "Cost-Effective Data Processing"
    ]
  }
];

const whyChoose = [
  { title: "Cloud-Native Experts", desc: "We build scalable data platforms using AWS, Azure, and Google Cloud technologies." },
  { title: "Faster Time to Insights", desc: "Streamlined pipelines and automation help you make faster, smarter business decisions." },
  { title: "End-to-End Delivery", desc: "From consultation to deployment and ongoing support—we handle it all." },
  { title: "Enterprise-Grade Solutions", desc: "We ensure your data infrastructure is secure, compliant, and enterprise-ready." },
  { title: "Experienced Team", desc: "Our data engineers have deep expertise across multiple industries and platforms." }
];

const process = [
  { num: "01", title: "Data Discovery & Assessment", desc: "We analyze your current data sources, goals, and challenges." },
  { num: "02", title: "Architecture Design", desc: "We design a custom, scalable data architecture tailored to your business." },
  { num: "03", title: " Pipeline Development & Integration", desc: "We build robust, automated data pipelines and integrate them across your systems." },
  { num: "04", title: " Testing & Optimization", desc: "We validate performance, run quality checks, and optimize for cost and speed." }
];

const faqs = [
  { q: "Q1: What platforms do you work with? ", a: " We work with all major platforms like AWS, Azure, GCP, Snowflake, BigQuery, Redshift, Databricks, and more." },
  { q: "Q2: Can you migrate legacy data infrastructure to the cloud? ", a: "Yes, we specialize in modernizing and migrating legacy data systems to secure, cloud-based environments." },
  { q: "Q3: Do you support real-time data processing? ", a: " Absolutely. We build real-time data pipelines using tools like Apache Kafka, Spark, and Flink." }
];

export default function DataEngineering() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <SEO
        title="Advanced Data Engineering & Analytics Solutions"
        description="Unlock the power of your data with expert data pipeline development, warehousing, ETL/ELT, and business intelligence (BI) solutions."
      />

      {/* Hero - Light & Clean */}
      <section className="hero-content-web relative h-[50vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2934&auto=format&fit=crop')] bg-cover bg-center opacity-2"></div>

        <div className="relative z-10 max-w-6xl px-6 mt-2">
          <h1 className="text-4xl md:text-4xl mt-2 font-bold text-gray-900 mb-3 leading-tight">
            Data Engineering<br />
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
            Transform Raw Data into Actionable Insights
          </h2>

          <p className="staff-para">
            At The IT Talent, we empower businesses to harness the full potential of their data. Our Data Engineering services are designed to help you collect, clean, organize, and optimize data—making it ready for real-time analytics, machine learning, and smarter decision-making.
          </p>

          <p className="staff-para">
            From setting up data pipelines to building modern data warehouses, we help you create a strong, scalable foundation for all your data-driven initiatives.
          </p>

          <h3 className="staff-sub-heading">What We Offer</h3>

          <p className="staff-para">
            Our end-to-end data engineering services ensure your data is always accessible, accurate, and actionable.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Why Choose The IT Talent for Data Engineering?
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {process.map((step, i) => (
              <div key={i} className="text-center relative">
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
            Ready to Unlock the Power of Your Data?
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Grow Your Team?</h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto opacity-90">
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