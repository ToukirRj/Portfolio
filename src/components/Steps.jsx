
import Step from '/img/steps.webp'
import stepsData from '../datas/stepsData'

const Steps = () => {
    return (
        <>
            <div className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="relative ">
                        <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937] text-center">
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Steps</span> 
                            &nbsp;of A Project
                        </h2>
                        <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-4/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px] text-center">
                            I use these steps to reach the destination of your project needs
                        </p>
                    </div>
                    <div className="mt-8">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-4/6 w-full ">
                                <div className="p-0">
                                    <img src={Step} alt="steps"/>
                                </div>
                            </div>
                            <div className="sm:w-2/6 w-full ">
                                <ol role="list" className="overflow-hidden pl-[20px]">
                                    {stepsData.map(step => (
                                        <li className="steplist relative w-full pb-2" key={step.id}>
                                            <div className="bar bg-[#1F2937] w-0.5 h-full top-4 left-[13px] absolute" aria-hidden="true"></div>
                                            <div className="flex items-center relative">
                                                <span className="flex items-center h-9">
                                                    <span className="bgclr w-7 h-7 rounded-full flex justify-center items-center relative z-10">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" className="w-4 h-4" viewBox={`${step.iconNumber}`} dangerouslySetInnerHTML={{ __html: step.iconStyle }}/>
                                                    </span>
                                                </span>
                                                <span className="min-w-0 flex flex-col ml-4">
                                                    <span className="font-[600] text-[17px] tracking-normal text-gray-700">{step.Name}</span>
                                                </span>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Steps