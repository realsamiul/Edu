// src/Components/TextReveal.jsx
import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

const TextReveal = ({ children, className }) => {
  return (
    <span className={`overflow-hidden inline-block ${className}`}>
      <motion.span
        initial={{ y: "110%", rotate: 10 }}
        whileInView={{ y: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ ease: Power4.easeInOut, duration: 1.2 }}
        className="inline-block origin-left"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
