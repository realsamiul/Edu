// src/Components/Work.jsx
import React from "react";
import TextReveal from "./TextReveal";
import { services } from "../data";

const Work = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 sm:px-52 py-20">
      <div className="featured flex items-center gap-3">
        <svg className="size-4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor"></path>
        </svg>
        <h2 className="capitalize font-semibold text-sm">Services</h2>
      </div>

      <div className="mt-10 sm:mt-20">
        <h2 className="text-7xl sm:text-[14rem] tracking-tight">
          <TextReveal>What We Do</TextReveal>
        </h2>
      </div>

      <div className="elems w-full mt-10 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((item) => (
          <div key={item.id} className="elem w-full mb-10">
            <div className="description mt-3">
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="text-lg opacity-80 mt-2">{item.valueProp}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="text-md opacity-70">{bullet}</li>
                ))}
              </ul>
              <a href={item.href} className="border-b border-white inline-block mt-5">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;