
import ProjectData from '../datas/projectData';
import { useState } from 'react';

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
                        <a key={item.id} onClick={() => toggleOffCanvas(item)} className='block cursor-pointer relative p-1 w-full h-auto rounded-[19px] bg-[#1F2937]/[.09] group transition-all duration-300 overflow-hidden'>
                            <div className='w-full h-auto overflow-hidden bg-[#156834] rounded-[15px] transition-all duration-300'>
                                <img src={item.image} alt='pro-img' className='group-hover:opacity-50 transition-all duration-300'/>
                            </div>
                            {/* <h3 className='text-slate-400 text-[19px] font-[500] text-center py-4'>{item.title}</h3> */}
                            <span className="invisible group-hover:visible absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto w-14 h-14 bg-white rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#25AD56" d="M15.85 3.85L17.3 5.3l-2.18 2.16c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L18.7 6.7l1.45 1.45a.5.5 0 0 0 .85-.36V3.5c0-.28-.22-.5-.5-.5h-4.29a.5.5 0 0 0-.36.85m-12 4.3L5.3 6.7l2.16 2.18c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L6.7 5.3l1.45-1.45A.5.5 0 0 0 7.79 3H3.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.36m4.3 12L6.7 18.7l2.18-2.16c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0L5.3 17.3l-1.45-1.45a.5.5 0 0 0-.85.36v4.29c0 .28.22.5.5.5h4.29a.5.5 0 0 0 .36-.85m12-4.3L18.7 17.3l-2.16-2.18c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l2.18 2.16l-1.45 1.45a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5v-4.29a.5.5 0 0 0-.85-.36"/></svg>
                            </span>
                            <div className='invisible absolute bottom-0 left-0 w-full h-auto p-3 pt-16 bg-gradient-to-t from-[#1F2937]/[.9] to-transparent group-hover:visible'>
                                <div className='w-full h-[48px] flex items-center justify-center backdrop-blur-lg bg-white/[0.75] p-2 rounded-[7px] text-center'>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>


            <div className={`fixed z-[99999] bottom-0 left-0 w-full h-[94vh] bg-[#FAF4E7]/[.85] backdrop-blur-lg text-[#1F2937] transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out z-50`}>
                <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setIsOpen(false)}>
                        Close
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