import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaSwatchbook, FaSun, FaMoon } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import {toggleTheme} from '../redux/theme/themeSlice'


export default function Navbar() {

  const [isMenuOpen, setisMenuOpen] = useState(false)

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen)
   
  }

  const handleMenuClick = () => {
    setisMenuOpen(false);
  }

  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  const {theme} = useSelector((state)=> state.theme)

  return (
    <>
    <div className=' w-screen h-24 first-letter: flex items-center justify-around shadow-lg fixed bg-white z-10 ' style={{ background: "linear-gradient(to left, #d251ee, #000000)"}} >
                
       <ul className=' hidden md:flex lg:flex gap-12 text-white font-semibold'>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/read'>
            <li>Read</li>
            </Link>
            <Link to='/publish'>
            <li>Submit a story</li>
            </Link>
            <Link to='/lets-write-for-you'>
            <li>Let's write for you</li>
            </Link>
            <Link to='/about-us'>
            <li>About us</li>
            </Link>
            {
              currentUser && currentUser.isAdmin && (
            <Link to='/admin'>
            <li>Admin</li>
            </Link>
              )
            }

           
       </ul>
        
        <Link to='/'>
        <div className='flex items-center gap-2'>
        <p className='text-xl text-white'><FaSwatchbook /></p>
        <p className='text-base md:text-2xl lg:text-3xl font-semibold text-white'> dphos<span className='text-purple-300'>PENS</span></p>
        </div>
        </Link>
       

        {currentUser ? (
                            <Link to={'/dashboard'}>
                            <div className='md:flex items-center gap-2 hidden '>
                              <div><img src={currentUser.avatar} alt="Profile picture" className='w-12 rounded-full' /></div>
                               <div className='flex flex-col'>
                               <span className='text-sm text-white'>Hi, {currentUser.name}. </span>
                               <span className='text-lg text-white font-semibold'> Dashboard</span>
                               </div>
                            </div>
                            </Link>
                        ) : (
                       
                <Link to='/sign-up'>
                <div>
                      <p className='text-base hidden md:inline-block lg:inline-block btn bg-white text-purple-900 
                      md:py-2 md:px-3 border-2 border-purple rounded-xl hover:bg-purple-950 transition ease-in font-semibold hover:text-white'>Signup/Signin</p>
                </div>
                </Link>
                        ) }



       <div className='flex gap-5 text-3xl '>

       <div className='md:hidden text-white' onClick={toggleMenu}>
        {
          isMenuOpen ? (

            <IoClose /> 
          ) : (
            <IoMdMenu />
          )
        }
       </div>

       {/* <button type='button' onClick={() => dispatch(toggleTheme())}>
          {
            theme === 'light' ? <FaMoon /> : <FaSun />
          } 
       </button> */}

<div className='md:hidden'>
                { currentUser ? (
                  <Link to={'/dashboard'}>
                  <img src={currentUser.avatar} alt="Profile picture" className='w-8 h-8 rounded-full' /> 
                  </Link>
                ) : (

                <Link to='/sign-up' className='text-white'>
                    <IoIosLogIn />
                </Link>
                )
                
                }

  </div>
       </div>

       { isMenuOpen ? (
              
              <ul className='flex flex-col md:hidden text-purple-800 font-semibold justify-between bg-white p-8 leading-8 absolute top-20 w-full '>
               <Link to='/' onClick={handleMenuClick}>
               <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Home</li>
               </Link>
               <Link to='/read' onClick={handleMenuClick} >
               <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Read</li>
               </Link>
               <Link to='/publish' onClick={handleMenuClick} >
               <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Submit a Story</li>
               </Link>
               <Link to='/lets-write-for-you' onClick={handleMenuClick}>
               <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>Our Assemblies</li>
               </Link>
               <Link to='/about-us' onClick={handleMenuClick}>
               <li className='hover:text-orange-700 border-b-2 hover:border-b-2'>About</li>
               </Link>
               
           </ul>
         
       ) : null

       }


    </div>


    </>
  )
}
