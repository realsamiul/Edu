// src/pages/OmeraIntegratedAI.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../Components/TextReveal';

const projectData = {
  hero: {
    title: "Omera Integrated AI Program",
    tagline: "Freight rates, domestic LPG demand, cylinder lifecycle, and export workflows—integrated for faster, better decisions.",
    heroImage: "/images/projects/omera/hero.jpg"
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

const ProjectPage = () => {
    return (
      <div className="studio-page bg-white text-black">
        <div className="studio-hero relative h-screen w-full flex items-center justify-center overflow-hidden">
          <img
            className="studio-hero-video absolute top-0 left-0 w-full h-full object-cover opacity-70"
            src={projectData.hero.heroImage}
          />
          <div className="z-10 text-white text-center">
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
        <div className="services-section py-20 px-5 sm:px-32">
          <h3 className="text-center text-4xl mb-10">Objectives</h3>
          <div className="border-t border-b border-black/30">
            {projectData.objectives.map((item, index) => (
              <div key={index} className="service-item py-8 border-b border-black/30 last:border-b-0">
                <p className="text-2xl sm:text-3xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
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
