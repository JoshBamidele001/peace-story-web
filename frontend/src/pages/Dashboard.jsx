import React, { useState } from 'react'
import DashboardSidebar from './DashboardSidebar'
import { Outlet } from 'react-router-dom'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function Dashboard() {
  const [isDashboardOpen, setisDashboardOpen] = useState(false)

  const toggleDashboard = () => {
    setisDashboardOpen (!isDashboardOpen)
  }
  return (
    <div className='pt-16'>
      <div className='text-xl text-black pt-10 md:hidden' onClick={toggleDashboard}>
     {
      isDashboardOpen ? (
        <IoCloseOutline /> 
      ) : ( <CiMenuFries />)
     } 
      </div>

<section className='grid grid-cols-1 md:grid-cols-[20%_80%] items-start  justify-between md:pt-2'>

     <div className=' md:hidden'>
        {
          isDashboardOpen ? (
            <DashboardSidebar/> 
          ) : null
        }
     </div>

     <div className='hidden md:block'>
     <DashboardSidebar/> 

     </div>
     
    <div className='w-full p-3 mt-5  bg-transparent'>
      <Outlet/>
    </div>

</section>

    </div>
  )
}
