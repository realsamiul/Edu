// src/Components/Hero.jsx
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import TextReveal from "./TextReveal";
import { heroData } from '../data';

const Hero = () => {
  const { headline, subheadline, ctaText, ctaHref, backgroundImage } = heroData;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".picture img", {
      scrollTrigger: {
        trigger: ".picture",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 1.25,
    });

    gsap.to(".scroll-down", {
      scrollTrigger: {
        trigger: ".hero-main",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
      opacity: 0,
    });
  }, []);

  return (
    <div className="hero-main relative w-full h-[150vh] sm:h-[200vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={backgroundImage}
          alt="Venice Grand Canal"
        />
      </div>

      <div className="absolute w-full top-0 left-0 text-white">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-32">
          <div className="headings mt-72 sm:mt-96">
              <h1 className="text-6xl sm:text-[10rem] tracking-tighter leading-none">
                <TextReveal>{headline}</TextReveal>
              </h1>
          </div>
          <div className="para mt-5 sm:mt-10 sm:w-2/3">
              <p className="font-medium text-lg sm:text-2xl leading-snug">
                <TextReveal>{subheadline}</TextReveal>
              </p>
          </div>
          <div className="mt-20 sm:mt-32 sm:w-1/3">
            <a
              className="border-b sm:text-lg border-white inline-block mt-5"
              href={ctaHref}
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
      <span className="absolute scroll-down hidden sm:block z-[2] right-[10vh] bottom-[10vh] text-white text-sm">
        Scroll to explore
      </span>
    </div>
  );
};

export default Hero;
