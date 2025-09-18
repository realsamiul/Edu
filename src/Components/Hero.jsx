// src/Components/Hero.jsx
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import TextReveal from "./TextReveal";

const Hero = () => {
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
    <div className="hero-main relative w-full h-[150vh] sm:h-[250vh]">
      <div className="picture w-full h-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt="Venice Grand Canal"
        />
      </div>

      <div className="absolute w-full top-0 left-0 text-white">
        <div className="max-w-screen-2xl mx-auto px-5 sm:px-32">
          <div className="para mt-72 sm:mt-96">
            <p className="font-medium text-lg sm:text-2xl leading-snug">
              <TextReveal>Global digital design studio partnering</TextReveal>
            </p>
            <p className="font-medium text-lg sm:text-2xl leading-snug">
              <TextReveal>with brands and businesses that create</TextReveal>
            </p>
            <p className="font-medium text-lg sm:text-2xl leading-snug">
              <TextReveal>exceptional experiences where people</TextReveal>
            </p>
            <p className="font-medium text-lg sm:text-2xl leading-snug">
              <TextReveal>live, work, and unwind.</TextReveal>
            </p>
          </div>

          <div className="headings mt-5 sm:mt-10">
            <h1 className="text-6xl sm:text-[14rem] tracking-tighter leading-none">
              <TextReveal>Digital</TextReveal>
            </h1>
            <h1 className="text-6xl sm:text-[14rem] tracking-tighter leading-none">
              <TextReveal>Design</TextReveal>
            </h1>
            <h1 className="text-6xl sm:text-[14rem] tracking-tighter leading-none">
              <TextReveal>Experience</TextReveal>
            </h1>
          </div>

          <div className="mt-20 sm:mt-32 sm:w-1/3">
            <p className="font-medium text-lg sm:text-2xl leading-snug">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <a
              className="border-b sm:text-lg border-white inline-block mt-5"
              href="#"
            >
              The Studio
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
