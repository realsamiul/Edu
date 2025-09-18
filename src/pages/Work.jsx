// src/pages/Work.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TextReveal from '../Components/TextReveal';
import { services } from '../data';

// A reusable component for each service section with a parallax background
const ServiceSection = ({ service }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.fromTo(
      imageRef.current,
      { yPercent: -15 },
      { yPercent: 15, ease: 'none' }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        ref={imageRef}
        src={service.backgroundImage}
        alt={service.title}
        className="absolute top-0 left-0 w-full h-[130%] object-cover"
      />
      <div className="relative z-20 text-center px-5">
        <h2 className="text-5xl sm:text-8xl font-bold tracking-tighter">
          <TextReveal>{service.title}</TextReveal>
        </h2>
        <p className="mt-4 text-lg sm:text-2xl max-w-3xl mx-auto opacity-90">
          {service.valueProp}
        </p>
        <div className="mt-8">
            {service.bullets.map((bullet, index) => (
                <p key={index} className="text-md sm:text-lg opacity-80">{bullet}</p>
            ))}
        </div>
      </div>
    </section>
  );
};


const WorkPage = () => {
  return (
    <div className="work-page bg-black">
      {/* Hero Section for the Work Page */}
      <div className="relative h-[80vh] w-full flex items-center justify-center text-center text-white bg-black">
         <h1 className="text-6xl sm:text-[14rem] tracking-tighter z-10">
          <TextReveal>Services</TextReveal>
        </h1>
      </div>

      {/* Render a section for each service */}
      {services.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </div>
  );
};

// Page transition wrapper
const transition = (OgComponent) => {
  return () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <OgComponent />
    </motion.div>
  );
};

const Work = transition(WorkPage);
export default Work;