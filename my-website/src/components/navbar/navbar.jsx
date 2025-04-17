import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { BiSolidMoon } from "react-icons/bi";


const navbar = () => {
    const navMenu =[
        {
        name : "خانه",
        link :"/#home"
        },
        {
            name: "تماس",
            link: "/#contact"
        },
        {
            name: "درباره من",
            link: "/#about"
        },
        {
            name: "پروژه ها",
            link: "/#projects"
        },
        
];
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    }
  return (
<>
 <nav className='bg-[#f3f3f3]'>
    <div className='container p-[1rem] md:p-[0.5rem] flex items-center justify-between py-3
                    sm:py-0 mx-auto'>
       <h1 className='text-3xl text-orange-300 font-extrabold hover:text-orange-600 duration-500
       cursor-pointer'>مهدی اکبری</h1>
        {/*Desktop Navbar*/}
        <div className='hidden sm:block'>
            <ul className='flex items-center gap-10 '>
                {navMenu.map((menu)=>(
                    <li key={menu.name}>
                    <a href={menu.link} 
                    className='text-xl font-semibold px-2 py-2 inline-block cursor-pointer 
                      transition-all hover:mask-t-from-neutral-300'>
                    {menu.name}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
        {/*Mobile Navbar*/}
        <div className='block sm:hidden'>
           <div className='flex items-center gap-4'>
                          {/*<BiSolidMoon className='text-2xl cursor-pointer ' />*/}
              <FiMenu className='text-2xl cursor-pointer'
            onClick={toggleMenu} />
            </div>
            
            {
                showMenu &&(
                    <div className='fixed top-16 bg-white shadow-md rounded-b-xl z-10 py-10
                                    left-0 right-0 '>
                                  <ul className='flex flex-col items-center gap-4'>
                           {
                            navMenu.map((menu)=>(
                                <li key={menu.name}>
                                    <a href={menu.li} className='text-xl font-semibold px-2 
                                    py-4 md:py-6 inline-block cursor-pointer transition-all hover:mask-t-from-neutral-300'>
                                    {menu.name}
                                    </a>
                                </li>
                            ))
                           }
                        </ul>
                    </div>
                )
            }
            
        </div>
    </div>


    </nav> 
    </>
  )
}

export default navbar
