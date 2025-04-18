import React from 'react'

const About = () => {
  return (
    <>
  <section id='about' className='bg-white'>
    <div className='container md:w-[70%] mx-auto py-10'>
        <div className='grid items-center gap-4 grid-cols-1 sm:grid-cols-2'>
            <div className='relative font-bold'>
                <div className='text-center text-6xl xl:text-8xl text-black/5'>من</div>
                    <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 
                    translate-y-1/2 text-3xl md:text-4xl'>درباره من</h1>
                </div>
                <div className='text-slate-500 mt-8'>
                    <p>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.<br/>
                              
                    </p>
            <div>
                <a href='#' className='bg-orange-500 inline-block mr-6 text-white
                cursor-pointer hover:bg-orange-400 px-4 py-2 rounded-lg my-3'>دانلود رزومه</a>
                <a href='#' className=' ring-2 ring-orange-400 inset-0 text-orange-400 cursor-pointer
                hover:bg-orange-400 hover:text-white rounded-lg my-3 px-4 py-2 mr-2'>ارتباط</a>
                
            </div>
    </div>
    </div>
    </div>
  </section>
    </>
  )
}

export default About
