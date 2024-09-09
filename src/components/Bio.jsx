
import { Link } from 'react-router-dom'
import { experienceData1 } from '../datas/experienceData'
import { experienceData2 } from '../datas/experienceData'

const Bio = () => {
    return (
        <>
            <div className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative z-10">
                    <div className="relative">
                        <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">Biography 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Experiences</span>
                        </h2>
                        <p className="mt-1 text-[#1F2937] sm:w-4/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px]">
                            My regular activity on official and freelancing marketplaces 
                        </p>
                    </div>
                    <div className="sm:mt-8 mt-8 relative z-10">
                        <div className="gap-6 space-y-0 flex items-center">
                            <div className="sm:w-1/2 w-full">
                                <div className="p-10 relative overflow-hidden backdrop-blur-lg bg-white/[.15] shadow-[0_3px_15px_0px_rgba(2,24,93,0.098)] rounded-[55px]">
                                    <h2 className="flex items-center justify-center">
                                        <span className="text-[25px] tracking-tight font-[600] text-[#1F2937] text-center">Full Time (Official)</span>
                                    </h2>
                                    <div className="tracking-normal mt-4">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="overflow-hidden mt-4 px-9 pb-8 pt-6 block relative backdrop-blur-lg bg-white/[0.25] shadow hover:shadow-lg hover:bg-white transition-all duration-500 justify-between rounded-[45px]">
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <div>
                                                        <span className="block w-max text-[17px] font-[600] text-[#1F2937]">{expo.position}</span>
                                                        <div className="text-[13px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">{expo.company}</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center justify-start mt-4">
                                                    <dd className="table px-4 py-[3px] w-auto rounded-[30px] bg-[#FF8045]/[0.3] text-[14px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">
                                                        <time>{expo.startDate}</time>
                                                        <span>—</span>
                                                        <time>{expo.endDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="h-20 w-20 absolute right-[10px] top-[10px] rounded-full bg-[#17B057]/[.15] flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 1024 1024" className='relative ease-in-out duration-500'>
                                                        <path fill="#17B057" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                        <path fill="#17B057" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                                    </svg>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <span className="absolute h-[70%] w-full bottom-0 left-0 bg-gradient-to-t from-[#FF8045]/[0.15] to-transparent -z-10"></span>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full ">
                                <div className="p-10 relative overflow-hidden backdrop-blur-lg bg-white/[.15] shadow-[0_3px_15px_0px_rgba(2,24,93,0.098)] rounded-[45px]">
                                    <h2 className="flex items-center justify-center">
                                        <span className="text-[23px] tracking-tight font-[600] text-[#1F2937] text-center">Freelance (Online)</span>
                                    </h2>
                                    <div className="tracking-normal mt-4">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="overflow-hidden mt-4 px-9 pb-8 pt-6 block relative backdrop-blur-lg bg-white/[0.25] shadow hover:shadow-lg hover:bg-white transition-all duration-500 justify-between rounded-[45px]">
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <div>
                                                        <span className="block w-max text-[17px] font-[600] text-[#1F2937]">{expo.position}</span>
                                                        <div className="text-[13px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">{expo.company}</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3 items-center justify-start mt-4">
                                                    <dd className="table px-4 py-[3px] w-auto rounded-[30px] bg-[#FF8045]/[0.3] text-[14px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">
                                                        <time>{expo.startDate}</time>
                                                        <span>—</span>
                                                        <time>{expo.endDate}</time>
                                                    </dd>
                                                </div>
                                                <div className="h-20 w-20 absolute right-[10px] top-[10px] rounded-full bg-[#17B057]/[.15] flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 1024 1024" className='relative ease-in-out duration-500'>
                                                        <path fill="#17B057" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"/>
                                                        <path fill="#17B057" d="M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312z"/>
                                                    </svg>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <span className="absolute h-[70%] w-full bottom-0 left-0 bg-gradient-to-t from-[#FF8045]/[0.15] to-transparent -z-10"></span>
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