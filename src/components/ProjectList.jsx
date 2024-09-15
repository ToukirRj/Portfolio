
import ProjectData from '../datas/projectData'
const proImageSrc = (index) => `./img/projects/${index + 1}.webp`;

function ProjectList (){
    return (
        <div>
            <div className="md:py-20 py-6 relative">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className='text-center'>
                        <h2 className="md:text-[61px] text-[47px] font-bold text-[#1F2937] md:leading-[74px] leading-[55px]">Best Recent 
                            <span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3">Project</span> <br/>
                        </h2>
                        <p className="mx-auto max-w-full mt-1 text-[#1F2937] w-full md:text-[19px] text-[19px] font-[300] md:leading-[37px] leading-[29px] tracking-wide">
                            Sample project of my some works. Take a good idea about my concepts
                        </p>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 relative z-1">
                            {ProjectData.map((project, index) => (
                                <a href="#" key={index} className=" group w-full block bg-white/[0.5] bg-blur rounded-[21px] shadow-lg">
                                    <div className="w-full h-[435px] overflow-hidden rounded-[21px] border-[7px] border-white bg-[#000] shadow">
                                        <img className="h-full w-full scale-100 hover:scale-125 opacity-80 group-hover:opacity-100 transition-all duration-300" src={proImageSrc(index)} alt="img"/>
                                    </div>
                                    <div className="px-5 pt-3 pb-5">
                                        <h1 className="text-[19px] font-[500] text-gray-700 tracking-normal group-hover:text-[#17b057] pb-1">{project.title}</h1>
                                        <div className="flex gap-2 tags">
                                            {project.tags.map((tag, index) => (
                                                <span key={index} className="border text-[11px] font-[600] px-[8px] py-[1.5px] rounded uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default ProjectList;