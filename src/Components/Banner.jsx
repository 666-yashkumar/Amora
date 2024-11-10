import React from 'react'
import { TypeAnimation } from 'react-type-animation';
 


const Banner = () => {
  return (
    <div className='bg-blue-400 w-full h-[87.2vh] text-center py-[150px] leading-tight'>
       <div>
        <h1 className='text-3xl md:text-5xl text-white font-bold'>Hello sir</h1>
        <h1 className='text-[50px] md:text-[80px] text-white font-bold'>Grow with us </h1>
        <div className='text-[30px] md:text-[50px] text-white'>
        Learn&nbsp;
          <TypeAnimation
            sequence={[
              "TRADING",
              1000,
              "WEB DEVLOPMENT",
              1000,
              "APP DEVELOPMENT",
              1000,
            ]}
            //wrapper="span"
            speed={20}
            repeat={Infinity}
          />
             
        </div>


       </div>
    </div>
  )
}

export default Banner