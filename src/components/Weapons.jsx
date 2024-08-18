
import skillsData from '../datas/skillsData';

const Weapons = () => {
  return (
    <section className="sm:py-24 py-12 relative z-20">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 animatable">
        <div className="relative">
          <h2 className="xl:text-[55px] md:text-4xl sm:text-3xl text-[23px] font-bold text-[#1F2937] text-center">
            My<span className="bg-gradient-to-r from-[#ff8144] to-[#17b057] inline-block text-transparent bg-clip-text ps-3 leading-[67px]">Weapons</span> Power
          </h2>
          <p className="mx-auto max-w-full mt-2 text-[#1F2937] sm:w-4/6 w-full sm:text-[19px] text-[14px] font-[300] tracking-wide leading-[27px] text-center">
            As a professional, the percentage of my skills by platform and language
          </p>
        </div>

        <div className="sm:mt-16 mt-8 relative z-10">
          <div className="gap-8 space-x-7 flex sm:flex-row flex-col items-center">
            {skillsData.map((category, index) => (
              <div key={index} className="sm:w-1/3 w-full">
                <div className="bg-blur animatable">
                  <h2 className="flex items-center mb-3">
                    <span className="text-[28px] w-full font-[600] text-center tracking-tight text-[#1F2937] border-b-2 border-dotted border-[#1F2937]/[.5]">{category.title}</span>
                  </h2>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between py-3 px-4 bg-[#000]/[.05] rounded-[12px]">
                        <div className="flex gap-2 items-center">
                          <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white shadow-xl">
                            <img src={skill.icon} alt="icon" width="30" height="30" className='h-7 w-7 overflow-hidden rounded-full'/>
                          </div>
                          <dd className='text-[#1F2937] font-[600] text-[16px] tracking-normal'>{skill.name}</dd>
                        </div>
                        <div className="px-3 py-[2px] flex items-center justify-center text-[#1F2937] font-[600] text-[15px] rounded-full bg-white shadow-xl">{skill.percent}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weapons;