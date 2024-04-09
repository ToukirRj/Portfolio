
import Abme from '/img/toukir.webp'
import { Link } from 'react-router-dom'
import statisticData from '../datas/statisticData';

const Myself = () => {
    return (
        <>
            <section id="about" className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-7xl xl:px-0 animatable">
                    <div className="text-center sm:mb-16 mb-4">
                        <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">Effective 
                        <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Facts</span></h2>
                        <p className='mx-auto max-w-full mt-2 text-[#1F2937] sm:w-3/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[21px]'>My unique strategy that makes the target more specific</p>
                    </div>
                    <div className="-mx-4 sm:mx-0">
                        <div className="flex items-center sm:flex-row flex-col sm:px-0 px-[20px] animatable">
                            <div className="lg:w-3/12 sm:1/2 w-full">
                                <div className="p-4 sm:ps-12 lg:block lg:space-y-6 lg:ps-0 sm:pe-10 pe-0">
                                    {statisticData.map(statistic => (
                                        <div key={statistic.id} className="flex snap-center items-center justify-end gap-4">
                                            <div>
                                                <h2 className="text-4xl font-bold text-[#1F2937] text-end">{statistic.value}</h2>
                                                <span className="block w-max text-[13px] font-medium uppercase tracking-wider text-[#1F2937]">{statistic.label}</span>
                                            </div>
                                            <div className={`h-14 w-14 rounded-xl bg-white shadow-lg shadow-primary/10 flex items-center justify-center`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={statistic.iconColor} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: statistic.iconPath }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-3/12 sm:1/2 w-full">
                                <img className="h-auto lg:w-[375px] w-full max-w-full sm:rounded-[1.875rem] rounded-[20px] ring-2 ring-white" src={Abme} alt="cover"/>
                            </div>
                            <div className="lg:w-6/12 sm:1/2 w-full">
                                <div className="px-3 ps-10">
                                    <h2 className="sm:text-[41px] text-[21px] font-semibold tracking-tight text-[#1F2937]">Inner latent behave</h2>
                                    <p className="mt-4 text-[15px] font-[400] text-[#1F2937] tracking-wide leading-[24px]"> 
                                        I ensure latest technology as it keeps me updated with latest things always. Users will experience new and get 
                                        interface according to their convenience.<br/><br/>

                                        When users open the site, they will find information or data in a format that is easy to understand and relevant, easily 
                                        navigable and that keeps the user engaged for a long time. This is further complicated by the fact that users use a 
                                        variety of devices. So, it will be fit and responsive on all devices. I ensure all these points to bring your brand to 
                                        life with a creative and insightful approach.
                                    </p>
                                    <div className="mt-6 flex justify-start">
                                        <Link to="https://wa.me/8801753778070" target="_blank" className="group h-[54px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-6 pe-[12px] border-2 border-[#1F2937] bg-[#1F2937] text-[#FB8245] ease-in-out duration-500">
                                            <span className='w-[36px] h-[36px] group-hover:w-[36px] group-hover:h-[36px] absolute -z-[1] left-[9px] opacity-20 group-hover:opacity-100 bg-white group-hover:bg-[#FB8245] rounded-full ease-in-out duration-500 btn-left'></span>
                                            <span className='text-[#fff] group-hover:text-[#FB8245] text-[14px] font-[500] tracking-wider uppercase'>Let&apos;s Chat</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 1024 1024" className='relative ms-[10px] group-hover:ms-[15px] ease-in-out duration-500'>
                                                <path fill="#fff" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"/>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Myself