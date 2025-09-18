// src/Components/Work.jsx
import { motion } from "framer-motion";
import React from "react";
import TextReveal from "./TextReveal";
import { projects } from '../data'; // Import projects instead of services

const Work = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-52 py-20">
      <div className="featured flex items-center gap-3">
        <svg className="size-4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
        </svg>
        <h2 className="capitalize font-semibold text-sm">Featured Work</h2>
      </div>

      <div className="mt-10 sm:mt-20">
        <h2 className="text-7xl sm:text-[14rem] tracking-tight">
          <TextReveal>Work</TextReveal>
        </h2>
      </div>

      <div className="elems w-full mt-10 sm:mt-20 sm:flex sm:flex-wrap sm:justify-between">
        {projects.map((item) => (
          <a href={item.route} key={item.id} className="elem w-full sm:w-[48%] mb-10">
            <div className="image-container relative w-full h-[104vw] sm:h-[40vw] overflow-hidden">
              <motion.img
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ ease: "linear", duration: 0.2 }}
                className="w-full h-full object-cover"
                src={item.coverImage}
                alt={`Cover image for ${item.title}`}
              />
            </div>
            <div className="description mt-3">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm opacity-80">{item.shortBlurb}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Work;