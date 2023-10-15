
import React from 'react'
import Image from 'next/image'
import Slider from '../Home/Slider'

//Page Title with Description
export const metadata = {
    title: 'BeRiser - Home'
}

const Home = () => {
    return ( 
        <>
            <div className='pt-36 pb-24 relative overflow-hidden'>
                <div className='h-[500px] w-[500px] absolute left-10 -top-36 rounded-full overflow-hidden blur-[400px]'>
                    <div className="w-full h-full opacity-40 bg-gradient-radial from-[#ff9075] to-[#f8a752]"></div>
                </div>
                <div className='h-[500px] w-[500px] absolute right-10 -bottom-36 rounded-full overflow-hidden blur-[400px]'>
                    <div className="w-full h-full opacity-40 bg-gradient-radial from-[#ff9075] to-[#f8a752]"></div>
                </div>

                <div className='grid grid-cols-5 items-center max-w-6xl mx-auto'>
                    <div className='col-span-3'>
                        <h1 className='text-[75px] font-medium text-[#162B40] leading-[75px]'>Build beautiful01 <br/> products, faster.</h1>
                        <p className='py-6 text-xl font-light text-[#162B40]'>A professional design libraries for UI Designers</p>
                    </div>
                    <div className='col-span-2'>
                        <Image src='images/slide.svg' alt="slide" width='440' height='700'/>
                    </div>
                </div>

            </div>
            <div className='pt-36 pb-24 relative overflow-hidden'>
                <div className='h-[500px] w-[500px] absolute left-10 -top-36 rounded-full overflow-hidden blur-[400px]'>
                    <div className="w-full h-full opacity-40 bg-gradient-radial from-[#ff9075] to-[#f8a752]"></div>
                </div>
                <div className='h-[500px] w-[500px] absolute right-10 -bottom-36 rounded-full overflow-hidden blur-[400px]'>
                    <div className="w-full h-full opacity-40 bg-gradient-radial from-[#ff9075] to-[#f8a752]"></div>
                </div>
                <div className='relative xl:max-w-6xl mx-auto'>
                    <Slider/>
                </div>
            </div>
        </>
    );
}
 
export default Home;