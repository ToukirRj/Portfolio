

import { useEffect } from 'react';

const RightOffCanvas = ({ isOpen, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, 
    [isOpen]);

  return (
    <>
        <div className={`fixed z-[9999999] top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded" onClick={onClose}>
                Close
            </button>
            <div className="p-4">
                <p>This is the Right Off-Canvas content!</p>
            </div>
        </div>
        <div className={`fixed z-[999] top-0 left-0 w-full h-full bg-[#1F2937] bg-opacity-70 ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out`} onClick={() => setIsOpen(false)}></div>
    </>
  );
};

export default RightOffCanvas;
