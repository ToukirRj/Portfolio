
import React from 'react';
import skillsData from '../datas/skillsData';

const Weapons = () => {
  return (
    <section className="sm:py-20 py-12 relative">
      <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-40 gradient-stops'></div>
      <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-40 gradient-stops z-10'></div>
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative z-10">
        <div className="relative">
          <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl sm:text-start text-center">
            The <span className="text-[#FF8045]">Weapons</span> Power
          </h2>
          <p className="mt-2 text-gray-600 sm:w-3/6 w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px] sm:text-start text-center">
            The platforms and languages that I use to apply my thoughts to the needs. My skills about them are highlighted through charts.
          </p>
        </div>

        <div className="sm:mt-12 mt-8 relative z-10">
          <div className="gap-6 space-y-0 flex sm:flex-row flex-col items-center">
            {skillsData.map((category, index) => (
              <div key={index} className="sm:w-1/3 w-full">
                <div className="rounded-[25px] bg-white bg-blur p-8">
                  <h2 className="flex items-center">
                    <span className="text-[21px] text-center w-full font-semibold tracking-tight text-gray-600">{category.title}</span>
                  </h2>
                  <div className="mt-3 space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex gap-2 items-center">
                          <div className="img-holder">
                            <img src={skill.icon} alt="icon" width="28" height="28" />
                          </div>
                          <dd>{skill.name}</dd>
                        </div>
                        <div className="counter">{skill.percent}%</div>
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