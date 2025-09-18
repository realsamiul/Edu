// src/Components/Navbar.jsx
import React from 'react';
import TransitionLink from './TransitionLink';

const Navbar = () => {
  return (
    <div className="w-full fixed z-[999] p-5 sm:p-10">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-white">
        <TransitionLink to="/" className="logo text-2xl font-semibold">
          Samiul Karim
        </TransitionLink>

        <div className="links hidden sm:flex items-center gap-10">
          <TransitionLink to="/" className="text-sm">Home</TransitionLink>
          <TransitionLink to="/studio" className="text-sm">About</TransitionLink>
          <a href="#" className="text-sm">Contact</a>
        </div>
        <div className="sm:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;