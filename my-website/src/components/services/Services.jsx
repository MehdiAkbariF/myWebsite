import React from 'react'
import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <>
          <section className='bg-[#f3f3f3] py-10'>
        <div className='container mx-auto flex flex-col itemes-center'>
            <h1 className='inline-block mx-auto w-60 text-3xl text-center 
            font-bold mb-3 border-b-2 p-2 border-orange-500'>سرویس ها</h1>
                  <p className='text-slate-500 text-center md:w-[50%] mx-auto'>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                    </p>
                               
        </div>
         {/*Services Card*/} 
        <div>
            <ServicesBox/>
        </div>
    </section> 
    </>
  )
}

export default Services
