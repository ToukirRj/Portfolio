
import Abme from '/img/toukir.webp'
import { Link } from 'react-router-dom'
import statisticData from '../datas/statisticData';

const Myself = () => {
    return (
        <>
            <section id="about" className="sm:py-24 py-12 relative">
                <div className='h-[800px] w-[800px] absolute left-[3%] -top-[250px] opacity-40 gradient-stops z-0'></div>
                <div className='h-[800px] w-[800px] absolute right-[3%] -bottom-[250px] opacity-40 gradient-stops z-0'></div>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative z-20">
                    <div className="text-center sm:mb-8 mb-4">
                        <h2 className="sm:text-3xl text-[23px] font-bold text-[#1F2937] md:text-4xl xl:text-5xl">Effective <span className="text-[#FF8045]">Facts</span> About Me </h2>
                    </div>
                    <div className="-mx-4 sm:mx-0">
                        <div className="flex items-center sm:flex-row flex-col sm:px-0 px-[20px] animatable">
                            <div className="lg:w-1/5 sm:1/2 w-full">
                                <div className="flex flex-wrap justify-start gap-6 p-4 sm:px-12 lg:block lg:space-y-6 lg:px-0">
                                    {statisticData.map(statistic => (
                                        <div key={statistic.id} className="statis flex snap-center items-center gap-4">
                                            <div className={`h-14 w-14 rounded-xl bg-white/[0.85] shadow-lg shadow-primary/10 flex items-center justify-center`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke={statistic.iconColor} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: statistic.iconPath }} />
                                            </div>
                                            <div>
                                                <h2 className="text-4xl font-bold text-[#1F2937]">{statistic.value}</h2>
                                                <span className="block w-max text-[12px] font-medium uppercase tracking-wider text-[#1F2937]">{statistic.label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-2/5 sm:1/2 w-full">
                                <img className="h-auto lg:w-[340px] w-full max-w-full sm:rounded-[1.875rem] rounded-[20px] mx-auto" src={Abme} alt="cover"/>
                            </div>
                            <div className="lg:w-3/5 sm:1/2 w-full">
                                <div className="flex lg:flex-col snap-center items-center gap-8">
                                    <h2 className="sm:text-[26px] text-[21px] font-semibold tracking-tight text-[#1F2937]">Inner latent talentivity</h2>
                                    <p className="mt-4 text-[12px] font-[400] text-[#1F2937] tracking-wide leading-[21px]"> 
                                        Website application designer with a passion for creating inspiring and influential designs. Users will experience something new and get the interface according to their convenience. I love the latest technology projects as it keeps updated on the latest trends. A motivated, safe set of hands to take the weight of the project off your shoulders and getting the job done completely. Committed to working with honesty and dedication. <br/><br/>

                                        The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. This is further complicated by the fact that users now use a large variety of devices. So, let’s have a chat and make sure we’re a great fit together.
                                    </p>
                                    <div className="mt-3 flex justify-start">
                                        <Link to="skype:live:to.toukir.rahman?chat" className="group h-[65px] relative flex items-center">
                                            <div className="absolute top-0 bottom-0 left-0 my-auto w-[65px] h-[65px] group-hover:left-[84%] group-hover:w-[20px] group-hover:h-[20px] rounded-[65px] bg-[#10B880] transition-all duration-[.5s]"></div>
                                            <div className="relative ms-[32px] me-[5px] group-hover:me-[15px] transition-all duration-[.5s] text-[#1F2937]">Start Skype Chat</div>
                                            <div className="relative">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="#10B880" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"/></svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Myself