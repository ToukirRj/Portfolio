
import { useRef } from 'react'
import logo from '/img/logo.webp'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import HeaderAnimate from '../props/HeaderAnimate';


function Header({ onToggleOffCanvas }) {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle('no-respons');
    }
    return (
        <header className='header fixed w-full shadow backdrop-blur-lg px-4 z-30 left-0 top-0 right-0 my-0 h-[60px]'>
            <div className='px-4 sm:px-12 w-full xl:px-0 max-w-7xl mx-auto'>
                <div className='relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 py-2'>
                    <Link to="/"><img src={logo} className='sm:w-[57px] w-[44px]' alt='logo'/></Link>
                    <nav ref={navRef} className='space-y-6 tracking-wide lg:flex lg:space-y-0 lg:text-sm'>
                        <NavLink to="/" activeclassname="active">Home</NavLink>
                        <NavLink to="/Portfolio" activeclassname="active">Portfolio</NavLink>
                        <NavLink to="/About" activeclassname="active">About</NavLink>
                        <NavLink to="/Services" activeclassname="active">Services</NavLink>
                        <NavLink to="/Skills" activeclassname="active">Skills</NavLink>
                        <NavLink to="/Experiences" activeclassname="active">Experiences</NavLink>
                        <button onClick={showNavbar} className='close-btn hidden'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path fill="red" d="m19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41Z" className="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        </button>
                    </nav>
                    <Link onClick={onToggleOffCanvas}
                        className="relative py-1 px-4 before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-300 hover:before:scale-110 before:bg-gradient-to-r from-[#ff8144] to-[#17b057]">
                        <span className="relative text-[14px] tracking-wider font-medium text-white">Quick Hire</span>
                    </Link>
                    <button className='nav-btn' onClick={showNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#222" fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/></svg>
                    </button>
                </div>
            </div>
            <HeaderAnimate/>
        </header>
    );
}

export default Header