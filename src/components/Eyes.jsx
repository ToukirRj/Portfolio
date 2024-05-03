import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 max-w-7xl xl:px-0">
                    <div className="text-center animatable">
                        <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">My 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Eyes</span> to Work
                        </h2>
                        <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-4/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px]">
                            The services I provide are up to customer satisfaction
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8">
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-center justify-items-center">
                            {serviceData.map(service => (
                                <div key={service.id} className="relative mb-4">
                                    <div className="flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>
                                        <div className='w-full'>
                                            <h4 className="mb-2 text-[25px] leading-[36px] font-[600] tracking-tight text-[#1F2937] sm:text-start text-center">
                                                {service.title}
                                            </h4>
                                            <div className='flex gap-2'>
                                                {service.tools.map((tool, index) => (
                                                    <span key={index} className="px-3 py-[2px] flex items-center justify-center text-[#1F2937] font-[600] text-[13px] rounded-full bg-white shadow-xl tracking-wide">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        
                        <div className="mt-16 grid divide-x divide-y divide-gray-100 bg-[#000]/[.05] overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                            {serviceData.map(service => (
                            <div key={service.id} className="relative transition">
                                <div className="relative space-y-8 py-12 p-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>


                                    <div className="space-y-2">
                                        <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-secondary">
                                            {service.title}
                                        </h5>
                                        {/* <p className="text-gray-600 dark:text-gray-300">
                                        Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                                        </p> */}
                                    </div>
                                    <div className='flex gap-2'>
                                        {service.tools.map((tool, index) => (
                                            <span key={index} className="px-3 py-[2px] flex items-center justify-center text-[#1F2937] font-[600] text-[13px] rounded-full bg-white shadow-xl tracking-wide">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eyes;