// src/Components/TransitionLink.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTransitionContext } from '../context/TransitionContext';

const TransitionLink = ({ to, children, className }) => {
  const navigate = useNavigate();
  const { setIsTransitioning } = useTransitionContext();

  const handleClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);

    setTimeout(() => {
      navigate(to);
      // Let the new page mount, then start the exit transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 800); // This timeout should match the transition duration
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
