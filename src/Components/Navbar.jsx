// src/Components/Navbar.jsx
import React, { useState } from 'react';
import TransitionLink from './TransitionLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed z-[999] p-5 sm:p-10">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-white">
        <TransitionLink to="/" className="logo text-2xl font-semibold">
          Samiul Karim
        </TransitionLink>

        {/* Desktop Links */}
        <div className="links hidden sm:flex items-center gap-10">
          <TransitionLink to="/" className="text-sm">Home</TransitionLink>
          <TransitionLink to="/work" className="text-sm">Work</TransitionLink> {/* Updated Link */}
          <a href="#" className="text-sm">Contact</a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="sm:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="sm:hidden fixed top-0 left-0 w-full h-full bg-zinc-900 flex flex-col items-center justify-center space-y-8">
          <TransitionLink to="/" onClick={() => setIsOpen(false)} className="text-3xl">Home</TransitionLink>
          <TransitionLink to="/work" onClick={() => setIsOpen(false)} className="text-3xl">Work</TransitionLink>
          <a href="#" onClick={() => setIsOpen(false)} className="text-3xl">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;