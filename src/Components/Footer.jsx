// src/Components/Footer.jsx
import React from 'react';
import TextReveal from './TextReveal';
import { aboutSnippet, contactCTA } from '../data';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#070707] text-[#e0ccbb] py-20 px-5 sm:px-32">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
            <h2 className="text-4xl sm:text-6xl tracking-tighter leading-none"><TextReveal>{aboutSnippet.headline}</TextReveal></h2>
            <p className="mt-5 text-lg sm:text-xl">{aboutSnippet.body}</p>
            <a href={aboutSnippet.ctaHref} className="border-b border-[#e0ccbb] inline-block mt-5">
                {aboutSnippet.ctaText}
            </a>
        </div>
        <div>
            <h2 className="text-4xl sm:text-6xl tracking-tighter leading-none"><TextReveal>{contactCTA.headline}</TextReveal></h2>
            <p className="mt-5 text-lg sm:text-xl">{contactCTA.body}</p>
            <a href={contactCTA.ctaHref} className="border-b border-[#e0ccbb] inline-block mt-5">
                {contactCTA.ctaText}
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;