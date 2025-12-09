import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import SEO from '../../components/SEO';
import '../../style/services.css';

const staffingOptions = [
  {
    title: "Custom Web Development",
    icon: "⚡",
    list: [
      "Bespoke Website Development",
      "Mobile-Responsive & SEO-Friendly Design",
      "CMS Development (WordPress, Joomla, Drupal)",
      "E-commerce Development (Shopify, WooCommerce, Magento)",
      "Progressive Web Applications (PWAs)"


    ]
  },
  {
    title: "Mobile App Development",
    icon: "👥",
    list: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform Development (Flutter, React Native)",
      "Enterprise App Development",
      "App UI/UX Design, Wireframing & Prototyping"


    ]
  },
  {
    title: "Full-Stack Development",
    icon: "🧬",
    list: [
      "Frontend: React, Angular, Vue.js",
      "Backend: Node.js, PHP, Python, .NET",
      "RESTful APIs & Custom Middleware",
      "Scalable Database Design (MySQL, MongoDB, PostgreSQL)",
      "Third-Party Integrations & Cloud Deployments"
    ]
  }
];

const whyChoose = [
  { title: " End-to-End Development Expertise", desc: "We manage the entire lifecycle—from idea to deployment and beyond." },
  { title: " Experienced Web & App Developers", desc: "Our team brings 14+ years of hands-on experience in developing scalable digital products." },
  { title: " Modern Tech Stack", desc: "We use the latest technologies, agile methodologies, and DevOps pipelines for rapid delivery." },
  { title: " SEO & Core Web Vitals Optimized", desc: "We follow technical SEO practices for fast-loading, crawlable, and mobile-friendly apps and websites." },
  { title: "Transparent Project Management", desc: "We work with real-time collaboration tools and give you full visibility at every stage." }
];

const process = [
  { num: "01", title: " Discover & Define", desc: "We gather requirements, research your audience, and define clear project goals." },
  { num: "02", title: " Plan & Prototype", desc: "We build wireframes, mockups, and MVPs to map out the user journey." },
  { num: "03", title: " Develop & Integrate", desc: "Our developers build robust frontend & backend systems and integrate APIs." },
  { num: "04", title: " Test & Launch", desc: "Rigorous QA, bug fixing, and smooth deployment on staging or live environments." }
];

const faqs = [
  { q: "Q1: How long does it take to build a website or mobile app? ", a: "Project timelines vary. Basic websites take 2–4 weeks. Complex mobile apps can take 8–16 weeks depending on features" },
  { q: "Q2: Will the app/website be optimized for SEO?", a: "Yes, we implement on-page SEO, use semantic HTML, and follow best practices for mobile responsiveness, speed, and structure" },
  { q: "Q3: Do you provide support and updates after launch? ", a: "Absolutely. We offer ongoing support, security updates, performance monitoring, and feature enhancements." }
];

export default function WebAppDevelopment() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <SEO
        title="Custom Web Application Development Services"
        description="Build scalable and secure custom web applications using modern full-stack technologies. Expert services for startups and enterprises."
      />

      {/* Hero - Light & Clean */}
      <section className="hero-content-web relative h-[50vh] bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('./images/career.jpg')] bg-cover bg-center opacity-3"></div>

        <div className="relative z-10 max-w-6xl px-6 mt-2">
          <h1 className="text-4xl md:text-4xl font-bold mt-2 text-gray-900 mb-3 leading-tight">
            Web & App Development<br />
            <span className="text-indigo-600">With Confidence</span>
          </h1>
          <p className="text-sm md:text-lg text-white mb-5 max-w-4xl mx-auto">
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
            Build Scalable, Secure & High-Performing Digital Solutions
          </h2>

          <p className="staff-para">
            Looking for a reliable web and mobile app development company? At The IT Talent, we help startups, enterprises, and growing businesses turn ideas into custom web applications, responsive websites, and high-performance mobile apps—built for scalability, speed, and user engagement.
          </p>

          <p className="staff-para">
            Our expert development team uses the latest technologies and frameworks to craft digital experiences that drive results.
          </p>

          <h3 className="staff-sub-heading">Our Web & App Development Services</h3>

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
                {/* {i < process.length - 0 && (
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
            Ready to create a powerful digital product? Partner with The IT Talent for scalable, SEO-friendly, and future-ready web and mobile app development solutions.
          </p>

          <p className="staff-para">Contact us today to schedule your free consultation
          </p>

        </motion.div>
      </section>



      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Grow Your Team?</h2>
          <p className="text-lg mb-6 max-w-4xl mx-auto opacity-90">
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