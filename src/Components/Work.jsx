// src/Components/Work.jsx
import { motion } from "framer-motion";
import React from "react";
import TextReveal from "./TextReveal";

const Work = () => {
  const elems = [
    {
      heading: "Studio D",
      subHeading: "Urban and Landscape Design",
      image: "https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
    },
    {
      heading: "Rino & Pelle",
      subHeading: "Effortless chic lifestyle",
      image: "https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
    },
    {
      heading: "Aebele Interiors",
      subHeading: "Luxurious design experience",
      image: "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
    },
    {
      heading: "Pixelflakes",
      subHeading: "Architectural marketing agency",
      image: "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-52 py-20">
      <div className="featured flex items-center gap-3">
        <svg className="size-4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
        </svg>
        <h2 className="capitalize font-semibold text-sm">Featured Projects</h2>
      </div>

      <div className="mt-10 sm:mt-20">
        <h2 className="text-7xl sm:text-[14rem] tracking-tight">
          <TextReveal>Work</TextReveal>
        </h2>
        <p className="text-lg leading-snug sm:text-xl sm:w-2/3 mt-5">
          Highlights of cases that we passionately built with forward-thinking
          clients and friends over the years.
        </p>
      </div>

      <div className="elems w-full mt-10 sm:mt-20 sm:flex sm:flex-wrap sm:justify-between">
        {elems.map((item, index) => (
          <div key={index} className="elem w-full sm:w-[48%] mb-10">
            <div className="image-container relative w-full h-[104vw] sm:h-[40vw] overflow-hidden">
              <motion.img
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ ease: "linear", duration: 0.2 }}
                className="w-full h-full object-cover"
                src={item.image}
              />
            </div>
            <div className="description mt-3">
              <h3 className="font-semibold">{item.heading}</h3>
              <p className="text-sm opacity-80">{item.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
