// src/pages/OmeraIntegratedAI.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../Components/TextReveal';
import SEO from '../Components/SEO'; // Import SEO

const projectData = {
  seo: {
    title: "Omera Integrated AI Program · Case Study",
    description: "Unified freight, demand, cylinder lifecycle, and export workflows in one decision layer for a leading energy company."
  },
  hero: {
    title: "Omera Integrated AI Program",
    tagline: "Freight rates, domestic LPG demand, cylinder lifecycle, and export workflows—integrated for faster, better decisions.",
    heroImage: "https://images.unsplash.com/photo-1664639909302-4a7a8a10d35d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  overview: {
    summary: "A unified analytics layer aligns export timing, production planning, and cylinder management to improve margins and decision speed.",
    context: "Multiple teams were operating with siloed data across freight, demand, production, and distribution, slowing response and obscuring trade-offs."
  },
  objectives: [
    "Reduce exposure to freight rate volatility with scenario-aware planning",
    "Align production with domestic seasonality and price signals",
    "Track cylinder inventory, defects, and turnaround time across the lifecycle",
    "Coordinate export workflows and documentation with live status"
  ],
  approach: [
    "Predictive models for rate scenarios and demand curves tuned to operational horizons",
    "Pipelines harmonizing plant, logistics, and sales data into a shared schema",
    "Executive dashboards with thresholds, alerts, and drill-down diagnostics"
  ],
  results: [
    "Improved export timing and lane selection",
    "Higher on-time production and reduced defect incidence",
    "Faster cross-functional decisions through shared visibility"
  ],
  features: [
    "Freight Scenario Explorer",
    "Demand Heatmaps and Seasonality Views",
    "Cylinder Lifecycle Tracker",
    "Export Workflow Console"
  ],
  techStack: ["Python", "Time-series modeling", "React", "GSAP", "REST APIs"]
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

const OmeraIntegratedAI = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ProjectPage />
    </motion.div>
);

export default OmeraIntegratedAI;