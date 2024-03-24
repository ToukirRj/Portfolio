
import Mission from '/img/mission.webp'
import { Link } from 'react-router-dom'
import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 max-w-6xl xl:px-0 animatable">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl">My 
                        <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3">Eyes</span> to Work</h2>
                        <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-3/6 w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            My eyes are focused on using my understanding of customer needs and their satisfaction. My services crite are:
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8 animatable">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-1/2 w-full">
                                <img src={Mission} className="mx-auto max-w-full" alt="me" loading="lazy"/>
                                <div className="mt-3 flex justify-center">
                                    <Link to="https://wa.me/8801753778070" target="_blank" className="group h-[54px] w-auto relative flex items-center rounded-full ps-6 pe-[7px] border-2 border-[#1F2937] bg-[#1F2937]">
                                        <span className='text-[#fff] group-hover:text-[#FB8245] text-[17px] font-[500] pe-4 tracking-wide'>Let's Chat</span>
                                        <span className='w-[36px] h-[36px] rounded-full bg-[#fff] group-hover:bg-[#FB8245] flex items-center justify-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024">
                                                <path fill="#1F2937" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"/>
                                            </svg>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative sm:w-1/2 w-full space-y-5 animatable">
                                {serviceData.map(service => (
                                    <div key={service.id} className="flex sm:flex-row flex-col items-center gap-4 bg-white/[0.5] bg-blur shadow-lg rounded-xl px-6 py-5 animatable">
                                        <div className="w-[55px] h-auto text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>
                                        </div>
                                        <div className="w-full">
                                            <h4 className="text-[19px] font-[600] tracking-tight text-[#1F2937] sm:text-start text-center">{service.title}</h4>
                                            <p className="mt-1 text-[14px] font-[400] text-[#1F2937] tracking-wide sm:text-start text-center">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eyes