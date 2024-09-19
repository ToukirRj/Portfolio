
import ProjectData from '../datas/projectData';
import { useState, useEffect } from 'react';

function ProjectList (){
    const [isOpen, setIsOpen] = useState(false);
    const [activeData, setActiveData] = useState(null);
  
    const toggleOffCanvas = (data) => {
      setActiveData(data);
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);


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
                        <a key={item.id} onClick={() => toggleOffCanvas(item)} className='block cursor-pointer relative p-1 w-full h-auto rounded-[19px] bg-[#1F2937]/[.15] group transition-all duration-300 overflow-hidden'>
                            <div className='w-full h-auto overflow-hidden bg-[#1F2937] rounded-[17px] transition-all duration-300'>
                                <img src={item.image} alt='pro-img' className='group-hover:opacity-40 transition-all duration-300'/>
                            </div>
                            <div className='absolute bottom-0 left-0 w-full h-full text-center px-3 scale-0 group-hover:scale-100 bg-gradient-to-t from-[#1F2937]/[.9] via-[#1F2937]/[.035] to-transparent flex items-end justify-center'>
                                <h3 className='m-0 text-[15px] text-white font-[400] text-center py-3 tracking-wide'>{item.title}</h3>
                            </div>
                            <span className="absolute top-0 scale-0 group-hover:scale-100 bottom-0 left-0 right-0 mx-auto my-auto w-14 h-14 bg-white rounded-full flex items-center justify-center transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#25AD56" d="M15.85 3.85L17.3 5.3l-2.18 2.16c-.39.39-.39 1.03 0 1.42s1.03.39 1.42 0L18.7 6.7l1.45 1.45a.5.5 0 0 0 .85-.36V3.5c0-.28-.22-.5-.5-.5h-4.29a.5.5 0 0 0-.36.85m-12 4.3L5.3 6.7l2.16 2.18c.39.39 1.03.39 1.42 0s.39-1.03 0-1.42L6.7 5.3l1.45-1.45A.5.5 0 0 0 7.79 3H3.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.36m4.3 12L6.7 18.7l2.18-2.16c.39-.39.39-1.03 0-1.42s-1.03-.39-1.42 0L5.3 17.3l-1.45-1.45a.5.5 0 0 0-.85.36v4.29c0 .28.22.5.5.5h4.29a.5.5 0 0 0 .36-.85m12-4.3L18.7 17.3l-2.16-2.18c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l2.18 2.16l-1.45 1.45a.5.5 0 0 0 .36.85h4.29c.28 0 .5-.22.5-.5v-4.29a.5.5 0 0 0-.85-.36"/></svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
            <div className={`fixed z-[99999] bottom-0 left-0 w-full h-[94vh] overflow-y-auto bg-[#FAF4E7] text-[#1F2937] transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out z-50 rounded-t-[30px]`}>
                {activeData && (  
                    <>
                        <div className="sticky top-0 z-10 w-full">
                            <div className="mx-auto md:max-w-5xl max-w-full md:px-0 px-4">
                                <h2 className="md:text-[23px] text-[17px] font-semibold backdrop-blur-lg bg-[#FAF4E7]/[.9] w-full h-[70px] flex items-center md:ps-0 pe-[45px]">{activeData.title}</h2>
                            </div>
                            <button className="absolute top-4 right-4 text-white text-xl" onClick={() => setIsOpen(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24">
                                    <g fill="none" stroke="#F60002" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="11.999" r="9"/><path d="m15 9l-6 6m0-6l6 6"/>
                                    </g>
                                </svg>   
                            </button>
                        </div>
                        <div className="mx-auto md:max-w-5xl max-w-full md:px-0 px-4">
                            <div className="relative">
                                <img src={activeData.image} alt='pro-img' className='w-full h-auto rounded-[15px]'/>
                                <div className="mx-auto md:max-w-[40rem] max-w-full pt-10 pb-[150px]">
                                    <h1 className='md:text-[23px] text-[17px] text-[#1F2937] font-[700]'>Short Intro</h1>
                                    <p className="mt-4 text-[15px] text-[#1F2937] font-[400] tracking-wide leading-[29px]">{activeData.content}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className={`fixed z-[999] top-0 left-0 w-full h-full bg-[#1F2937] bg-opacity-70 ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300 ease-in-out`} onClick={() => setIsOpen(false)}></div>
        </div>
    );
}

export default ProjectList;