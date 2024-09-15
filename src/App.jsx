
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
  const location = useLocation(); // Hook to get the current route

  useEffect(() => {
    // Function to handle initial page load
    const handlePageLoad = () => {
      setLoading(false);
      setIsInitialLoad(false);
    };

    // Add event listener for window load
    window.addEventListener('load', handlePageLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      // Reset loading state on route change
      setLoading(true);

      // Timer to simulate loading delay
      const timer = setTimeout(() => {
        setLoading(false);
      }, 100); // Adjust the timeout duration as needed

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isInitialLoad, location.pathname]); // Runs on route change


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
