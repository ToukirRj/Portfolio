
import Step from '/img/steps.webp'
import stepsData from '../datas/stepsData'

const Steps = () => {
    return (
        <>
            <div className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className='grid grid-cols-2 gap-10 mx-[70px]'>
                        <div className="w-full relative">
                            <div className='w-[74%] mx-auto mb-[50px] text-end'>
                                <h2 className="text-[67px] font-bold text-[#1F2937] leading-[74px]"> 
                                    <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Steps</span> of <br/>A Project
                                </h2>
                                <p className="mx-auto max-w-full mt-2 text-[#1F2937] w-full text-[19px] font-[300] leading-[37px] tracking-wide">
                                    I use these steps to reach the destination of your project needs
                                </p>
                            </div>
                            <div className="p-7 backdrop-blur-lg bg-white/[.25] shadow-[0_3px_35px_0px_rgba(2,24,93,0.095)] rounded-[45px]">
                                <img src={Step} alt="steps"/>
                            </div>
                        </div>
                        <div className="w-full ps-10">
                            {stepsData.map(step => (
                                <div key={step.id} className="step relative z-10 w-full mb-5">
                                    <span className='absolute -z-50 -top-[17px] -left-[31px] w-[40px] h-[40px] rounded-l-[40px] rounded-tr-[40px] bg-[#1F2937] flex items-center justify-center'>
                                        <h3 className='text-[20px] font-[600] text-white'>{step.id}</h3>
                                    </span>
                                    <div className="px-5 py-4 backdrop-blur-lg bg-white/[.085] shadow-[0_3px_35px_0px_rgba(2,24,93,0.15)] rounded-[25px]">
                                        <div>
                                            <div className="px-4 py-[3px] w-auto rounded-[30px] bg-[#FF8045]/[.28] text-[13px] font-[500] text-[#1F2937] tracking-wide table">{step.topic}</div>
                                            <h4 className="mt-2 text-[20px] font-[300] text-[#1F2937] tracking-normal">{step.Name}</h4>
                                        </div>
                                        <span className="line bg-[#1F2937] w-0.5 h-full top-4 -left-[11px] absolute"></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps