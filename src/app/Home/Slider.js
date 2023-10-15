

"use client"
import { React } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'

import 'swiper/css'

export default () => {
    return (
        <>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={150}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <h1 className='text-[75px] font-medium text-[#162B40] leading-[75px]'>Build beautiful01 <br/> products, faster.</h1>
                    <p className='py-6 text-xl font-light text-[#162B40]'>A professional design libraries for UI Designers</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className='text-[75px] font-medium text-[#162B40] leading-[75px]'>Build beautiful02 <br/> products, faster.</h1>
                    <p className='py-6 text-xl font-light text-[#162B40]'>A professional design libraries for UI Designers</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className='text-[75px] font-medium text-[#162B40] leading-[75px]'>Build beautiful03 <br/> products, faster.</h1>
                    <p className='py-6 text-xl font-light text-[#162B40]'>A professional design libraries for UI Designers</p>
                </SwiperSlide>
                <SwiperSlide>
                    <h1 className='text-[75px] font-medium text-[#162B40] leading-[75px]'>Build beautiful04 <br/> products, faster.</h1>
                    <p className='py-6 text-xl font-light text-[#162B40]'>A professional design libraries for UI Designers</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
