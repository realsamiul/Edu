// src/Components/Footer.jsx
import React from 'react';
import TextReveal from './TextReveal';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#070707] text-[#e0ccbb] py-20 px-5 sm:px-32 overflow-hidden">
      {/* The video element has been removed */}
      <div className="relative z-10">
        <div className="sm:w-1/2">
            <h2 className="text-6xl sm:text-[9rem] tracking-tighter leading-none"><TextReveal>Our</TextReveal></h2>
            <h2 className="text-6xl sm:text-[9rem] tracking-tighter leading-none"><TextReveal>Story</TextReveal></h2>
            <p className="mt-5 text-lg sm:text-xl">
                The story behind Exo Ape is one of exploration, creativity and curiosity.
            </p>
        </div>
        {/* We can add footer links here later */}
      </div>
    </footer>
  );
};

export default Footer;
