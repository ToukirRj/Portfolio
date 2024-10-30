
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

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

  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
      setIsInitialLoad(false);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, location.pathname]);


  return (
    <>
      <div>
      {loading ? 
        <div className="loader-area">
          <div className="waveform">
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
              <div className="wave-bar"></div>
          </div>
      </div>
      : 
        <Outlet/>
      }
    </div>
    </>
  );
}

export default App;
