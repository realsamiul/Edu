// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Home from "./pages/Home";
import Studio from "./pages/Studio";
import Navbar from "./Components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useTransitionContext } from "./context/TransitionContext";
import TransitionOverlay from "./Components/TransitionOverlay";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Footer from "./Components/Footer";
import OmeraIntegratedAI from "./pages/OmeraIntegratedAI";
import PharmaDemandForecasting from "./pages/PharmaDemandForecasting";
import GulfInvestorSuite from "./pages/GulfInvestorSuite";

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
          <Route path="/projects/omera-integrated-ai" element={<OmeraIntegratedAI />} />
          <Route path="/projects/pharma-demand-forecasting" element={<PharmaDemandForecasting />} />
          <Route path="/projects/gulf-investor-suite" element={<GulfInvestorSuite />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default App;
