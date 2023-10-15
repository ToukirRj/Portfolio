

import React from 'react';
import Image from 'next/image';



 
function Footer(){
  return (
    <>
      <div className='w-full bg-[#162B40] py-10'>
        <ul className='flex items-center justify-center text-white space-x-6'>
          <Image src='/images/footer-logo.png' alt='footer-logo' width='200' height='80'/>
        </ul>
      </div>
    </>
  )
}
 
export default Footer