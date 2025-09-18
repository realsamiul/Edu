// src/pages/PharmaDemandForecasting.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from '../Components/TextReveal';

const projectData = {
  hero: {
    title: "Pharma Demand Forecasting Platform",
    tagline: "City-level demand projections enabling smarter provisioning, fewer expiries, and better service levels.",
    heroImage: "https://images.unsplash.com/photo-1584982232504-625470a1a89c?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  overview: {
    summary: "A forecasting platform standardizes planning with horizon-specific models, error bands, and SKU prioritization.",
    context: "Distributors and manufacturers required granular projections to balance availability with working-capital efficiency."
  },
  objectives: [
    "Forecast demand by city and channel for 8–12 week horizons",
    "Improve stock allocation and reduce expiries",
    "Generate executive-ready supply plans and sensitivities"
  ],
  approach: [
    "Time-series models with exogenous features for seasonality, events, and pricing",
    "Data harmonization from sales systems and retail proxies",
    "Validation dashboards with MAE/SMAPE tracking and confidence intervals"
  ],
  results: [
    "Reduced stockouts and improved capital turns",
    "Standardized planning cadence and model reviews",
    "Faster adjustments to promotions and regulatory shifts"
  ],
  features: [
    "City Comparison Views",
    "SKU Prioritization and Replenishment",
    "Supply Plan Generator"
  ],
  techStack: ["Python forecasting", "React", "Automated reporting"]
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

const PharmaDemandForecasting = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <ProjectPage />
    </motion.div>
);

export default PharmaDemandForecasting;