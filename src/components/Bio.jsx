
import { Link } from 'react-router-dom'
import { experienceData1 } from '../datas/experienceData'
import { experienceData2 } from '../datas/experienceData'

const Bio = () => {
    return (
        <>
            <div className="md:py-16 py-6 relative z-20">
                <div className="mx-auto px-4 md:px-12 xl:max-w-6xl xl:px-0 relative z-10">
                    <div className="relative md:text-start text-center" data-aos="fade-up" data-aos-duration="300" data-aos-delay="200">
                        <h2 className="xl:text-[55px] text-4xl font-bold text-[#1F2937]">Biography 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 md:leading-[79px] leading-[50px]">Experiences</span>
                        </h2>
                        <p className="mt-1 text-[#1F2937] md:w-4/6 w-full text-[19px] font-[300] tracking-wide leading-[27px]">
                            My regular activity on official and freelancing marketplaces 
                        </p>
                    </div>
                    <div className="md:mt-8 mt-4 relative z-10">
                        <div className="md:gap-8 gap-4 grid md:grid-cols-2 grid-cols-1">
                            <div className="w-full" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                                <div className="md:p-10 p-4 relative overflow-hidden backdrop-blur-lg bg-white/[0.15] shadow-[0_2px_7px_0px_rgba(2,24,93,0.13)] md:rounded-[45px] rounded-[40px]">
                                    <h2 className="flex items-center justify-center">
                                        <span className="md:text-[25px] text-[21px] tracking-tight font-[600] text-[#1F2937] text-center">Full Time (Official)</span>
                                    </h2>
                                    <div className="tracking-normal mt-4">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="group overflow-hidden mt-4 md:px-7 px-4 md:pb-7 pb-4 md:pt-6 pt-4 block relative backdrop-blur-lg bg-gradient-to-t from-[#FF8045]/[0.12] to-white/[0.15] shadow-[0_1px_3px_0px_rgba(2,24,93,0.18)] hover:shadow-xl hover:bg-white transition-all duration-500 justify-between md:rounded-[35px] rounded-[28px]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                                                <div className="flex gap-2 items-center">
                                                    <div className="relative flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <div>
                                                        <span className="block w-max md:text-[17px] text-[15px] font-[600] text-[#1F2937]">{expo.position}</span>
                                                        <div className="md:text-[13px] text-[12px] text-[#1F2937] font-[500] tracking-wide">{expo.company}</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center justify-startnpm install --save aos@next mt-4">
                                                    <dd className="table px-4 py-[3px] w-auto rounded-[30px] bg-[#FF8045]/[0.35] text-[12px] text-[#1F2937] font-[500] tracking-wide uppercase">
                                                        <time>{expo.startDate}</time>
                                                        <span>—</span>
                                                        <time>{expo.endDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="md:h-14 md:w-14 h-10 w-10 absolute right-[10px] top-[10px] rounded-full bg-[#17B057]/[.18] group-hover:bg-[#17B057]/[.35] flex items-center justify-center transition-all duration-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ease-in-out duration-500'>
                                                        <path fill="#17B057" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                        <path fill="#17B057" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                                    </svg>
                                                </div>
                                                <img className="absolute md:-bottom-[145px] md:right-0 -bottom-[150px] -right-10 -z-10 w-[280px] opacity-40" src={expo.img} alt="img"></img>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                                <div className="md:p-10 p-4 relative overflow-hidden backdrop-blur-lg bg-white/[0.15] shadow-[0_2px_7px_0px_rgba(2,24,93,0.13)] md:rounded-[45px] rounded-[40px]">
                                    <h2 className="flex items-center justify-center">
                                        <span className="md:text-[25px] text-[21px] tracking-tight font-[600] text-[#1F2937] text-center">Freelance (Online)</span>
                                    </h2>
                                    <div className="tracking-normal mt-4">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="group overflow-hidden mt-4 md:px-7 px-4 md:pb-7 pb-4 md:pt-6 pt-4 block relative backdrop-blur-lg bg-gradient-to-t from-[#FF8045]/[0.12] to-white/[0.15] shadow-[0_1px_3px_0px_rgba(2,24,93,0.18)] hover:shadow-xl hover:bg-white transition-all duration-500 justify-between md:rounded-[35px] rounded-[28px]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
                                                <div className="flex gap-2 items-center">
                                                    <div className="relative flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <div>
                                                        <span className="block w-max md:text-[17px] text-[15px] font-[600] text-[#1F2937]">{expo.position}</span>
                                                        <div className="md:text-[13px] text-[12px] text-[#1F2937] font-[500] tracking-wide">{expo.company}</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center justify-startnpm install --save aos@next mt-4">
                                                    <dd className="table px-4 py-[3px] w-auto rounded-[30px] bg-[#FF8045]/[0.35] text-[12px] text-[#1F2937] font-[500] tracking-wide uppercase">
                                                        <time>{expo.startDate}</time>
                                                        <span>—</span>
                                                        <time>{expo.endDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="md:h-14 md:w-14 h-10 w-10 absolute right-[10px] top-[10px] rounded-full bg-[#17B057]/[.18] group-hover:bg-[#17B057]/[.35] flex items-center justify-center transition-all duration-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" className='relative ease-in-out duration-500'>
                                                        <path fill="#17B057" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                        <path fill="#17B057" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                                    </svg>
                                                </div>
                                                <img className="absolute md:-bottom-[145px] md:right-0 -bottom-[150px] -right-10 -z-10 w-[280px] opacity-40" src={expo.img} alt="img"></img>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio