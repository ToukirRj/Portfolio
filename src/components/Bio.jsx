
import { Link } from 'react-router-dom'
import { experienceData1 } from '../datas/experienceData'
import { experienceData2 } from '../datas/experienceData'

const Bio = () => {
    return (
        <>
            <section className="sm:pt-20 sm:pb-48 py-12 relative">
                <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-40 gradient-stops'></div>
                <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-40 gradient-stops'></div>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative z-10">
                    <div className="relative text-center animatable">
                        <h2 className="text-[27px] font-bold text-[#1F2937] sm:text-4xl xl:text-5xl">Biography <span className="text-[#FF8045]">Experiences</span></h2>
                        <p className="mt-2 text-gray-600 sm:w-3/6 w-full mx-auto max-w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            Here are my accumulated experiences and current fields in official and freelancing marketplaces. 
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-1/2 w-full animatable">
                                <div className="rounded-[30px] bg-white p-8">
                                    <h2 className="flex items-center">
                                    <div className="p-2 bg-[#FF8045]/[0.3] rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    </div>
                                    <span className="ml-3 text-[22px] tracking-normal font-[600] text-gray-700">Full Time (Official)</span></h2>
                                    <div className="mt-6 space-y-4 tracking-normal">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className={`flex sm:flex-row flex-col sm:items-center items-start px-4 py-3 expo-link transition-all duration-500 rounded-xl sm:justify-between justify-start`}>
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-gray-300">
                                                        <img src={expo.logo} alt="icon" width="28" height="28" className="h-7 w-7" />
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[15px] font-[600] text-gray-800 w-full">{expo.company}</dd>
                                                        <dd className="text-[13px] font-[400] text-gray-500 w-full">{expo.position}</dd>
                                                    </dl>
                                                </div>
                                                <dd className="text-[12px] text-gray-600 font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">
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
                                <div className="rounded-[30px] bg-white p-8">
                                    <h2 className="flex items-center">
                                    <div className="p-2 bg-[#FF8045]/[0.3] rounded-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                    </div>
                                    <span className="ml-3 text-[22px] tracking-normal font-[600] text-gray-700">Freelance (Online)</span></h2>
                                    <div className="mt-6 space-y-4 tracking-normal">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className={`flex sm:flex-row flex-col sm:items-center items-start px-4 py-3 expo-link transition-all duration-500 rounded-xl sm:justify-between justify-start`}>
                                                <div className="flex gap-3 items-center">
                                                    <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-gray-300">
                                                        <img src={expo.logo} alt="icon" width="28" height="28" className="h-7 w-7" />
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[15px] font-[600] text-gray-800 w-full">{expo.company}</dd>
                                                        <dd className="text-[13px] font-[400] text-gray-500 w-full">{expo.position}</dd>
                                                    </dl>
                                                </div>
                                                <dd className="text-[12px] text-gray-600 font-[500] uppercase sm:ml-0 sm:mt-0 mt-1 ml-[52px]">
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