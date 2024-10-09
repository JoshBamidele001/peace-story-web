import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillHouseCheckFill } from "react-icons/bs";

export default function Footer() {
  return (
    <section className='bg-[#f3f3f3] border-y-2  mt-10'>
        <div className=' grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-[85%_15%] p-3 font-semibold'>    
            <div className='grid grid-cols-1 sm:grid-cols-2 items-center  leading-8 text-sm'>

                <div className='md:w-1/2'>
                <Link to={'/'}>
                <div className='flex gap-1 flex-nowrap ml-3'>
                  <BsFillHouseCheckFill className='text-green-500 text-xl md:text-2xl sm:text-3xl md:mr-2 '/>
                  <div className='flex'>
                  <span className='font-semibold sm:text-2xl md:text-3xl text-bold'>BUY</span> <span className='text-green-700 font-semibold sm:text-2xl md:text-3xl text-bold'>ENCE</span>
                    </div>
                </div>
                </Link> 
                    <span className='text-sm md:text-base' >
                    Your trusted platform for finding homes and properties in Nigeria.
                    </span>
                </div>

            

        <div className='flex justify-between md:justify-around flex-row md:flex-row my-3 md:my-0'>
            
        <ul className=''>
              <li>OUR PAGES</li>
              <Link to='/'><li className='text-gray-400 hover:text-gray-600'>Home</li></Link>
              <Link to='/properties'><li className='text-gray-400 hover:text-gray-600'>Properties</li></Link>
              <Link to='/pricing'><li className='text-gray-400 hover:text-gray-600'>Pricing</li></Link>
              <Link to='/contact'><li className='text-gray-400 hover:text-gray-600'>Contact</li></Link>
              {/* <Link to='/give'><li className='text-gray-400 hover:text-gray-600'>Give</li></Link> */}
              </ul>

             <ul>
              <li>Join us today</li>
              <Link to='/register'><li className='text-gray-400 hover:text-gray-600'>Register</li></Link>
              <Link to='/login'><li className='text-gray-400 hover:text-gray-600'>Log in</li></Link>
              <Link to='#'><li className='text-gray-400 hover:text-gray-600'>Properties on rent</li></Link>
              <Link to='#'><li className='text-gray-400 hover:text-gray-600'>Properties on sale</li></Link>
              <Link to='#'><li className='text-gray-400 hover:text-gray-600'>Properties with offer</li></Link>
             </ul>
        </div>
             </div>

           <div className='flex gap-1 md:justify-between items-center my-5'>
           <FaFacebook />
           <AiFillInstagram />
           <FaXTwitter />
           <BsFillThreadsFill />
           <BiLogoGmail />

           </div>
            
        </div>

        <hr />
        <p className='text-center mx-auto my-5'>Copyright (c) 2024</p>
    </section>
  )
}
