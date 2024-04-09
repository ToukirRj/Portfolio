
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
          <a onClick={scrollToTop} style={{display: isVisible ? 'flex' : 'none'}} className='relative overflow-hidden w-[46px] h-[46px] rounded-full bg-[#1F2937] items-center justify-center cursor-pointer border-2 border-[#1F2937]'>
              <svg className='relative z-10' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="#ffffff" d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"/></svg>
              <div className='absolute w-full left-0 bottom-0 bg-[#FB8245]' style={{height:`${scrollProgress * 100}%`}}></div>
          </a>
      </div>
  );
};

export default ScrollToTop;
