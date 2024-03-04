
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(scrollY / documentHeight, 1);
    setScrollProgress(progress);
    setIsVisible(scrollY > 100); // Adjust threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setScrollProgress(0);
  };

  return (
      <div className='fixed right-[20px] bottom-[20px] z-50'>
          <button onClick={scrollToTop} style={{display: isVisible ? 'flex' : 'none'}} className='relative overflow-hidden w-[46px] h-[46px] rounded-full bg-[#fff]/[0.15] items-center justify-center cursor-pointer'>
              
              <div className='absolute w-full left-0 bottom-0 bg-gradient-to-r from-[#0FB880] to-[#ff9075]' style={{height:`${scrollProgress * 100}%`}}></div>
          </button>
      </div>
  );
};

export default ScrollToTop;
