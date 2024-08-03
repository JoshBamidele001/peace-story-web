import React from 'react'
import AdminSidebar from '../AdminOutlets/AdminSidebar'
import { Outlet } from 'react-router-dom'

export default function Admin() {
  return (
    <div className='bg-purple-100'>
        <section className='grid grid-cols-1 md:grid-cols-[20%_80%] items-start  justify-between pt-16'>

        <AdminSidebar/>
        <div className='w-full  bg-transparent'>

        <Outlet/>
        </div>

</section>
    </div>
  )
}
