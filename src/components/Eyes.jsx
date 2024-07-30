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
                        {serviceData.map(service => (
                            <div key={service.id} className="backdrop-blur-lg bg-white/[.25] shadow-[0_3px_35px_0px_rgba(2,24,93,0.075)] rounded-[18px] p-[30px] mb-6">
                                <div className='w-full grid grid-cols-7 items-center'>
                                    <div className='col-span-1'>
                                        <h4 className="text-[1.15rem] font-[600] uppercase tracking-tight text-[#1F2937] sm:text-start text-center">
                                            {service.title}
                                        </h4>
                                    </div>
                                    <div className='col-span-3'>
                                        <h4 className="text-[14px] font-[400] tracking-[.5px] text-[#1F2937] sm:text-start text-center leading-[24px]">
                                            {service.description}
                                        </h4>
                                    </div>
                                    <div className='col-span-3'>
                                        <div className='flex justify-between items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".35" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>                                     
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
                            </div>
                        ))}
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Eyes;