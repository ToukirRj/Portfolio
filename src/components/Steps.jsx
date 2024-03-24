
import Step from '/img/steps.webp'
import stepsData from '../datas/stepsData'

const Steps = () => {
    return (
        <>
            <section className="sm:py-24 py-12 relative z-20">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="relative animatable">
                        <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl text-center">Steps of 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#10b881] inline-block text-transparent bg-clip-text ps-3">Project</span>
                        </h2>
                        <p className="mt-2 mb-7 text-[#1F2937] sm:w-3/6 mx-auto w-full sm:text-[16px] text-[13px] font-[400] tracking-wide leading-[21px] text-center">
                            I combine my thoughts with the demands of your project. And it is done to get you to your destination. That is why we proceed according to these steps. 
                            The steps will be reduced or increased as per your demand according to the project. 
                        </p>
                    </div>
                    <div className="mt-5">
                        <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
                            <div className="sm:w-2/6 w-full animatable">
                                <ol role="list" className="overflow-hidden pl-[20px]">
                                    {stepsData.map(step => (
                                        <li className="steplist relative w-full pb-5" key={step.id}>
                                            <div className="bar bg-[#1F2937] w-0.5 h-full top-4 left-4 absolute" aria-hidden="true"></div>
                                            <div className="flex items-center relative">
                                                <span className="flex items-center h-10">
                                                    <span className="bgclr w-8 h-8 rounded-full flex justify-center items-center relative z-10">
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
                            <div className="sm:w-4/6 w-full animatable">
                                <div className="p-5">
                                    <img src={Step} alt="steps"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Steps