


// CustomCursor.js
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringLink, setHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnterLink = () => {
      setHoveringLink(true);
    };

    const handleMouseLeaveLink = () => {
      setHoveringLink(false);
    };

    document.addEventListener('mousemove', handleMouseMove);

    document.querySelectorAll('a').forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);

      document.querySelectorAll('a').forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);

  return <div className={`custom-cursor ${hoveringLink ? 'hovering-link' : ''}`} style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
};

export default CustomCursor;
