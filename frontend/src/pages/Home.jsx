import React, { useEffect, useState } from 'react'
import Bubbles from '../Components/Bubbles'
import Land1 from '../Components/Home Page Components/Land1'
import Land2 from '../Components/Home Page Components/Land2'
import Land3 from '../Components/Home Page Components/Land3'
import { FaSwatchbook } from "react-icons/fa";
import Carousel from '../Components/Carousel'
import AdvertCard from '../Components/AdvertCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import PostOnHome from '../Components/Home Page Components/PostOnHome';
import Testimonials from '../Components/Testimonials'
import Prose from '../Genre and Categories/Prose'
import Drama from '../Genre and Categories/Drama'
import Poetry from '../Genre and Categories/Poetry'
import DphosOriginalsAdvert from '../Components/Home Page Components/DphosOriginalsAdvert'

export default function Home() {
  const [searchTerm, setsearchTerm] = useState('')
  const location = useLocation(); 
  const navigate = useNavigate()
  console.log(searchTerm);
  
  useEffect(() => {
     const urlParams = new URLSearchParams(location.search);
     const searchTermFromUrl = urlParams.get('searchTerm');
   if (searchTermFromUrl) {
    setsearchTerm(searchTermFromUrl)
   }
  }, [location.search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search)
    urlParams.set('searchTerm', searchTerm );
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)  }
  
  return (
    <div className='py-20 lg:py-16 w-full bg-purple-100' >
              
                  
       
            {/* Carousel and the search div flex */}
        <div className='w-full lg:px-10'>
            <Bubbles>
        <div className= "lg:py-1  ">          
      
          <div className='flex flex-col md:flex-row  items-center justify-around pt-20 gap-5 z-50'>
          <div className='text-2xl lg:mx-16 py-10 flex flex-col md:flex-col gap-5 '>
                    <Link to='/'>
                        <div className='flex items-center gap-1 mx-4 md:mx-0'>
                        <p className='text-2xl text-purple-800'><FaSwatchbook /></p>
                        <p className='text-4xl  md:text-2xl lg:text-6xl font-semibold text-purple-600'> dphos<span className='text-purple-900'>PENS:</span></p>
                        </div> 
                      </Link>
 
                      <div className='flex flex-col mx-4 md:mx-0 '>
                      <p className='text-purple-800 text-base md:text-2xl  font-semibold'>Number 1 godly and moral online reading Platform</p>
                      <small className='text-purple-800 text-base font-semibold'>We are here to give you the best stories, poems, and drama, essential for personal developement</small>
                      </div>

                      <button className='btn bg-purple-900 text-white font-semibold p-2 rounded-xl max-w-64'>Get Started</button>
                  </div>
              <div className='flex flex-col-reverse md:flex-col'>        
                <Carousel/>
              </div>

           

            </div>  

            <div className='flex flex-col'>

<div className='py-5 text-center '>  
   <div className=' gap-3 bg-purple-900 h-[250px] rounded-xl' style={{ background: "linear-gradient(to left, #d251ee, #000000)"}} >
     <p className='text-white py-5 px-5 text-2xl'>Search for any stories, poems and drama, we've got you covered</p>
       <div className='relative'>
        
     <form action="" onSubmit={handleSubmit}>
         <input type="text" placeholder='Search anything'
            className='px-3 p-2 m-5 rounded-xl w-4/5'
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}/>
        <button>
              <FaSearch className='absolute top-8  text-purple-900 right-44 text-xl' />
        </button>
      </form>
         </div>
         
    <div className='flex flex-wrap items-center justify-between  gap-2 my-2 mx-5 '>
       <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Genre</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Poems</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Drama</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biblical Stories</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Science Fiction</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Humor</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Mystery Thriller</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Historical fiction</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Adventure</span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
         <span className='px-2 border-b-4 text-xs bg-white py-1 rounded-xl'>Biography </span>
    </div>
     </div>               
       
 </div>
</div>
                      
        </div>

        
            
            </Bubbles>
        </div>
              <Land1/>
              <Land2/>
              <Land3/>
                <p className='text-2xl md:text-3xl lg:text-3xl text-purple-900 px-16 py-5 font-semibold'>Top stories:</p>
              <div className='flex justify-center items-start gap-10'>
                {/* Top Stories  */}
              <PostOnHome/>
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

              <Testimonials/>
              <DphosOriginalsAdvert/>
              <Prose/>
             
              <div className='bg-white'>
                <Drama/>
              </div>
              <Poetry/>

      </div>
  )
}
