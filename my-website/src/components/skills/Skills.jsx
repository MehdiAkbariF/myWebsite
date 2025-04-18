import React from 'react'
import Skillslevel from './Skillslevel'

const Skills = () => {

  return (
    <>
   <section id='about' className='bg-white'>
      <div className='container md:w-[70%] mx-auto py-10'>
         <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
          <div className='relative font-bold sm:order-2'>
           <div className='text-center text-6xl xl:text-8xl text-black/5'>توانایی</div>
             <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 
             translate-y-1/2 text-2xl md:text-2xl'>توانایی های من</h1>
             </div>
      <div className='text-slate-500 mt-8 sm:order-1'> 
        <Skillslevel skillName="Html" percentage="90%"/> 
        <Skillslevel skillName="css" percentage="90%" />
        <Skillslevel skillName="tailwind" percentage="90%" />
        <Skillslevel skillName="bootstrap" percentage="90%" /> 
        <Skillslevel skillName="react" percentage="80%" /> 
        <Skillslevel skillName="next" percentage="70%" /> 
               
          </div>
          </div>
          </div>
          </section> 
         
    </>
  )
}

export default Skills
