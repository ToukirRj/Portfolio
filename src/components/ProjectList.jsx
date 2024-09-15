
import ProjectData from '../datas/projectData';
import React, { useState } from 'react';

function ProjectList (){
    const [isOpen, setIsOpen] = useState(false);
    const [activeData, setActiveData] = useState(null);
  
    const toggleOffCanvas = (data) => {
      setActiveData(data);
      setIsOpen(!isOpen);
    };
    return (
        <div className='md:py-20 py-6 w-full'>
            <div className="mx-auto md:max-w-7xl max-w-full md:px-0 px-4">
                <div className='text-center mb-12'>
                    <h2 className="md:text-[52px] text-[43px] font-bold text-[#1F2937] md:leading-[60px] leading-[53px]">Best Recent 
                        <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Project</span> <br/>
                    </h2>
                    <p className="mx-auto max-w-full mt-1 text-[#1F2937] w-full md:text-[19px] text-[17px] font-[300] md:leading-[27px] leading-[23px] tracking-normal  ">
                        Sample project of my some works. Take a good idea about my concepts
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-9'>
                    {ProjectData.map((item) => (
                        <div key={item.id} className='relative p-1 w-full h-auto backdrop-blur-lg bg-[#1F2937] rounded-[19px] bg-[#1F2937]/[.09]'>
                            <div className='w-full h-auto overflow-hidden bg-slate-300 rounded-[15px]'>
                                <img src={item.image} alt='pro-img'/>
                            </div>
                            {/* <h3 className='text-slate-400 text-[19px] font-[500] text-center py-4'>{item.title}</h3> */}
                            <button className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto w-8 h-8 bg-white rounded-full flex items-center justify-center transition duration-300"
                                onClick={() => toggleOffCanvas(item)}>
                                Open 
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            <div className={`fixed z-[99999] bottom-0 left-0 w-full h-[94vh] bg-[#FAF4E7]/[.55] backdrop-blur-lg text-white transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out z-50`}>
                <button 
                    className="absolute top-4 right-4 text-white text-xl"
                    onClick={() => setIsOpen(false)}
                    >
                    &times;
                </button>

                {activeData && (
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{activeData.title}</h2>
                        <p className="mt-4">{activeData.content}</p>
                    </div>
                )}
            </div>


            <div 
                className={`fixed z-[999] top-0 left-0 w-full h-full bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out`}
                onClick={() => setIsOpen(false)}
            ></div>
        </div>


    );
}

export default ProjectList;