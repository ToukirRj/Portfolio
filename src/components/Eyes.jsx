
import Mission from '/img/mission.webp'
import { Link } from 'react-router-dom'
import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-10">
                <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-40 gradient-stops z-0'></div>
                <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-40 gradient-stops z-0'></div>
                <div className="mx-auto px-4 sm:px-12 max-w-6xl xl:px-0 relative z-20 animatable">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl">My <span className="text-[#FF8045]">Eyes</span> to Work</h2>
                        <p className="mx-auto max-w-full mt-2 text-gray-600 sm:w-3/6 w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            My eyes are focused on using my understanding of customer needs and their satisfaction. My services crite are:
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8 animatable">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-1/2 w-full">
                                <img src={Mission} className="mx-auto max-w-full" alt="me" loading="lazy"/>
                                <div className="mt-3 flex justify-center">
                                    <Link target="_blank" to="https://wa.me/8801753778070" className="group h-[65px] relative flex items-center">
                                        <div className="absolute top-0 bottom-0 left-0 my-auto w-[65px] h-[65px] group-hover:left-[84%] group-hover:w-[20px] group-hover:h-[20px] rounded-[65px] bg-[#10B880] transition-all duration-[.5s]"></div>
                                        <div className="relative ms-[32px] me-[5px] group-hover:me-[15px] transition-all duration-[.5s] text-[#1F2937]">WhatsApp Connect</div>
                                        <div className="relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="#10B880" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"/></svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative sm:w-1/2 w-full space-y-5 animatable">
                                {serviceData.map(service => (
                                    <div key={service.id} className="flex sm:flex-row flex-col items-center gap-4 bg-white/[0.5] bg-blur shadow-lg rounded-xl px-6 py-5 animatable">
                                        <div className="w-[50px] h-auto text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".65" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>
                                        </div>
                                        <div className="w-full">
                                            <h4 className="text-[16px] font-[400] tracking-normal text-gray-900 sm:text-start text-center">{service.title}</h4>
                                            <p className="mt-1 text-[12px] font-[400] text-gray-500 tracking-wide sm:text-start text-center">{service.description}</p>
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