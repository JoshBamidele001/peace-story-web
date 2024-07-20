import React from 'react'
import Bubbles from '../Components/Bubbles'
import Land1 from '../Components/Home Page Components/Land1'

export default function Home() {
  return (
    <div className=''>
      <Bubbles >
        <div className="  mx-auto  ">
           <div className='flex items-center justify-around'>
            <Land1/>
            
           
            {/* <div></div> */}
           </div>
            {/* <h1 className="text-4xl font-bold">Welcome to My Website</h1>
            <p className="mt-4">This is a sample text over the animated background.</p> */}
            {/* You can add more components or elements here */}
          </div>
      </Bubbles>

      </div>
  )
}
