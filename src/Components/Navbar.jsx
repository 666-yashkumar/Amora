import React, { useState } from 'react'
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [Move, setMove] = useState(false)
  return (
    <>
       <div className='bg-orange-500 px-6 py-4  '>
       <div className='h-10 max-w-[1240px]   flex justify-between items-center mx-2'>
            <div className='text-[34px] font-extrabold'>
                Amora
            </div>


            
            {
              Move? 
              <IoClose onClick={()=>setMove(!Move)} className='text-white text-xl md:hidden block' />
              :
              <IoMenu onClick={()=>setMove(!Move)} className='text-white text-xl md:hidden block' />

            }
           
            
            <div className='hidden md:flex gap-4 ' 
                  style={{ listStyleType: 'none' }}>
                <li className='cursor-pointer' >Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Help</li>
            </div>
            <div className={`duration-300 md:hidden w-full h-screen text-xl fixed bg-slate-500 pt-2 ${Move ?'left-[0]':'left-[-100%]'} top-[88px] ` }
                  style={{ listStyleType: 'none' }}>
                <li className='py-1 px-3'>Home</li>
                <li className='py-1 px-3'>About</li>
                <li className='py-1 px-3'>Contact</li>
                <li className='py-1 px-3'>Help</li>
            </div>
        </div>
       </div>
    
    </>
  )
}

export default Navbar