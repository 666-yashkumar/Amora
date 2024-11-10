import React from 'react'
import { DiAptana, DiAndroid, DiAtlassian } from "react-icons/di";

const Plan = () => {
  return (
    <div className='py-[100px] px-3  '>
        <div className="md:grid grid-cols-3 max-w-[1240px] mx-auto gap-10 ">
            
            <div className='shadow-2xl  h-[500px] my-3 p-4  hover:scale-105 duration-300 rounded-md relative text-center'>
                
                <DiAptana className='text-[4vw] text-gray-500 absolute top-[-7%] left-1/2 transform -translate-x-1/2 ' />
                <h1 className='pt-[55px] font-bold text-2xl'>Web Devlopment</h1>
                <span className='font-bold text-2xl '>$149</span>
                <p className='shadow-sm py-2 mt-2'>Lorem ipsum dolor sit amet.</p>
                <p  className='shadow-sm py-2 mt-2'>Lorem ipsum dolor sit amet. Avocado only sale</p>
                <p  className='shadow-sm py-2 mt-2'>Lorem ipsum dolor sit amet.</p>
                <button className='bg-green-400 rounded-lg font-bold py-2 px-4 mt-3 hover:bg-green-600'> Start Trial </button>

            </div>

            <div className='shadow-2xl h-[500px] my-3 p-4 bg-gray-200 hover:scale-105 duration-300 rounded-md relative text-center'>

                <DiAtlassian  className='text-[4vw] text-violet-700 absolute top-[-7%] left-1/2 transform -translate-x-1/2' />
                <h1 className='pt-[55px] font-bold text-2xl'>Trading</h1>
                <span className='font-bold text-2xl '>$149</span>
                <p className='shadow-lg py-2 mt-2'>Lorem ipsum dolor sit amet.</p>
                <p  className='shadow-lg py-2 mt-2'>Lorem ipsum dolor sit amet. Avocado only sale</p>
                <p  className='shadow-lg py-2 mt-2'>Lorem ipsum dolor sit amet.</p>
                <button className='bg-zinc-700 text-white rounded-lg font-bold py-2 px-4 mt-3 hover:bg-zinc-500'> Start Trial </button>

            </div>

            <div className='shadow-2xl h-[500px] my-3  p-4 hover:scale-105 duration-300 rounded-md relative text-center'>

                <DiAndroid className='text-[4vw] text-green-500 absolute top-[-7%] left-1/2 transform -translate-x-1/2 '/>
                <h1 className='pt-[55px] font-bold text-2xl'>App Devlopment</h1>
                <span className='font-bold text-2xl '>$149</span>
                <p className='shadow-sm py-2 mt-2'>Lorem ipsum dolor sit amet.</p>
                <p  className='shadow-sm py-2 mt-2'>Lorem ipsum dolor sit amet. Avocado only sale</p>
                <p  className='shadow-sm py-2 mt-2'>Lorem ipsum dolor sit amet.</p>
                <button className='bg-green-400 rounded-lg font-bold py-2 px-4 mt-3 hover:bg-green-600'> Start Trial </button>

            </div>

        </div>
    </div>
  )
}

export default Plan