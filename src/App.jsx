// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work"; // Renamed from Studio
import Navbar from "./Components/Navbar";
import { AnimatePresence } from "framer-motion";
import { useTransitionContext } from "./context/TransitionContext";
import TransitionOverlay from "./Components/TransitionOverlay";
import { SpeedInsights } from "@vercel/speed-insights/react";
import OmeraIntegratedAI from "./pages/OmeraIntegratedAI";
import PharmaDemandForecasting from "./pages/PharmaDemandForecasting";
import GulfInvestorSuite from "./pages/GulfInvestorSuite";
import Footer from "./Components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  const location = useLocation();
  const { isTransitioning } = useTransitionContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    }, 1000); 

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="bg-zinc-900 text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        {isTransitioning && <TransitionOverlay />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} /> {/* Route updated from /studio */}
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