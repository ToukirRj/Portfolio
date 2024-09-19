
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

function MainLayout({ children }) {
  useEffect(() => {
      AOS.init();
  }, []);

  const [isOffCanvasOpen, setOffCanvasOpen] = useState(false);

  const toggleOffCanvas = () => {
    setOffCanvasOpen(prev => !prev);
  };

  return (
    <>
      <Header onToggleOffCanvas={toggleOffCanvas}/>
        <CanvasAnimation/>
        {children}
        <RightOffCanvas isOpen={isOffCanvasOpen} onClose={() => setOffCanvasOpen(false)}/>
        <ScrollTo/>
      <Footer onToggleOffCanvas={toggleOffCanvas}/>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
