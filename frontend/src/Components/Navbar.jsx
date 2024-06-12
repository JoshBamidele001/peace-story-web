import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { FaSwatchbook } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";

export default function Navbar() {
  return (
    <>

       
    <div className=' w-screen h-24 first-letter: flex items-center justify-around shadow-lg fixed  bg-white'>
                
       <ul className=' hidden md:flex lg:flex gap-12'>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='read'>
            <li>Read</li>
            </Link>
            <Link to='/publish'>
            <li>Publish a story</li>
            </Link>
            <Link to='/lets-write-for-you'>
            <li>Let's help you write</li>
            </Link>
            <Link to='about_us'>
            <li>About us</li>
            </Link>
            <Link to='/pricing'>
            <li>Pricing</li>
            </Link>
       </ul>
        
        <Link to='/'>
        <div className='flex items-center gap-2'>
        <p className='text-xl'><FaSwatchbook /></p>
        <p className='text-base md:text-2xl lg:text-3xl font-semibold'> dphosPENS</p>
        </div>
        </Link>
       

       

       <Link to='/sign-up'>
       <div>
            <p className='text-base hidden md:inline-block lg:inline-block btn bg-transparent md:py-2 md:px-3 border-2 border-black rounded-xl '>Singup/Signin</p>
       </div>
       </Link>

       <div className='flex gap-5 md:hidden text-3xl '>

       <IoMdMenu />

       <MdDarkMode />

       <Link to='/sign-up'>
          <IoIosLogIn />
       </Link>
       </div>


    </div>


    </>
  )
}
