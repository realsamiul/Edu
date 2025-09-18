// src/Components/TransitionOverlay.jsx
import React from 'react';
import { motion } from 'framer-motion';

const transitionEase = [0.22, 1, 0.36, 1]; // This is the original site's ease curve

const TransitionOverlay = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black origin-bottom z-[9999]"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: transitionEase }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-black origin-top z-[9999]"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: transitionEase }}
      />
    </>
  );
};

export default TransitionOverlay;
