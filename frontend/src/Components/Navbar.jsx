import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { FaSwatchbook, FaSun, FaMoon } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import {toggleTheme} from '../redux/theme/themeSlice'


export default function Navbar() {

  const dispatch = useDispatch()
  const {currentUser} = useSelector(state => state.user)
  const {theme} = useSelector((state)=> state.theme)

  return (
    <>

       
    <div className=' w-screen h-24 first-letter: flex items-center justify-around shadow-lg   '>
                
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
           
       </ul>
        
        <Link to='/'>
        <div className='flex items-center gap-2'>
        <p className='text-xl'><FaSwatchbook /></p>
        <p className='text-base md:text-2xl lg:text-3xl font-semibold'> dphosPENS</p>
        </div>
        </Link>
       

        {currentUser ? (
                            <Link to={'/dashboard'}>
                            <div className='md:flex items-center gap-2 hidden '>
                              <div><img src={currentUser.avatar}alt="Profile picture" className='w-12 rounded-full' /></div>
                               <div className='flex flex-col'>
                               <span className='text-sm'>Hi, {currentUser.name} </span>
                               <span className='text-lg'> Dashboard</span>
                               </div>
                            </div>
                            </Link>
                        ) : (
                       
                <Link to='/sign-up'>
                <div>
                      <p className='text-base hidden md:inline-block lg:inline-block btn bg-transparent 
                      md:py-2 md:px-3 border-2 border-black rounded-xl '>Signup/Signin</p>
                </div>
                </Link>
                        ) }



       <div className='flex gap-5 text-3xl '>

       <div className='md:hidden'>
       <IoMdMenu />
       </div>

       <button type='button' onClick={() => dispatch(toggleTheme())}>
          {
            theme === 'light' ? <FaMoon /> : <FaSun />
          } 
       </button>

       <div className='md:hidden'>
       <Link to='/sign-up'>
          <IoIosLogIn />
       </Link>
       </div>
       </div>


    </div>


    </>
  )
}
