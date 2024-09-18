
// MainLayout.jsx
import Header from './Header';
import Footer from './Footer';
import CanvasAnimation from '../props/CanvasAnimation';
import RightOffCanvas from '../props/RightOffCanvas';
import { useState } from 'react';

function MainLayout({ children }) {
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
      <Footer onToggleOffCanvas={toggleOffCanvas}/>
    </>
  );
}

export default MainLayout;
