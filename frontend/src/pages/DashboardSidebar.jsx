import React, { useState } from 'react'
import Modal from '../Components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaSwatchbook, FaEdit, FaAddressBook, FaSave  } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoLibrary, IoLogOut  } from "react-icons/io5";
import { logoutUserFailure, logoutUserStart, logoutUserSuccess } from '../redux/user/userSlice';


export default function DashboardSidebar() {
  const { currentUser } = useSelector(state => state.user);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmLogout = async () => {
    try {
      dispatch(logoutUserStart())
      const res = await fetch('/api/auth/logout');
      const data = await res.json();
      if (data.success === false){
        dispatch(logoutUserFailure(data.message))
        return
      }
      //not solved totally
      
      dispatch(logoutUserSuccess(data))
      alert("logout successfully")
      navigate('/sign-in') 


    } catch (error) {
      dispatch(logoutUserFailure(data.message))
      
    }
}

  return (
    <div className='bg-[rgb(16,23,42)] lg:pb-40 h- sticky top-24 text-gray-200'>

        <Link to='/'>
        <div className='flex items-center gap-2 p-10'>
        <p className='text-xl'><FaSwatchbook /></p>
        <p className='text-base md:text-2xl lg:text-xl font-semibold'> dphosPENS</p>
        </div>
        </Link>

        <div className='flex justify-center flex-col items-center mb-10'>
          <img src={currentUser.avatar}
          className='w-16 h-16 border-8 rounded-full' alt="" />
          <small>{currentUser.name}</small>
          <small>{currentUser.email}</small>
          {currentUser.isAdmin && (
            <small className='text-lg'>Admin</small>
          )}
        </div>

        <hr />

        <ul className='  leading-2 text-semibold'>

            <Link to='/dashboard'>
           <li className='py-4 px-10 hover:bg-[rgba(29,43,80,0.29)] hover:border-s-8 flex gap-2 items-center'> <MdDashboard /> Dashboard</li>
            </Link>

            <Link to='/dashboard/edit_profile'>
              <li className='py-4 px-10 hover:bg-[rgba(29,43,80,0.29)] hover:border-s-8 flex gap-2 items-center'><FaEdit /> Edit Profile</li>
            </Link>
           

            <Link to='/dashboard/my_library'>
            <li className='py-4 px-10 hover:bg-[rgba(29,43,80,0.29)] hover:border-s-8 flex gap-2 items-center'> <IoLibrary />My Library</li>
            </Link>
            <Link to='/dashboard/saved_books'>
            <li className='py-4 px-10 hover:bg-[rgba(29,43,80,0.29)] hover:border-s-8 flex gap-2 items-center'> <FaSave />Saved Books</li>
            </Link>
            <Link to='/dashboard/add_book_listing'>
            <li className='py-4 px-10 hover:bg-[rgba(29,43,80,0.29)] hover:border-s-8 flex gap-2 items-center'><FaAddressBook /> Add book listing</li>
            </Link>
            <li onClick={handleLogoutClick} className='py-4 px-10 hover:bg-[rgba(29,43,80,0.29)] hover:border-s-8 flex gap-2 items-center'><IoLogOut />Log out</li>
        </ul>
                  <Modal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  onConfirm={confirmLogout}
                  title="Log Out"
                >
              Are you sure you want to log out?
            </Modal>
    </div>
  )
}
