
import ProjectData from '../datas/projectData'

const proImageSrc = (index) => `./img/projects/${index + 1}.webp`;

function ProjectList (){
    return (
        <div>
            <section className="sm:pt-20 sm:pb-48 py-12 relative">
                <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-40 gradient-stops'></div>
                <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-40 gradient-stops'></div>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="text-center mb-8 relative z-10 animatable">
                        <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl">Best Recent <span className="text-[#FF8045]">Projects</span></h2>
                        <p className="mx-auto max-w-full mt-2 text-gray-600 sm:w-3/6 w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            Sample project of my some works. These will give you a good idea
                        </p>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 relative z-1">
                            {ProjectData.map((project, index) => (
                                <a href="#" key={index} className="group w-full block bg-white/[0.5] bg-blur rounded-[21px] shadow-lg">
                                    <div className="w-full h-[270px] overflow-hidden rounded-[21px] border-[20px] border-white bg-[#000] shadow">
                                        <img className="h-full w-full scale-100 hover:scale-125 opacity-80 transition-all duration-300" src={proImageSrc(index)} alt="img"/>
                                    </div>
                                    <div className="px-5 pt-3 pb-5">
                                        <h1 className="text-[15px] font-[600] text-gray-700 tracking-normal group-hover:text-[#10b881] pb-1">{project.title}</h1>
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
            </section> 
        </div>
    );
};

export default ProjectList;