
import serviceData from '../datas/serviceData';

const Eyes = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 max-w-6xl xl:px-0">
                    <div className="text-center animatable">
                        <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl">My 
                        <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3">Eyes</span> to Work</h2>
                        <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-3/6 w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            My eyes are focused on using my understanding of customer needs and their satisfaction. My services criteria are:
                        </p>
                    </div>
                    <div className="sm:mt-12 mt-8">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="relative w-1/3 divide-y divide-[#1F2937]/[0.2] animatable">
                                {serviceData.map(service => (
                                    <div key={service.id} className="flex flex-col items-center gap-3 py-6 animatable">
                                        <div className="w-1/12">
                                            <span className='w-16 h-16 rounded-xl bg-white/[0.85] shadow-lg shadow-primary/10 flex items-center justify-center'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={service.iconColor} strokeWidth=".85" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-${service.iconPath}`} dangerouslySetInnerHTML={{ __html: service.iconStyle }}/>
                                            </span>
                                        </div>
                                        <div className='w-3/12'>
                                            <h4 className="text-[33px] leading-[36px] font-[700] tracking-tight text-[#1F2937] sm:text-start text-center">{service.title}</h4>
                                        </div>
                                        <div className='w-8/12'>
                                            <p className="mt-1 text-[15px] font-[400] text-[#1F2937] tracking-wide sm:text-start text-center">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Eyes