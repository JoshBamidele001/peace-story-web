import React from 'react'
import Prose from '../Genre and Categories/Prose'
import Drama from '../Genre and Categories/Drama'
import Poetry from '../Genre and Categories/Poetry'

export default function Read() {
  return (
    <div className='pt-24'>

      <div className=' mx-2 md:mx-10 p-10  grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between '>
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider1_unlock_052109.jpg?alt=media&token=0d296923-30b8-4ba1-93d3-c2265e1fccaa" alt="" />
        </div>
        <div className=' max-w-3xl  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-70'> 
                    <p className='lg:text-3xl font-semibold'>ENJOY READING</p>
                    {/* <p className='font-semibold'>-C.T.O</p> */}
                    <p className='text-justify lg:my-5 text-sm md:text-base w-5/6'>Dphospens is an innovative digital platform designed to bring together readers and writers from around the world </p>
                    <p className='lg:my-5 text-justify text-sm md:text-base w-5/6'>Our platform serves as a hub for creative expression, knowledge sharing, and personal growth, offering users the tools and community they need to explore and develop their literary talents</p>
                    <p className='lg:my-5 text-justify text-sm md:text-base w-5/6'>By combining a user-friendly interface with advanced writing and publishing tools, Dphospens aims to become the go-to platform for anyone passionate about writing and reading..</p>
                </div>
      </div>
      
      
      <Prose/>
      <div className='bg-white'>
                <Drama/>
        </div>
              <Poetry/>
      
      </div>
  )
}
