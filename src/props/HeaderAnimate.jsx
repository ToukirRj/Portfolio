import React, { useEffect } from 'react';

const HeaderAnimate = () => {
  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      const header = document.querySelector('.header');
      if (st > handleScroll.lastScrollTop) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      handleScroll.lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default HeaderAnimate;
//This is latest technology for the header sticky with conditionally animate
