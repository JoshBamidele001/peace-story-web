import React from 'react'
import Bubbles from '../Components/Bubbles'
import Land1 from '../Components/Home Page Components/Land1'
import PostCard from '../Components/PostCard'

export default function Home() {
  return (
    <div className=''>
      <Bubbles >
        <div className= "mx-auto">
           <div className='flex items-center justify-around'>
              <Land1/>
           </div>           
        </div>
      </Bubbles>
          <PostCard/>

      </div>
  )
}
