
import { Link } from 'react-router-dom'
import { experienceData1 } from '../datas/experienceData'
import { experienceData2 } from '../datas/experienceData'

const Bio = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative z-10">
                    <div className="relative text-center animatable">
                        <h2 className="text-[27px] font-bold text-[#1F2937] sm:text-4xl xl:text-5xl">Biography 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3">Experiences</span>
                        </h2>
                        <p className="mt-2 text-[#1F2937] sm:w-3/6 w-full mx-auto max-w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            Here are my accumulated experiences and current fields in official and freelancing marketplaces. 
                        </p>
                    </div>
                    <div className="mt-8">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-1/2 w-full animatable">
                                <div className="mt-2 px-8">
                                    <h2 className="flex items-center justify-start border-b-2 border-dotted border-[#1F2937]/[.5]">
                                        <span className="text-[27px] tracking-tight font-[600] text-[#1F2937]">Full Time (Official)</span>
                                    </h2>
                                    <div className="mt-3 tracking-normal divide-y divide-[#1F2937]/[0.2]">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="flex sm:flex-row flex-col sm:items-center items-start px-4 py-4 hover:bg-[#10B881]/[.25] transition-all duration-500 sm:justify-between justify-start">
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[17px] font-[600] text-[#1F2937] w-full">{expo.company}</dd>
                                                        <dd className="text-[14px] font-[400] text-[#1F2937] w-full">{expo.position}</dd>
                                                    </dl>
                                                </div>
                                                <dd className="text-[14px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">
                                                    <time>{expo.startDate}</time>
                                                    <span>—</span>
                                                    <time>{expo.endDate}</time>
                                                </dd>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:w-1/2 w-full animatable">
                                <div className="mt-2 px-8">
                                    <h2 className="flex items-center justify-start border-b-2 border-dotted border-[#1F2937]/[.5]">
                                        <span className="text-[27px] tracking-tight font-[600] text-[#1F2937]">Freelance (Online)</span>
                                    </h2>
                                    <div className="mt-3 tracking-normal divide-y divide-[#1F2937]/[0.2]">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="flex sm:flex-row flex-col sm:items-center items-start px-4 py-4 hover:bg-[#10B881]/[.25] transition-all duration-500 sm:justify-between justify-start">
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white shadow-xl">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[17px] font-[600] text-[#1F2937] w-full">{expo.company}</dd>
                                                        <dd className="text-[14px] font-[400] text-[#1F2937] w-full">{expo.position}</dd>
                                                    </dl>
                                                </div>
                                                <dd className="text-[14px] text-[#1F2937] font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">
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
            </section>
        </>
    )
}

export default Bio