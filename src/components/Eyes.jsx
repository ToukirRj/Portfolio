import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 max-w-7xl xl:px-0">
                    <div className="text-center animatable">
                        <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">My 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Eyes</span> to Work
                        </h2>
                        <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-4/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px]">
                            The services I provide are up to customer satisfaction
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8">
                        <div className='grid grid-cols-2 gap-6 mx-[70px]'>
                            <div className='text-start'>
                                <div className='w-[70%] mx-auto'>
                                    <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">My 
                                        <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Eyes</span> <br/>to Work
                                    </h2>
                                    <p className="mx-auto max-w-full mt-2 text-[#1F2937] w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px]">
                                        The services I provide are up to customer satisfaction
                                    </p>
                                </div>
                            </div>
                            {serviceData.map(service => (
                                <div key={service.id} className="backdrop-blur-lg bg-white/[.25] shadow-[0_3px_35px_0px_rgba(2,24,93,0.075)] rounded-[64px]">
                                    <div className='w-full items-center'>
                                        <div className='flex items-center justify-between'>
                                            <h4 className="ms-[60px] block w-max text-[13px] font-medium uppercase tracking-wider text-[#1F2937]">
                                                {service.title}
                                            </h4>
                                            <div className='h-[130px] w-[130px] rounded-full bg-white flex items-center justify-center'>
                                                <img width="30" height="30" src={service.imgPath} alt='icon'/>  
                                            </div>
                                        </div>
                                        <div className='relative px-[60px] pb-[60px]'>
                                            <h4 className="relative -mt-[20px] pe-[10px] text-[34px] font-[600] text-[#1F2937] sm:text-start text-center leading-[43px] w-[84%]">
                                                {service.description}
                                            </h4>                      
                                            <div className='flex gap-2 mt-[200px]'>
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
                    </div> 
                </div>
            </section>
        </>
    )
}

export default Eyes;