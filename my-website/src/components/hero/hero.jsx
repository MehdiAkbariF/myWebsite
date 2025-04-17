import React from 'react';
import Person from '../../../public/images/person.png'

const hero = () => {
  return (
    <>
      <main className='w-full bg-[#f3f3f3] p-2'>
      <div className=' grid grid-cols-1 sm:grid-cols-2
       items-center space-y-2 py-12 sm:py-0 sm:h-[600px] '>
          <div >
        <div className='space-y-2 grid justify-items-center sm:justify-items-start'>
          <p className='font-bold'>سلام</p>
          <p className='text-3xl md:text-4xl
          font-bold text-black/80'>من مهدی اکبری توسعه دهنده وب هستم</p>
              <p className='text-1xl md:text-2xl
              text-black/80'>تخصص من در توسعه فرانت اند و <br/>بک اند سایت میباشد</p>
             <button className='p-2 bg-orange-400 rounded-lg
              w-30 mt-5 cursor-pointer hover:bg-orange-600 font-bold duration-150 text-white'>ارتباط</button>
        </div>
        </div>
        {/*image container */}
        <div className=''>
          <img src={Person} className='w-96 h-96 mx-auto'></img>
        </div>
      </div>
    </main> 
    </>
  )
}

export default hero
