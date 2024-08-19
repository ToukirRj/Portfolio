
import Abme from '/img/mine.webp'
import { Link } from 'react-router-dom'
import statisticData from '../datas/statisticData';

const Myself = () => {
    return (
        <>
            <section id="about" className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-7xl xl:px-0 animatable">
                    <div className="mx-4 sm:mx-0">
                        <div className="grid grid-cols-12 sm:px-0 px-[20px] mb-16 animatable items-center">
                            <div className="col-span-3">
                                <div className="ps-4">
                                    <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">Effective 
                                    <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text leading-[67px]">Facts</span></h2>
                                    <p className='mt-2 text-[#1F2937] sm:text-[20px] text-[14px] font-[300] tracking-wide leading-[32px]'>My unique strategy that makes the target more specific</p>
                                    <div className="mt-6 flex justify-start">
                                        <Link className="group h-[50px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-6 pe-[12px] bg-[#17b057] ease-in-out duration-500" to="https://wa.me/8801753778070" target="_blank">
                                            <span className="w-[38px] h-[38px] group-hover:w-[38px] group-hover:h-[38px] absolute -z-[1] left-[5px] opacity-50 group-hover:opacity-100 bg-[#1e8160] group-hover:bg-[#2b6e58] rounded-full ease-in-out duration-500 btn-left"></span>
                                            <span className="text-[#fff] group-hover:text-[#fff] text-[14px] font-[400] tracking-normal">Let&apos;s talk</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px] group-hover:ms-[12px] ease-in-out duration-500'>
                                                <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                            </svg>
                                        </Link>   
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-9">
                                <div className='backdrop-blur-lg bg-white/[0.25] py-8 px-10 rounded-[45px] shadow-[0_3px_30px_0px_rgba(2,24,93,0.09)]'>
                                    <div className='flex flex-row justify-between'>
                                        <h2 className="text-[26px] font-[500] tracking-tight text-[#1F2937]">Inner latent behave</h2>
                                        <div className='flex flex-row text-[14px] font-[500] text-[#1F2937] tracking-wide gap-2'>
                                            <div className='h-[30px] px-4 w-auto rounded-[30px] flex items-center bg-[#FF8045]/[.25]'>
                                                <p>Accessible</p>
                                            </div>
                                            <div className='h-[30px] px-4 w-auto rounded-[30px] flex items-center bg-[#FF8045]/[.25]'>
                                                <p>Collaborative</p>
                                            </div>
                                            <div className='h-[30px] px-4 w-auto rounded-[30px] flex items-center bg-[#FF8045]/[.25]'>
                                                <p>Empathetic</p>
                                            </div>
                                            <div className='h-[30px] px-4 w-auto rounded-[30px] flex items-center bg-[#FF8045]/[.25]'>
                                                <p>Iterative</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center sm:flex-row flex-col sm:px-0 px-[20px] animatable">
                                        <div className="lg:w-9/12 sm:1/2 w-full">
                                            <p className="mt-4 text-[14px] font-[400] text-[#1F2937] tracking-wide leading-[24px]"> 
                                                I ensure the latest technology as it always keeps me updated with the latest things. Users will get new experiences and 
                                                interfaces according to their convenience.<br/><br/>

                                                When users open the site, they will find information or data in a format that is easy to understand and relevant, easily 
                                                navigable and that keeps the user engaged for a long time. This is further complicated by the fact that users use various 
                                                devices. So, it will be fit and responsive on all devices. I ensure all these points to bring your brand to life with a 
                                                creative and insightful approach.
                                            </p>
                                        </div>
                                        <div className="lg:w-3/12 sm:1/2 w-full">
                                            <img className="h-auto lg:w-[350px] w-full max-w-full rounded-full ring-4 ring-white/[0.70]" src={Abme} alt="cover"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 sm:px-0 px-[20px] mb-16 animatable">
                            {statisticData.map(statistic => (
                                <div key={statistic.id} className="snap-center backdrop-blur-lg bg-white/[0.25] py-2 px-3 rounded-[40px] shadow-[0_3px_30px_0px_rgba(2,24,93,0.09)]">
                                    <div className='flex flex-row items-center justify-between'>
                                        <span className="ms-3 block w-max text-[13px] font-medium uppercase tracking-wider text-[#1F2937]">{statistic.label}</span>
                                        <div className="h-14 w-14 rounded-full bg-[#17B057]/[.15] flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={statistic.iconColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: statistic.iconPath }} />
                                        </div>
                                    </div>
                                    <h2 className="ms-3 text-4xl font-bold text-[#1F2937]">{statistic.value}</h2>
                                    <img src={statistic.image} alt='chart'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Myself