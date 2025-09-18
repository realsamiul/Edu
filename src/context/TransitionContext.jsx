// src/context/TransitionContext.jsx
import React, { createContext, useState, useContext } from 'react';

const TransitionContext = createContext();

export const useTransitionContext = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
};
