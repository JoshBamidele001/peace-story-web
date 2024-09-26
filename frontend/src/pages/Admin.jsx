import React, { useState } from 'react'
import AdminSidebar from '../AdminOutlets/AdminSidebar'
import { Outlet } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";


export default function Admin() {
  const [isDashboardOpen, setisDashboardOpen] = useState(false)

  const toggleDashboard = () => {
    setisDashboardOpen (!isDashboardOpen)
  }
  return (
    <div className='bg-purple-100 pt-16'>

    <div className='text-xl text-black pt-10 md:hidden' onClick={toggleDashboard}>
     {
      isDashboardOpen ? (
        <IoCloseOutline /> 
      ) : ( <CiMenuFries />)
     } 
      </div>

        <section className='grid grid-cols-1 md:grid-cols-[20%_80%] items-start  justify-between '>

       
        <div className=' md:hidden'>
        {
          isDashboardOpen ? (
            <AdminSidebar/>
          ) : null
        }
     </div>

     <div className='hidden md:block'>
     <AdminSidebar/>

     </div>
        <div className='w-full  bg-transparent'>

        <Outlet/>
        </div>

</section>
    </div>
  )
}
