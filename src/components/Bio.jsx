
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
                                    <h2 className="flex items-center justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                        <span className="ml-2 text-[27px] tracking-tight font-[600] text-[#1F2937]">Full Time (Official)</span>
                                    </h2>
                                    <div className="mt-3 tracking-normal divide-y divide-[#1F2937]/[0.2]">
                                        {experienceData1.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="flex sm:flex-row flex-col sm:items-center items-start px-4 py-4 hover:bg-[#10B881]/[.25] transition-all duration-500 sm:justify-between justify-start">
                                                <div className="flex gap-4 items-center">
                                                    <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white shadow-lg shadow-primary/30">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[19px] font-[600] text-[#1F2937] w-full">{expo.company}</dd>
                                                        <dd className="text-[15px] font-[400] text-[#1F2937] w-full">{expo.position}</dd>
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
                                    <h2 className="flex items-center justify-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m81.57 64h-40.18a139.15 139.15 0 0 0-23.45-50.2A90.32 90.32 0 0 1 209.57 90m8.43 38a89.7 89.7 0 0 1-3.83 26h-42.31a159 159 0 0 0 0-52h42.31a89.7 89.7 0 0 1 3.83 26m-90 90a1.75 1.75 0 0 1-1.32-.59C113.8 203.54 104.34 185.73 99 166h58c-5.34 19.73-14.8 37.54-27.68 51.41a1.75 1.75 0 0 1-1.32.59m-31.69-64a147.48 147.48 0 0 1 0-52h63.38a147.48 147.48 0 0 1 0 52ZM38 128a89.7 89.7 0 0 1 3.83-26h42.31a159 159 0 0 0 0 52H41.83A89.7 89.7 0 0 1 38 128m90-90a1.75 1.75 0 0 1 1.32.59C142.2 52.46 151.66 70.27 157 90H99c5.34-19.73 14.8-37.54 27.68-51.41A1.75 1.75 0 0 1 128 38m-17.94 1.8A139.15 139.15 0 0 0 86.61 90H46.43a90.32 90.32 0 0 1 63.63-50.2M46.43 166h40.18a139.15 139.15 0 0 0 23.45 50.2A90.32 90.32 0 0 1 46.43 166m99.51 50.2a139.15 139.15 0 0 0 23.45-50.2h40.18a90.32 90.32 0 0 1-63.63 50.2"/></svg>
                                        <span className="ml-2 text-[27px] tracking-tight font-[600] text-[#1F2937]">Freelance (Online)</span>
                                    </h2>
                                    <div className="mt-3 tracking-normal divide-y divide-[#1F2937]/[0.2]">
                                        {experienceData2.map(expo => (
                                            <Link to={expo.link} key={expo.id} target="_blank" 
                                            className="flex sm:flex-row flex-col sm:items-center items-start px-4 py-4 hover:bg-[#10B881]/[.25] transition-all duration-500 sm:justify-between justify-start">
                                                <div className="flex gap-4 items-center">
                                                    <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-full bg-white shadow-lg shadow-primary/30">
                                                        <img src={expo.logo} alt="icon" width="40" height="40"/>
                                                    </div>
                                                    <dl className="relative">
                                                        <dd className="text-[19px] font-[600] text-[#1F2937] w-full">{expo.company}</dd>
                                                        <dd className="text-[15px] font-[400] text-[#1F2937] w-full">{expo.position}</dd>
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