// src/pages/Studio.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../Components/TextReveal';

// Page transition wrapper (ensures smooth exit/entry)
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
  const marqueeRef = useRef(null);

  useEffect(() => {
    // 1. Hero Video Parallax
    gsap.to('.studio-hero-video', {
      scrollTrigger: {
        trigger: '.studio-hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: '-30%',
    });

    // 2. "What we do" Staggered Animation on Scroll
    gsap.from('.service-item', {
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: 'power3.out',
    });
    
    // 3. Team Marquee Speed-up on Scroll
    if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
            scrollTrigger: {
                trigger: '.team-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5,
            },
            // This targets the CSS variable for animation duration to speed it up
            '--marquee-duration': '15s', 
        });
    }

  }, []);
  
  // Data for the page sections
  const services = ["Web & Mobile", "Design", "Branding", "Strategy"];
  const values = ["Wildly Creative", "Carefully Curated", "Authentically Human"];
  const team = [
    "https://a.storyblok.com/f/133769/300x300/46c27f3202/valentin-van-der-beken.jpg",
    "https://a.storyblok.com/f/133769/300x300/b8833c824c/robbert-schefman.jpg",
    "https://a.storyblok.com/f/133769/300x300/b8833c824c/robbert-schefman.jpg",
    "https://a.storyblok.com/f/133769/300x300/46c27f3202/valentin-van-der-beken.jpg",
  ];

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
          <TextReveal>Studio</TextReveal>
        </h1>
      </div>

      {/* About Section */}
      <div className="py-20 px-5 sm:px-32 text-center">
        <h2 className="text-3xl sm:text-6xl leading-tight sm:w-2/3 mx-auto">
          We are a digital design studio that partners with brands and businesses that create exceptional experiences.
        </h2>
      </div>

      {/* Services Section */}
      <div className="services-section py-20 px-5 sm:px-32">
        <h3 className="text-center text-4xl mb-10">What we do</h3>
        <div className="border-t border-b border-black/30">
          {services.map((service) => (
            <div key={service} className="service-item py-8 border-b border-black/30 last:border-b-0">
              <p className="text-2xl sm:text-4xl">{service}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Team Marquee Section */}
      <div className="team-section py-20 overflow-x-hidden">
        <div ref={marqueeRef} className="marquee flex gap-4 w-max animate-marquee">
          {team.concat(team).map((url, index) => (
            <div key={index} className="w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden flex-shrink-0">
              <img src={url} alt={`Team member ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        <h3 className="text-center text-4xl mt-10">Meet the Apes</h3>
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
