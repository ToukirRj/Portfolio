
import Abme from '/img/mine.webp'
import { Link } from 'react-router-dom'
import statisticData from '../datas/statisticData';

const Myself = () => {
    return (
        <>
            <div id="about" className="md:py-20 py-6 relative z-20">
                <div className="mx-auto px-4 md:px-12 xl:max-w-7xl xl:px-0">
                    <div className="grid md:grid-cols-12 grid-cols-1 md:mb-12 mb-5 items-center">
                        <div className="col-span-3">
                            <div className="md:ps-4 ps-0 md:mt-5 mt-0 md:text-start text-center" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                                <h2 className="xl:text-[51px] text-[37px] font-bold text-[#1F2937] leading-[53px]">Effective  
                                <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text leading-[57px] md:ps-0 ps-2">Facts</span></h2>
                                <p className='mt-1 text-[#1F2937] md:text-[17px] text-[16px] font-[300] tracking-wide leading-[27px]'>My unique strategy that makes the target more specific</p>
                                <div className="mt-4 flex md:justify-start justify-center md:mb-0 mb-5">
                                    <Link className="group h-[46px] w-auto relative overflow-hidden z-10 flex items-center rounded-full ps-4 pe-[12px] bg-[#20bd62] hover:bg-[#299c59] ease-in-out duration-500" to="https://wa.me/8801753778070" target="_blank">
                                        <span className="w-[38px] h-[38px] absolute -z-[1] left-[5px] bg-[#2b6e58] group-hover:bg-[#235847] rounded-full btn-left ease-in-out duration-500"></span>
                                        <span className="text-[#fff] text-[14px] font-[400] tracking-[0.5px]">Let&apos;s talk</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ms-[12px]'>
                                            <path fill="#fff" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                            <path fill="#fff" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                        </svg>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                        <div className="col-span-9" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <div className='backdrop-blur-lg bg-gradient-to-t from-[#ff8144]/[0.05] to-white/[0.15] py-8 md:px-10 px-3 rounded-[45px] shadow-[0_2px_7px_0px_rgba(2,24,93,0.13)]'>
                                <div className='flex md:flex-row flex-col justify-between md:items-center items-center'>
                                    <h2 className="text-[26px] font-[600] tracking-tight text-[#1F2937]">Inner latent behave</h2>
                                    <div className='md:flex table text-center flex-row text-[14px] font-[500] text-[#1F2937] tracking-wide gap-2'>
                                        <div className='md:mx-0 mx-1 md:my-0 my-1 h-[30px] px-4 w-auto rounded-[30px] md:flex inline-flex items-center bg-[#FF8045]/[.18]'>
                                            <p>Accessible</p>
                                        </div>
                                        <div className='md:mx-0 mx-1 md:my-0 my-1 h-[30px] px-4 w-auto rounded-[30px] md:flex inline-flex items-center bg-[#FF8045]/[.18]'>
                                            <p>Collaborative</p>
                                        </div>
                                        <div className='md:mx-0 mx-1 md:my-0 my-1 h-[30px] px-4 w-auto rounded-[30px] md:flex inline-flex items-center bg-[#FF8045]/[.18]'>
                                            <p>Empathetic</p>
                                        </div>
                                        <div className='md:mx-0 mx-1 md:my-0 my-1 h-[30px] px-4 w-auto rounded-[30px] md:flex inline-flex items-center bg-[#FF8045]/[.18]'>
                                            <p>Iterative</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center md:flex-row flex-col md:px-0 px-[20px]">
                                    <div className="lg:w-2/12 md:1/2 w-full">
                                        <div className='flex items-center justify-center'>
                                            <div className="w-[150px] h-[150px] border-2 border-[#17b057] p-1 rounded-full mt-4">
                                                <img className="h-full md:w-full rounded-full" src={Abme} alt="cover"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-10/12 md:1/2 w-full">
                                        <p className="mt-4 md:ps-5 ps-0 text-[13px] font-[400] text-[#1F2937]/[0.9] tracking-[0.45px] leading-[22px] md:text-justify text-center"> 
                                            Ensuring the latest technology keeps me updated and that users get new experiences and interface convenience. 
                                            Easier & clean format to understand with relevant, Easily Navigable & that keeps the user engaged for a long time. 
                                            By making it responsive, it fits the various device&apos;s access. <br/><br/>
                                            
                                            I ensure all these points to bring your brand to life with a creative and insightful approach. And am interested 
                                            in how to serve best and aim to be a reliable ideal person.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-1 md:gap-6 gap-3">
                        {statisticData.map(statistic => (
                            <div key={statistic.id} className="relative overflow-hidden backdrop-blur-lg bg-gradient-to-t from-[#ff8144]/[0.05] to-white/[0.15] rounded-[40px] shadow-[0_2px_7px_0px_rgba(2,24,93,0.13)]" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400">
                                <div className='flex flex-row items-center justify-between p-3'>
                                    <span className="ms-4 block w-max text-[13px] font-medium uppercase tracking-wider text-[#1F2937]">{statistic.label}</span>
                                    <div className="h-14 w-14 rounded-full bg-[#17B057]/[.15] flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={statistic.iconColor} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: statistic.iconPath }} />
                                    </div>
                                </div>
                                <h2 className="ms-7 -mt-2 md:text-[46px] text-[40px] leading-[46px] font-bold text-[#1F2937]">{statistic.value}</h2>
                                <div className='flex items-center justify-center md:pt-4 pb-2 pt-1'>
                                    <img className='max-w-[200px] w-full opacity-80' src={statistic.image} alt='chart'/>
                                </div>
                                <span className='absolute bottom-0 md:h-[230px] h-[150px] w-full bg-gradient-to-t from-[#FAF4E7]/[0.95] via-transparent to-transparent'></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Myself