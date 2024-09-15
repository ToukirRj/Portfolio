import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <div className="md:pt-20 pt-6 md:pb-16 pb-6 relative z-20">
                <div className="mx-auto px-4 sm:px-12 max-w-7xl xl:px-8">
                    <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 md:mx-[70px] mx-0'>
                        <div className='text-end'>
                            <div className='md:w-[65%] w-full mx-auto md:mt-[50px] mt-0 md:text-start text-center'>
                                <h2 className="md:text-[69px] text-[47px] font-bold text-[#1F2937] md:leading-[80px] leading-[55px]">My 
                                    <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Eyes</span> <br/>to Work
                                </h2>
                                <p className="mx-auto max-w-full mt-2 text-[#1F2937] w-full md:text-[23px] text-[19px] font-[300] md:leading-[37px] leading-[29px]">
                                    Depend on customer satisfaction, Here are the services I provide
                                </p>
                            </div>
                        </div>
                        {serviceData.map(service => (
                            <div key={service.id} className="each-service backdrop-blur-lg bg-white/[.15] shadow-[0_0px_15px_0px_rgba(2,24,93,0.085)] md:rounded-[64px] rounded-[44px] overflow-hidden">
                                <div className='w-full relative'>
                                    <div className='absolute right-0 top-0 md:h-[130px] h-[90px] md:w-[130px] w-[90px] rounded-full bg-white flex items-center justify-center shadow'>
                                        <img width="50" height="50" src={service.imgPath} alt='icon'/>  
                                    </div>
                                    <div className='relative md:p-[50px] p-[30px]'>
                                        <h4 className="px-[15px] h-[28px] rounded-full bg-[#1F2937] flex items-center w-max md:text-[13px] text-[11px] font-medium uppercase tracking-wider text-white">
                                            {service.title}
                                        </h4>
                                        <h4 className="relative mt-8 pe-[10px] md:text-[28px] text-[19px] font-[600] text-[#1F2937] md:leading-[35px] leading-[27px] w-[84%]">
                                            {service.description}
                                        </h4>                      
                                        <div className='md:gap-2 gap-1 md:mt-[200px] mt-[150px]'>
                                            {service.tools.map((tool, index) => (
                                                <span key={index} className="inline-flex px-[10px] py-[2px] me-2 mt-2 items-center justify-center text-[#1F2937] font-[500] text-[13px] rounded-[7px] bg-white shadow-[0_3px_15px_0px_rgba(2,24,93,0.17)] tracking-wider">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <img className='absolute -bottom-10 -right-10 -z-10 w-[420px]' src={service.img} alt="img"/>
                                    <span className='absolute h-[70%] w-full bottom-0 left-0 bg-gradient-to-t from-[#FF8045]/[0.65] to-transparent -z-10'></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eyes;