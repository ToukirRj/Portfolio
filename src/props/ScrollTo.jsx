
import { useState, useEffect } from 'react';

const ScrollTo = () => {
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
          <button onClick={scrollToTop} style={{display: isVisible ? 'flex' : 'none'}} className='relative overflow-hidden w-[46px] h-[46px] rounded-full bg-[#1F2937]/[.35] shadow-lg items-center justify-center cursor-pointer'>
              <svg className='relative z-10' xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="#ffffff" d="m12 6l.354-.354L12 5.293l-.354.353zm-.5 12a.5.5 0 0 0 1 0zm4.854-8.354l-4-4l-.708.708l4 4zm-4.708-4l-4 4l.708.708l4-4zM11.5 6v12h1V6z"/></svg>
              <div className='absolute w-full left-0 bottom-0 bg-[#17B057]' style={{height:`${scrollProgress * 100}%`}}></div>
          </button>
      </div>
  );
};

export default ScrollTo;
