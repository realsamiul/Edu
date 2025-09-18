import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TextReveal = ({ children, className }) => {
  const el = useRef(null);

  useEffect(() => {
    gsap.from(el.current, {
      y: '110%',
      rotate: 10,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el.current,
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <span className={`block overflow-hidden ${className || ''}`}>
      <span ref={el} className="inline-block origin-left">
        {children}
      </span>
    </span>
  );
};

export default TextReveal;
