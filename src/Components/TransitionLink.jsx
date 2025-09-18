// src/Components/TransitionLink.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTransitionContext } from '../context/TransitionContext';

const TransitionLink = ({ to, children, className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsTransitioning } = useTransitionContext();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === to) return; // Don't transition to the same page

    setIsTransitioning(true);

    setTimeout(() => {
      navigate(to);
      // After navigation, wait a moment before finishing the transition out
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 800); // Must match the overlay duration
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
