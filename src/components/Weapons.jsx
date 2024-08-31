
import skillsData from '../datas/skillsData';
import CircularProgress from '../props/CircularProgress';



const Weapons = () => {
  return (
    <div className="pt-14 pb-16 relative z-20">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 ">
        <div className="relative">
          <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937]">
            My<span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Weapons</span> Power
          </h2>
          <p className="mt-2 text-[#1F2937] sm:w-4/6 sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[30px]">
            As a professional, the percentage of my skills by <br/>platform and language
          </p>
        </div>

        <div className="mt-7 relative z-10">
          <div className="grid grid-cols-3 gap-8">
            {skillsData.map((category, index) => (
              <div key={index} className="w-full backdrop-blur-lg bg-white/[.25] shadow-[0_3px_35px_0px_rgba(2,24,93,0.095)] rounded-[45px] overflow-hidden p-10">
                <h2 className="text-[23px] font-[600] text-center tracking-tight text-[#1F2937]">{category.title}</h2>
                <div className="flex flex-wrap justify-center items-center">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className='flex flex-col w-1/2 items-center justify-center mt-5'>
                      <CircularProgress percentage={skill.percent} strokeWidth={5} />
                      <div className="relative -mt-[45px] mb-[13px] p-[5px] flex flex-none items-center justify-center rounded-full bg-[#ff8144]/[0.35]">
                        <img src={skill.icon} alt="icon" className='h-8 w-8 overflow-hidden rounded-full'/>
                      </div>
                      <h4 className="px-[15px] h-[26px] rounded-full bg-white/[.8] flex items-center w-max text-[12px] font-[600] uppercase tracking-wider text-[#1F2937]">{skill.name}</h4>
                    </div>
                  ))}
                </div>                                         
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weapons;