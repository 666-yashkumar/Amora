import React from 'react'

const Talk = () => {
  return (
    <div className=' bg-gradient-to-r from-gray-500 to-gray-700 p-4'>

        <div className='w-full py-[50px] md:flex justify-between items-center mx-auto text-center'>
            <div className="left ">
                <h1 className='tex-xl md:text-3xl font-bold'>Want to Learn Latest IT Skills ?</h1>
                <span className=' text-[15px] md:text-sm '>Sign up to join our news letter to stay up to date.</span>
            </div>

             <div className="right text-white my-3 ">
                <input type='email' placeholder='Enter ur E-mail' required className='rounded-md text-black '/>
                <button className='bg-slate-500 mx-1 px-2 rounded-md my-3'>Submit</button>
                <p className='text-[12px] md:text-lg'>We care about the protection of your data. Read our <br/><a href='' className='text-black underline'>Privacy policy</a> </p>
             </div>
        </div>

    </div>
  )
}

export default Talk