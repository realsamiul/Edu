// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/Home";
import Studio from "./pages/Studio"; // We will create this next
import Navbar from "./Components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useTransitionContext } from "./context/TransitionContext";
import TransitionOverlay from "./Components/TransitionOverlay";

const App = () => {
  const location = useLocation();
  const { isTransitioning } = useTransitionContext();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-zinc-900 text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        {isTransitioning && <TransitionOverlay />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
