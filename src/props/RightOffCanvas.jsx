

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Submit from './Submit';

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
        <div className={`fixed z-[9999999] top-0 right-0 md:w-[560px] w-[96%] h-full bg-[#faf4e7] shadow-lg rounded-l-[25px] transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 left-4" onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24">
                    <g fill="none" stroke="#F60002" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="11.999" r="9"/><path d="m15 9l-6 6m0-6l6 6"/>
                    </g>
                </svg>
            </button>
            <div className="md:px-[100px] px-[20px]">
                <Submit/>
            </div>
        </div>
        <div className={`fixed z-[999] top-0 left-0 w-full h-full bg-[#1F2937] bg-opacity-70 ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out`} onClick={onClose}></div>
    </>
  );
};

RightOffCanvas.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default RightOffCanvas;
