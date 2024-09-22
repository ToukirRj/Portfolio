
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
// import luxy from 'luxy.js';

function MainLayout({ children }) {
  useEffect(() => {
      AOS.init();
  }, []);

  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasOpen(prev => !prev);
  };

   // Smooth scroll function
   const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="scroll-container">
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
