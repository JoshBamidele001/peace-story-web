import React from 'react'
import DashboardSidebar from './DashboardSidebar'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>

<section className='grid grid-cols-1 md:grid-cols-[20%_80%] items-start  justify-between pt-16'>

    <DashboardSidebar/>
    <div className='w-full p-3 mt-5  bg-transparent'>
      <Outlet/>
    </div>

</section>

    </div>
  )
}
