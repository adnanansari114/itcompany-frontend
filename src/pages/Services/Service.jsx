import React from "react";
import { motion } from "framer-motion";
import "../../style/services.css";
import { FaArrowRight, FaCode, FaPaintBrush, FaBullhorn, FaDatabase, FaChartLine } from "react-icons/fa";
import {
  Brain,
  Database,
  Cloud,
  Globe,
  Users,
  Wrench
} from 'lucide-react';
import ReadySection from "../../components/ReadySection";


export default function Service() {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence",
      desc: "Drive smarter decisions and intelligent automation with AI solutions tailored to your business needs.",
      points: ["Machine Learning | Predictive Analytics", "Chatbots | NLP"],
      link: "/services/artificial-intelligence",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Data Engineering",
      desc: "Unlock the true power of your data. We build modern data pipelines and architectures that support business intelligence, analytics, and AI.",
      points: ["ETL Development | Data Lakes | Big Data Solutions"],
      link: "/services/data-engineering",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud Engineering & DevOps",
      desc: "Accelerate innovation with cloud-native solutions and DevOps automation. Our team ensures reliable, scalable, and secure cloud infrastructure.",
      points: ["AWS | Azure | CI/CD Pipelines | Kubernetes | Infrastructure as Code"],
      link: "/services/cloud-devops",
      color: "bg-gradient-to-r from-[#ffe0e0] via-[#ff9999] to-[#ff6666]"
    },
    {
      icon: Globe,
      title: "Web & Apps Development",
      desc: "Turn ideas into powerful digital products. We design and develop scalable, secure, and user-centric websites and mobile applications.",
      points: ["Custom Web Development | Android & iOS Apps | PWAs"],
      link: "/services/web-app-development",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Staff Augmentation",
      desc: "Access top-tier IT professionals without the time and cost of full-time hiring. From developers to project managers, we help you scale quickly.",
      points: ["On-Demand Talent | Flexible Engagement | Quick Onboarding"],
      link: "/services/staff-augmentation",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Wrench,
      title: "Maintenance and Support",
      desc: "Keep your systems up and running with our 24/7 maintenance and technical support services. We ensure performance, security, and reliability.",
      points: ["Bug Fixes | Monitoring | Upgrades | SLA-Based Support"],
      link: "/services/maintenance-support",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <>
      <SEO
        title="Full-Spectrum IT Services: Staffing, AI, Cloud & Development"
        description="Explore the comprehensive suite of IT services from The IT Talent, including expert staffing, data engineering, cloud solutions, and maintenance support."
        canonicalUrl="https://www.theittalent.com/services"
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2455a4] via-[#1e3a8a] to-[#0f1f4b] text-white py-24">
        <div className="service-container">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-pink-500 text-white text-xs font-semibold rounded-full">We Are IT Guidance</span>
                </div>

                <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                  Empowering Businesses<br />
                  Through <span class="text-[#f0851a]">End-to-End</span> IT Solutions
                </h1>

                <p className="text-sm md:text-sm text-gray-100 leading-relaxed">
                  At The IT Talent, we bring <strong>14+ years of experience</strong> in delivering high-quality,
                  result-driven IT services tailored to your business goals. From custom software development
                  to strategic staff augmentation, we help you innovate, scale, and stay ahead in a fast-changing
                  digital world. Whether you're a startup, enterprise, or growing business—our solutions are
                  designed to meet your needs with flexibility, speed, and technical precision.
                </p>

                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="/contact" className="inline-block px-5 py-3 md:px-10 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all transform hover:scale-105 shadow-xl">
                    TALK TO AN EXPERT →
                  </a>
                  <a href="/webappdevelopment" className="inline-block px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-purple-600 transition-all">
                    Explore Services
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-400 rounded-full opacity-30 blur-3xl"></div>

                <img
                  src="/images/gallery1.jpg"
                  alt="Developer working on IT solutions"
                  className="service-img relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full h-32 md:h-48 fill-white">
            <path d="M0,100 C320,200 1120,0 1440,100 L1440,200 L0,200 Z"></path>
          </svg>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="service-container">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-pink-100 text-pink-600 text-sm font-semibold rounded-full mb-4">
                Our Specialize
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                What We Offer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                  >

                    <div className={`h-2 bg-gradient-to-r ${service.color}`} />

                    <div className="p-4">

                      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={32} />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.desc}
                      </p>

                      <ul className="space-y-2 mb-5">
                        {service.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-sm text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <a
                        href={service.link}
                        className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all duration-300"
                      >
                        Explore More →
                      </a>
                    </div>

                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="why-us container">
        <div className="why-left">
          <h4 className="bg-heading">WHY US BETTER</h4>
          <h2>Why Our Services are Better Than Others? </h2>
          <p>
            From planning to execution, we bring clarity, professionalism and a passion to help
            businesses grow with world-class digital solutions.
          </p>

          <ul className="why-list">
            <li>✔ Experienced Talent Pool</li>
            <li>✔ Flexible cooperation</li>
            <li>✔ On-time Delivery</li>
            <li>✔ Poven Results</li>
            <li>✔ Secure by Design</li>
            <li>✔ Agile & Scalable</li>
          </ul>
        </div>

        <motion.div
          className="why-img-box"
          whileHover={{ x: 20 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg"
            alt="Why us"
          />
        </motion.div>
      </section>
      <ReadySection />
    </>
  );
}
