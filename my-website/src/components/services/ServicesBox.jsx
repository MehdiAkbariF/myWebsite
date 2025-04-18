import React from 'react'
import { CgWebsite } from "react-icons/cg";

const Services =[
    {
        id:1,
        name : "طراحی وب",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
        image: "https://picsum.photos/id/1/200/300",
        icon : <CgWebsite className='text-4xl'/>,
        bgColor : "bg-blue-500/70",
    },
    {
        id: 2,
        name: "فرانت اند",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
        image: "https://picsum.photos/id/1/200/301",
        icon: <CgWebsite className='text-4xl' />,
        bgColor: "bg-orange-500/70",
    },
    {
        id: 3,
        name: " بک اند",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
        image: "https://picsum.photos/id/1/200/302",
        icon: <CgWebsite className='text-4xl' />,
        bgColor: "bg-green-500/70",
    },
    {
        id: 4,
        name: " امنیت",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان",
        image: "https://picsum.photos/id/1/200/303",
        icon: <CgWebsite className='text-4xl' />,
        bgColor: "bg-red-500/70",
    },
    
];


const ServicesBox = () => {
  return (
    <>
      <section className='my-10 container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6  '>
                  {Services.map((service) => (
                      <div key={service.id}
                      style={{backgroundImage : `url(${service.image})`}}
                          className={`${service.bgColor} rounded-xl 
                           text-white bg-cover bg-center bg-no-repeat bg-blend-overlay`}>
                            <div className='p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl'>
                          {service.icon}
                          <h1 className='text-2xl font-bold'>{service.name}</h1>
                          <p>{service.description}</p>
                          </div>
                      </div>
                  ))}

        </div>
      </section>
    </>
  )
}

export default ServicesBox
