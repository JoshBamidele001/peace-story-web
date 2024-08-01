import React from 'react'
import Bubbles from '../Components/Bubbles'
import Land1 from '../Components/Home Page Components/Land1'
import { FaSwatchbook } from "react-icons/fa";
import Carousel from '../Components/Carousel'
import AdvertCard from '../Components/AdvertCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='py-20 lg:py-24 w-full bg-purple-100' >
      <Bubbles className='' >
        <div className= "lg:py-1  ">

          
          <div className='flex flex-col md:flex-row  items-center gap-5'>
            
              <div>

                <div className='text-2xl lg:mx-16 py-10 flex gap-5 '>
                    <Link to='/'>
                        <div className='flex items-center gap-2'>
                        <p className='text-2xl text-purple-800'><FaSwatchbook /></p>
                        <p className='text-base md:text-2xl lg:text-5xl font-semibold text-purple-600'> dphos<span className='text-purple-900'>PENS:</span></p>
                        </div> 
                      </Link>

                      <div className='flex flex-col'>
                      <p className='text-purple-800 font-semibold'>Number 1 godly and moral online reading Platform</p>
                      <small className='text-purple-600 text-sm font-semibold'>We are here to give you the best stories, poems, and drama, essential for personal developement</small>
                      </div>
                  </div>
                <Carousel/>
              </div>

              <div className='w-90'>  
                <div className='w-90 h-48 bg-purple-900'></div>          
                <AdvertCard
                      rating="4.8"
                      title="We can help your write"
                      imageUrl="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2Fwriting%20card%202.jpg?alt=media&token=5f31f956-c239-4a58-a06a-ff16e25148f9"
                      level="Drop your synopsis"
                      description="Let us help you write your godly and moral stories. Share your experiences, and we'll bring your wisdom to life. "
                      instructorImageUrl="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2Fwriting%20card%202.jpg?alt=media&token=5f31f956-c239-4a58-a06a-ff16e25148f9"
                      instructorName="dphosPENS Writers"
                      price="20"
                    />
                    
              </div>


            </div>  
                      
        </div>

        
            
      </Bubbles>
              <Land1/>

      </div>
  )
}
