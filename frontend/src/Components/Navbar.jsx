import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaSwatchbook } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

export default function Navbar() {
  return (
    <>

       
    <div className=' w-screen h-24 first-letter: flex items-center justify-around shadow-lg'>
                
       <ul className=' hidden md:flex lg:flex gap-12'>
            <li>Home</li>
            <li>Read</li>
            <li>Publish a story</li>
            <li>Let's help you write</li>
            <li>About us</li>
            <li>Pricing</li>
       </ul>
        
        <div className='flex items-center gap-2'>
        <p className='text-xl'><FaSwatchbook /></p>
        <p className='text-base md:text-2xl lg:text-3xl font-semibold'> phosINK</p>
        </div>
       

       

       <div>
            <p className='text-base hidden md:inline-block lg:inline-block btn bg-transparent md:py-2 md:px-3 border-2 border-black rounded-xl '>Singup/Signin</p>
       </div>

       <div className='flex gap-5 md:hidden text-3xl '>

       <IoMdMenu />

       <MdDarkMode />

       <IoIosLogIn />
       </div>


    </div>


    </>
  )
}
