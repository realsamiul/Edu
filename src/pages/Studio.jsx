// src/pages/Studio.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../Components/TextReveal';

const transition = (OgComponent) => {
  return () => (
    <motion.div
      className="bg-white text-black" // The Studio page has a light theme
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }} // Delay entry to sync with page transition
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <OgComponent />
    </motion.div>
  );
};

const StudioPage = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Hero Video Parallax
    gsap.to('.studio-hero-video', {
      scrollTrigger: {
        trigger: '.studio-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: '-30%',
    });
  }, []);
  
  // Data for the page sections
  const values = ["Strategic Intelligence", "Product Execution", "AI-Driven Analytics"];

  return (
    <div className="studio-page">
      {/* Hero Section */}
      <div className="studio-hero relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          className="studio-hero-video absolute top-0 left-0 w-full h-[130%] object-cover opacity-70"
          src="https://a.storyblok.com/f/133769/x/469201a3fb/studio-hero.mp4"
          autoPlay loop muted playsInline
        ></video>
        <h1 className="text-6xl sm:text-[14rem] tracking-tighter z-10 text-white">
          <TextReveal>About</TextReveal>
        </h1>
      </div>

      {/* About Section */}
      <div className="py-20 px-5 sm:px-32 text-center">
        <h2 className="text-3xl sm:text-6xl leading-tight sm:w-2/3 mx-auto">
          Blending AI, economics, and product execution to turn complex business challenges into clear, measurable decisions.
        </h2>
      </div>

      {/* Values Section */}
      <div className="values-section py-20 px-5 sm:px-32 text-center">
        {values.map((value) => (
          <h2 key={value} className="text-5xl sm:text-8xl my-4">
            <TextReveal>{value}</TextReveal>
          </h2>
        ))}
      </div>
    </div>
  );
};

const Studio = transition(StudioPage);
export default Studio;