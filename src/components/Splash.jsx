import { Link } from 'react-router-dom'
import Selfsign from '/img/me.webp'
import socialLinksData from '../datas/socialLinksData';

// eslint-disable-next-line react/prop-types
const Splash = () => {
    return (
        <>
            <div className='relative z-20'>
                <div className="sm:pt-[200px] pb-12 relative z-10">
                    <div className="mx-auto px-4 sm:px-12 xl:max-w-7xl xl:px-0">
                        <div className="items-center justify-center sm:gap-12 gap-5 flex sm:flex-row flex-col relative z-20 animatable">
                            <div className="sm:w-2/5 w-full relative backdrop-blur-lg rounded-[60px] px-[30px] pt-[30px] pb-[40px] bg-white/[0.25] shadow-[0_5px_60px_0px_rgba(2,24,93,0.075)]">
                                <img className="w-[220px] max-w-full mx-auto" src={Selfsign} alt="me"/>
                                <h1 className="my-2 sm:text-[41px] text-[26px] font-[700] text-[#1f2937] tracking-tight sm:leading-[55px] leading-[30px] w-full text-center">
                                    Toukir Rahman
                                </h1>
                                <div className="mt-2 border-t border-[#1F2937]/[0.2] pt-4 relative z-10">
                                    <div className="flex justify-center">
                                        <Link className="group h-[50px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-6 pe-[12px] bg-[#17b057] ease-in-out duration-500" to="https://wa.me/8801753778070" target="_blank">
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
                            <div className="sm:w-3/5 w-full sm:block flex flex-col items-center z-10 mt-2">
                                <h4 className="bg-[#17b057] text-[#fff] text-[14px] font-[500] uppercase tracking-wider mr-2 px-4 py-1 rounded-full table">Website Strategic UI Expert</h4>
                                <h1 className="my-[23px] text-[#1f2937] sm:text-[55px] text-[24px] font-[700] sm:leading-[64px] leading-[32px] tracking-normal sm:text-start text-center">
                                    Addicted to Advanced<span className='bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text'>Design and Coding</span></h1>
                                <p className="text-[15px] leading-[30px] font-[400] tracking-[0.35px] text-[#1F2937] sm:text-start text-center mb-[25px]">
                                    A safe hand to take your vision & the weight of your project off your shoulders, to getting done 
                                    perfectly. A Professional Website Application Engineer with a passion for creating inspiring and influential designs. Committed to working with honesty and dedication.
                                </p>
                                <h1 className="text-[21px] font-semibold tracking-tight text-[#1f2937] mb-2">Get Me Connect Now on</h1>
                                <div className="flex items-center justify-start grid-cols-4 sm:space-x-5 space-x-0 sm:gap-0 gap-4 mx-auto">
                                    {socialLinksData.map(link => (
                                        <Link key={link.id} to={link.url} target={link.target}
                                            className="flex items-center space-x-3 py-3 px-5 shadow backdrop-blur-lg bg-white/[0.25] rounded-xl hover:shadow-lg hover:bg-white transition-all">
                                            <div className="flex flex-col items-center mx-auto">
                                                <img className="w-8 h-8 rounded-full" src={link.imageSrc} alt={`${link.platform} logo`} />
                                                <p className="text-[14px] font-[500] text-[#1f2937] tracking-[.45px] mt-2">{link.platform}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-24 relative z-10">
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