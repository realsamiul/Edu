// src/Components/TextReveal.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TextReveal = ({ children, className }) => {
  const el = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // This GSAP animation will be triggered when the element scrolls into view
    gsap.from(el.current, {
      scrollTrigger: {
        trigger: el.current,
        start: 'top 90%', // Starts animation when 90% of the element is visible
        toggleActions: 'play none none none',
      },
      y: '110%',
      rotate: 10,
      duration: 1.2,
      ease: 'power4.out',
    });
  }, []);

  return (
    <span className={`block overflow-hidden ${className || ''}`}>
      <span ref={el} className="inline-block origin-left">
        {children}
      </span>
    </span>
  );
};

export default TextReveal;
