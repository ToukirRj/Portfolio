import { Link } from 'react-router-dom'
import Selfsign from '/img/me.webp'
import socialLinksData from '../datas/socialLinksData';
import CanvasAnimation from '../props/CanvasAnimation';

// eslint-disable-next-line react/prop-types
const Splash = ({aboutRef}) => {
    return (
        <>
            <div className='relative z-20'>
                <CanvasAnimation/>
                <section className="sm:pt-48 pb-24 relative z-10">
                    <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-50 gradient-stops z-0'></div>
                    <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-50 gradient-stops z-0'></div>
                    <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 animatable">
                        <div className="items-center justify-center sm:gap-12 gap-5 flex sm:flex-row flex-col relative z-20">
                            <div className="sm:w-2/5 w-full relative">
                                <img className="w-[220px] max-w-full mx-auto" src={Selfsign} alt="me"/>
                                <h1 className="my-2 sm:text-[41px] text-[26px] font-[700] text-[#1f2937] tracking-tight sm:leading-[55px] leading-[30px] w-full text-center">
                                    Toukir Rahman.
                                </h1>
                                <div className="mt-2 border-t border-[#10B881]/[0.2] pt-4 relative z-10">
                                    <h1 className="text-[20px] font-[500] text-center tracking-tight text-[#1f2937] mb-2">Get Me Connect Now on</h1>
                                    <div className="flex items-center justify-center space-x-3">
                                        {socialLinksData.map(link => (
                                            <Link key={link.id} to={link.url} target={link.target} className='cursor-link hover:opacity-70'>
                                                <img className="w-9 h-9 rounded-full" src={link.imageSrc} alt={`${link.platform} logo`}/>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-3/5 w-full sm:block flex flex-col items-center z-10 mt-10">
                                <h4 className="bg-[#1f2937] text-[#fff] text-[14px] font-[500] uppercase tracking-wider mr-2 px-4 py-1 rounded-full table">Website Strategic UI Expert</h4>
                                <h1 className="my-[30px] text-[#1f2937] sm:text-[47px] text-[24px] font-[700] sm:leading-[54px] leading-[32px] tracking-normal sm:text-start text-center">Addicted to Advanced 
                                
                                <span className='bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text '>Design and Coding</span></h1>
                                <p className="text-[18px] font-[300] tracking-normal text-[#1F2937] sm:text-start text-center mb-[30px]">
                                    A safe hand to take your vision & the weight of the project off your shoulders, to getting your website done 
                                    perfectly. A website application designer with a passion for creating inspiring and influential designs. Committed to working with honesty and dedication.
                                </p>
                                <a href="#about" className='table'>
                                    <svg className="mouse" width="40px" viewBox="0 0 247 390" xmlns="http://www.w3.org/2000/svg">
                                        <path id="wheel" d="M123.359,79.775l0,72.843" fill="none" stroke="#10B881" strokeWidth="8px" />
                                        <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" fill="none" stroke="#10B881" strokeWidth="8px" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        </>
    )
}

export default Splash