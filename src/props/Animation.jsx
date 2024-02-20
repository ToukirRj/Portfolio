import React, { useEffect, useState } from 'react';

const Animation = ({ children }) => {
    const [animatedBoxes, setAnimatedBoxes] = useState([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            } else {
              entry.target.classList.remove('animated');
            }
          });
        },
        { threshold: 0.5 }
      );
  
      const handleScroll = () => {
        const st = window.scrollY || document.documentElement.scrollTop;
        if (st > 200) {
          animatedBoxes.forEach((box) => {
            const rect = box.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight) {
              box.classList.add('animated');
            }
          });
        } else {
          animatedBoxes.forEach((box) => {
            box.classList.remove('animated');
          });
        }
      };
  
      const boxes = document.querySelectorAll('.animatable');
      setAnimatedBoxes(boxes);
      boxes.forEach((box) => {
        observer.observe(box);
      });
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return <div>{children}</div>;
  };


export default Animation;