
// MainLayout.jsx
import Header from './Header';
import Footer from './Footer';
import CanvasAnimation from '../props/CanvasAnimation';
import RightOffCanvas from '../props/RightOffCanvas';
import ScrollTo from '../props/ScrollTo';
import PropTypes from 'prop-types';
import { useState , useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import luxy from 'luxy.js';

function MainLayout({ children }) {
  useEffect(() => {
      AOS.init();
  }, []);

  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasOpen(prev => !prev);
  };

  useEffect(() => {
    // Initialize luxy.js
    luxy.init({
      wrapperSpeed: 0.015,
      wrapper: '#luxy',
    });

    // Clean up by resetting the state
    return () => {
      if (typeof window !== "undefined") {
        // Reset the scroll position to 0 when the component is unmounted
        window.removeEventListener('scroll', luxy.scroll);
        window.removeEventListener('resize', luxy.resize);
        document.removeEventListener('DOMContentLoaded', luxy.init);
        // You can manually reset the scroll position or any other necessary cleanup
      }
    };
  }, []);

  return (
    <>
      <div id="luxy">
        <Header onToggleOffCanvas={toggleOffCanvas}/>
          {children}
          <RightOffCanvas isOpen={isOffCanvasOpen} onClose={() => setOffCanvasOpen(false)}/>        
        <Footer onToggleOffCanvas={toggleOffCanvas}/>
      </div>
      <ScrollTo/>
      <CanvasAnimation/>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
