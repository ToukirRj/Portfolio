
import { Navigation, A11y} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import testyData from '../datas/testyData'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const testyImageSrc = (index) => `./img/clients/${index + 1}.webp`;

function satisfy (){
    const testimonials = testyData();
    return (
        <>
            <section className="sm:pt-20 sm:pb-48 py-12 relative">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 relative z-10">
                    <div className="relative mb-10 animatable">
                        <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl xl:text-5xl">
                            Satisfaction <span className="text-[#FF8045]">Quotes</span>
                        </h2>
                        <p className="mt-2 text-gray-600 sm:w-3/6 w-full sm:text-[16px] text-[14px] font-[400] tracking-wide leading-[21px]">
                            My some of respected client's happiness after project completion
                        </p>
                    </div>
                </div>
                <div className="mx-auto px-4 sm:px-12 xl:max-w-7xl xl:px-0 relative z-10 animatable">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        navigation
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 20,
                            },
                          }}
                        >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                            <figure className="rounded-3xl bg-white sm:p-10 p-5 shadow-md lg:mb-5 mb-20">
                                <blockquote className="relative">
                                    <p className="text-[12px] leading-[22px] font-[400] text-gray-500 tracking-wider">{testimonial.quote}</p>
                                </blockquote>
                                <figcaption className="relative mt-4 flex items-center justify-between border-t border-slate-150 pt-4">
                                    <div className='ms-3'>
                                        <div className="text-[15px] font-[500] text-slate-800 tracking-wide">{testimonial.name}</div>
                                        <div className="text-[12px] text-gray-500 font-[500] tracking-wide">{testimonial.position}</div>
                                    </div>
                                    <div className="overflow-hidden rounded-full bg-slate-50 border-2 border-[#B05BC3]/[.35]">
                                        <img src={testyImageSrc(index)} width="60" height="60" className="h-14 w-14 object-cover border-4 border-white rounded-full" alt="avatar"/>
                                    </div>
                                </figcaption>
                            </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
}

export default satisfy;