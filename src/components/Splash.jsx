import { Link } from 'react-router-dom'
import Selfsign from '/img/me.webp'
import socialLinksData from '../datas/socialLinksData';
import AOS from 'aos';

AOS.init();

// eslint-disable-next-line react/prop-types
const Splash = () => {
    return (
        <>
            <div className='relative z-20'>
                <div className="md:pt-[200px] pt-[110px] pb-12 relative z-10">
                    <div className="mx-auto px-4 md:px-12 xl:max-w-7xl xl:px-0">
                        <div className="items-center justify-center md:gap-12 gap-5 flex md:flex-row flex-col relative z-20 ">
                            <div data-aos="fade-up" className="md:w-2/5 w-full relative backdrop-blur-lg rounded-[60px] px-[30px] pt-[30px] pb-[40px] bg-gradient-to-t from-[#ff8144]/[0.05] to-white/[0.15] shadow-[0_2px_7px_0px_rgba(2,24,93,0.13)]">
                                <img className="w-[220px] max-w-full mx-auto" src={Selfsign} alt="me"/>
                                <h1 className="my-2 md:text-[41px] text-[32px] font-[700] text-[#1f2937] tracking-tight md:leading-[55px] leading-[45px] w-full text-center">
                                    Toukir Rahman
                                </h1>
                                <div className="mt-2 border-t border-[#1F2937]/[0.2] pt-4 relative z-10">
                                    <div className="flex justify-center">
                                        <Link className="group h-[46px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-6 pe-[12px] bg-[#17b057] ease-in-out duration-500" to="https://wa.me/8801753778070" target="_blank">
                                            <span className="w-[38px] h-[38px] group-hover:w-[38px] group-hover:h-[38px] absolute -z-[1] left-[5px] opacity-50 group-hover:opacity-100 bg-[#1e8160] group-hover:bg-[#2b6e58] rounded-full ease-in-out duration-500 btn-left"></span>
                                            <span className="text-[#fff] group-hover:text-[#fff] text-[14px] font-[400] tracking-[0.5px]">WhatsApp</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px] group-hover:ms-[12px] ease-in-out duration-500'>
                                                <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                            </svg>
                                        </Link>       
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-3/5 w-full sm:block flex flex-col items-center z-10 md:mt-2 mt-6">
                                <h4 className="bg-[#1F2937] text-[#fff] text-[13px] font-[400] tracking-wider px-4 py-1 rounded-full table md:mx-0 mx-auto">Front-End Engineer | UX/UI Engineer</h4>
                                <h1 className="md:my-[23px] my-[17px] text-[#1f2937] md:text-[55px] text-[27px] font-[700] md:leading-[64px] leading-[36px] tracking-normal md:text-start text-center">
                                    Addicted to Advanced<span className='bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text'>Design and Coding</span></h1>
                                <p className="text-[15px] leading-[30px] font-[400] tracking-[0.35px] text-[#1F2937] md:text-start text-center mb-[25px]">
                                    A safe hand to take your vision & the weight of your project off your shoulders, to getting done 
                                    perfectly. A Professional Website Application Engineer with a passion for creating inspiring and influential designs. Committed to working with honesty and dedication.
                                </p>
                                <h1 className="text-[21px] font-semibold tracking-tight text-[#1f2937] mb-2 md:text-start text-center">Get Me Connect Now on</h1>
                                <div className="flex items-center md:justify-start justify-center grid-cols-4 md:space-x-5 space-x-0 md:gap-0 gap-2 mx-auto">
                                    {socialLinksData.map(link => (
                                        <Link key={link.id} to={link.url} target={link.target}
                                            className="flex items-center md:space-x-3 space-x-1 md:py-3 py-2 md:px-5 px-3 shadow backdrop-blur-lg bg-gradient-to-t from-[#FF8045]/[0.035] to-white/[0.15] rounded-xl hover:shadow-lg hover:bg-white transition-all">
                                            <div className="flex flex-col items-center mx-auto">
                                                <img className="w-8 h-8 rounded-full" src={link.imageSrc} alt={`${link.platform} logo`} />
                                                <p className="md:text-[14px] text-[12px] font-[500] text-[#1f2937] tracking-[.45px] mt-2">{link.platform}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-24 relative z-10 md:block hidden">
                            <div className="flex justify-center">
                                <a href="#about" className='table'>
                                    <svg className="mouse" width="40px" viewBox="0 0 247 390" xmlns="http://www.w3.org/2000/svg">
                                        <path id="wheel" d="M123.359,79.775l0,72.843" fill="none" stroke="#1F2937" strokeWidth="10px"/>
                                        <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" fill="none" stroke="#1F2937" strokeWidth="10px" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Splash