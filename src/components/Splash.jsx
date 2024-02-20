import React from 'react'
import { Link } from 'react-router-dom'
import Selfsign from '/img/me.webp'
import socialLinksData from '../datas/socialLinksData';

const Splash = ({aboutRef}) => {
    return (
        <>
            <section className="sm:pt-44 pt-[7rem] sm:pb-20 pb-0 relative">
                <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-40 gradient-stops'></div>
                <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-40 gradient-stops z-1'></div>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="items-center sm:gap-12 gap-5 flex sm:flex-row flex-col animate-jump">
                        <div className="sm:w-3/5 w-full relative flex items-center justify-end">
                            <h1 className="sm:text-[71px] text-[26px] font-[700] text-[#1f2937] tracking-tight sm:leading-[65px] leading-[30px] absolute sm:left-[-50px] left-[-2px] sm:top-[6.25rem] top-[0.25rem]">
                                Toukir<br/>&nbsp;&nbsp; Rahman.
                            </h1>
                            <img className="w-[550px] max-w-full" src={Selfsign} alt="me"/>
                        </div>
                        <div className="sm:w-2/5 w-full sm:block flex flex-col items-center z-10">
                            <span className="bg-[#ff864f] text-[#fff] text-[12px] font-[500] uppercase tracking-wider mr-2 px-3 py-1 rounded-full [text-shadow:_0_0_3px_rgb(0_0_0_/_40%)]">Website Strategic UI Expert</span>
                            <h1 className="my-[20px] bg-gradient-to-br from-[#ff8144] via-[#10b881] to-[#b05bc3] inline-block text-transparent bg-clip-text sm:text-[37px] text-[24px] font-[600] sm:leading-[45px] leading-[32px] tracking-normal sm:text-start text-center">An Independent & Addicted to Advanced Design and Coding</h1>
                            <p className="text-[15px] font-[400] tracking-normal text-gray-600 sm:text-start text-center">
                                A safe hand to take your vision & the weight of the project off your shoulders, to getting your website done 
                                perfectly. A website application designer with a passion for creating inspiring and influential designs.
                            </p>
                            <Link to="/#about" onClick={() => {Splash(aboutRef.current);}} className="mt-[30px] text-white bg-[#10B881] hover:bg-[#10B881] font-medium rounded-full text-sm p-3 text-center inline-flex items-center mr-2 animate-bounce hover:animate-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048">
                                    <path fill="white" d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787l90 90z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-[#10B881]/[0.2] pt-4 relative z-10 animate-fade-up">
                        <h1 className="text-[26px] font-semibold text-center tracking-tight text-[#1f2937] mb-4">Get Me Connect Now on</h1>
                        <div className="grid sm:grid-cols-4 grid-cols-1 sm:space-x-3 space-x-0 sm:gap-0 gap-4">
                            {socialLinksData.map(link => (
                                <Link key={link.id} to={link.url} target={link.target}
                                className="flex items-center space-x-4 p-5 bg-white/[0.5] bg-blur rounded-xl shadow-lg hover:bg-white/[0.9] transition-all">
                                <div className="flex-shrink-0">
                                    <img className="w-12 h-12 rounded-full" src={link.imageSrc} alt={`${link.platform} logo`} />
                                </div>
                                <div className="min-w-0 tracking-normal">
                                    <p className="text-[17px] font-[600] text-[#333]">{link.platform}</p>
                                    <p className="text-sm text-gray-500">{link.role}</p>
                                </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Splash