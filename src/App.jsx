import Home from './pages/Home';
// import { useEffect } from 'react';

function App() {
  // useEffect(() => {
  //   const disableContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleKeyDown = (e) => {
  //     // Disable F12, Ctrl+Shift+I (DevTools), Ctrl+Shift+C (Inspect)
  //     if (
  //       e.key === 'F12' || 
  //       (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C'))
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   // Attach event listeners
  //   window.addEventListener('contextmenu', disableContextMenu);
  //   window.addEventListener('keydown', handleKeyDown);

  //   // Cleanup event listeners on unmount
  //   return () => {
  //     window.removeEventListener('contextmenu', disableContextMenu);
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
