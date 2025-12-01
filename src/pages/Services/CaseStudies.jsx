import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '../../components/SEO';
import '../../style/services.css';

const boxes = [
  "Short-Term Experts", "Long-Term Team Extension", "Niche Technology Skills", "Remote & Onsite Talent"
];

const whyChoose = [
  { title: "Top 3% Pre-Vetted Talent", desc: "Only the best make it through our rigorous screening" },
  { title: "Delivery in 48 Hours", desc: "Get matched with experts in record time" },
  { title: "60% Cost Advantage", desc: "High-quality talent without premium agency fees" },
  { title: "Free Replacement Guarantee", desc: "Not satisfied? We replace at no extra cost" },
  { title: "Dedicated Success Manager", desc: "Your personal point of contact throughout" }
];

const process = [
  { num: "01", title: "Share Requirements", desc: "Tell us exactly what you need" },
  { num: "02", title: "Receive Matches", desc: "Get 3-5 vetted profiles in 48 hours" },
  { num: "03", title: "Interview & Select", desc: "You choose the perfect fit" },
  { num: "04", title: "Start Working", desc: "Seamless onboarding & instant productivity" }
];

const faqs = [
  { q: "How fast can I hire talent?", a: "Most positions are filled within 48-72 hours." },
  { q: "What if the talent doesn't work out?", a: "Free replacement within the first 14 days – zero risk to you." },
  { q: "Do you provide onsite resources?", a: "Yes – we offer remote, hybrid, and onsite talent as needed." }
];

export default function CaseStudies() {
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
            Scale Your Team<br />
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
          Struggling to find skilled developers, engineers, or IT experts fast?
          With The IT Talent’s Staff Augmentation services, you can quickly
          scale your team with pre-vetted, experienced professionals—exactly
          when and where you need them.
        </p>

        <p className="staff-para">
          We help businesses stay agile by providing dedicated IT resources that
          integrate seamlessly with your in-house team and culture.
        </p>

        <h3 className="staff-sub-heading">What We Offer</h3>

        <p className="staff-para">
          Whether you need short-term support or long-term team extensions, our
          flexible IT staffing model has you covered.
        </p>
      </motion.div>
    </section>




      {/* What We Offer - Clean Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Flexible Staffing Options</h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            From short-term support to long-term team members — we’ve got you covered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {boxes.map((item, i) => (
              <div key={i} className="group">
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-indigo-200">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl text-indigo-600">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Why Companies Choose The IT Talent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
            {whyChoose.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20">Our Simple Process</h2>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
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
          Scale Your Tech Teams with Top IT Talent—On Demand
        </h2>

        <p className="staff-para">
          Struggling to find skilled developers, engineers, or IT experts fast?
          With The IT Talent’s Staff Augmentation services, you can quickly
          scale your team with pre-vetted, experienced professionals—exactly
          when and where you need them.
        </p>

        <p className="staff-para">
          We help businesses stay agile by providing dedicated IT resources that
          integrate seamlessly with your in-house team and culture.
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