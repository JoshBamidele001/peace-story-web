import React from 'react'
import AdminSidebar from '../AdminOutlets/AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div className=''>
        <section className='grid grid-cols-1 md:grid-cols-[20%_80%] items-start max-w-7xl justify-between mx-auto pt-24'>

        <AdminSidebar/>
        <div className='w-full p-3 mt-5  bg-transparent'>
        <Outlet/>
        </div>

</section>
    </div>
  )
}
