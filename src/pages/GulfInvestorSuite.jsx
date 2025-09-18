// src/pages/GulfInvestorSuite.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../Components/TextReveal';
import SEO from '../Components/SEO'; // Import SEO

const projectData = {
  seo: {
    title: "Gulf Investor Operators Suite · Case Study",
    description: "Price intelligence MVP, tri-dialect Arabic chatbot, logistics SaaS, and compliance workflows for Gulf region operators."
  },
  hero: {
    title: "Gulf Investor Operators Suite",
    tagline: "Price intelligence MVP, tri‑dialect Arabic chatbot, logistics SaaS, and compliance workflows.",
    heroImage: "https://images.unsplash.com/photo-1600880292210-859b242371ad?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  overview: {
    summary: "Rapid prototyping de-risks investment theses with real user flows across data collection, multilingual AI, and operator tooling.",
    context: "Operators needed practical tools to monitor prices, converse in Arabic dialects, manage capacity, and automate compliance steps."
  },
  objectives: [
    "Aggregate price data and surface guided recommendations",
    "Enable tri‑dialect Arabic chatbot for customer and operator tasks",
    "Provide logistics capacity visibility and SLA tracking",
    "Automate compliance documentation and audit trails"
  ],
  approach: [
    "Lean MVPs with manual ingestion and guided AI filters first",
    "Dialect-aware prompt engineering and retrieval",
    "Modular SaaS with role-based access and event logging"
  ],
  results: [
    "Validated user flows and prioritized features",
    "Faster time-to-insight for operators and analysts",
    "Clear upgrade path to automation and integrations"
  ],
  features: [
    "Price Monitor and Reco Engine",
    "Arabic Chatbot Console",
    "Capacity Board",
    "Compliance Case Queue"
  ],
  techStack: ["React", "GSAP", "Python/Node services", "Multilingual LLM orchestration"]
};

const Section = ({ title, data }) => (
    <div className="services-section py-20 px-5 sm:px-32">
        <h3 className="text-center text-4xl mb-10">{title}</h3>
        <div className="border-t border-b border-black/30">
        {data.map((item, index) => (
            <div key={index} className="service-item py-8 border-b border-black/30 last:border-b-0">
            <p className="text-2xl sm:text-3xl">{item}</p>
            </div>
        ))}
        </div>
    </div>
);

const ProjectPage = () => {
    return (
        <div className="studio-page bg-white text-black">
          <SEO title={projectData.seo.title} description={projectData.seo.description} />
          <div className="studio-hero relative h-screen w-full flex items-center justify-center overflow-hidden">
            <img
              className="studio-hero-video absolute top-0 left-0 w-full h-full object-cover"
              src={projectData.hero.heroImage}
              alt={projectData.hero.title}
            />
            <div className="z-10 text-white text-center bg-black bg-opacity-50 p-10 rounded-lg">
              <h1 className="text-4xl sm:text-8xl tracking-tighter">
                <TextReveal>{projectData.hero.title}</TextReveal>
              </h1>
              <p className="mt-4 text-lg sm:text-2xl sm:w-2/3 mx-auto">{projectData.hero.tagline}</p>
            </div>
          </div>
          <div className="py-20 px-5 sm:px-32 text-center">
              <h2 className="text-3xl sm:text-5xl leading-tight sm:w-2/3 mx-auto">{projectData.overview.summary}</h2>
              <p className="mt-4 text-lg">{projectData.overview.context}</p>
          </div>
          <Section title="Objectives" data={projectData.objectives} />
          <Section title="Approach" data={projectData.approach} />
          <Section title="Results" data={projectData.results} />
          <Section title="Features" data={projectData.features} />
          <Section title="Tech Stack" data={projectData.techStack} />
        </div>
      );
};

const GulfInvestorSuite = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ProjectPage />
    </motion.div>
);

export default GulfInvestorSuite;