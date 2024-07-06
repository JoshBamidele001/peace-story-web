import React from 'react'
import AdminSidebar from '../AdminOutlets/AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div className=''>
        <section className='grid grid-cols-1 md:grid-cols-[20%_80%] items-start max-w-7xl justify-between mx-auto pt-20'>

        <AdminSidebar/>
        <div className='w-full px-2 bg-transparent'>

        <Outlet/>
        </div>

</section>
    </div>
  )
}
