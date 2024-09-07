
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
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-1/2 w-full ">
                                <div className="p-10 backdrop-blur-lg bg-white/[.15] shadow-[0_3px_35px_0px_rgba(2,24,93,0.098)] rounded-[45px]">
                                    <h2 className="flex items-center justify-center">
                                        <span className="text-[23px] tracking-tight font-[600] text-[#1F2937] text-center">Full Time (Official)</span>
                                    </h2>
                                    <div className="tracking-normal mt-4">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="my-4 p-5 flex flex-row items-center backdrop-blur-lg bg-white/[0.25] shadow hover:shadow-lg hover:bg-white transition-all duration-500 justify-between rounded-[37px]">
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[17px] font-[600] text-[#1F2937] w-full">{expo.company}</dd>
                                                        <dd className="text-[14px] font-[400] text-[#1F2937] w-full">{expo.position}</dd>
                                                    </dl>
                                                </div>
                                                <dd className="text-[14px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px] me-[15px]">
                                                    <time>{expo.startDate}</time>
                                                    <span>—</span>
                                                    <time>{expo.endDate}</time>
                                                </dd>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full ">
                                <div className="p-10 backdrop-blur-lg bg-white/[.15] shadow-[0_3px_35px_0px_rgba(2,24,93,0.098)] rounded-[45px]">
                                    <h2 className="flex items-center justify-center">
                                        <span className="text-[23px] tracking-tight font-[600] text-[#1F2937] text-center">Freelance (Online)</span>
                                    </h2>
                                    <div className="tracking-normal mt-4">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="my-4 p-5 flex flex-row items-center backdrop-blur-lg bg-white/[0.25] shadow hover:shadow-lg hover:bg-white transition-all duration-500 justify-between rounded-[37px]">
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[17px] font-[600] text-[#1F2937] w-full">{expo.company}</dd>
                                                        <dd className="text-[14px] font-[400] text-[#1F2937] w-full">{expo.position}</dd>
                                                    </dl>
                                                </div>
                                                <dd className="text-[14px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px] me-[15px]">
                                                    <time>{expo.startDate}</time>
                                                    <span>—</span>
                                                    <time>{expo.endDate}</time>
                                                </dd>
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