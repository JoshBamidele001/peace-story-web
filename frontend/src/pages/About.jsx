// import React from 'react'

// export default function About() {
//   return (
//     <div className='pt-24'>About</div>
//   )
// }

import React from 'react'

export default function About() {
  return (
    <div className='pt-20'>
      {/* a page for the four National officers */}

      <div>
      

          {/* vission */}
          <div className='w-full bg-purple-100 py-5'>
           <div className=' mx-5 md:mx-3 lg:mx-20 flex flex-col md:flex md:items-start  md:flex-row lg:flex-row gap-5 justify-around my-5 lg:my-10'>
               {/* <div className='flex items-center justify-center'>
                <div className='lg:h-[400px] lg:w-[400px] md:h-[500px] md:w-[200px] h-[250px] w-[250px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(71,27,80, 0.3), rgba(71,27,80, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/6066776.jpg?alt=media&token=be3f5739-01fa-4e14-9f6e-419f8ea9e6b0')`,
                    backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
                  </div>  
               </div> */}
          
                <div className='mx-10 max-w-3xl  md:mx-0 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-70'> 
                    <p className='lg:text-3xl text-sm md:text-xl font-semibold'>VISION STATEMENT</p>
                    {/* <p className='font-semibold'>-FOUNDER</p> */}
                    <p className='text-justify lg:my-5 text-sm md:text-base  w-5/6'>Dphospens aspires to become the leading digital platform for literary creation and appreciation, recognized globally for its commitment to empowering writers and enriching readers. </p>
                    <p className='lg:my-5 text-justify text-sm md:text-base w-5/6'>Our vision is to build a thriving ecosystem where creativity flourishes, knowledge is shared, and individuals are inspired to pursue their passion for writing and reading.</p>
                   
                </div>
            </div>

          </div>

            <hr />

            {/* Deputy General Overseer */}

              <div className='w-full  p-5' style={{ background: "linear-gradient(to left, #d251ee, #000000)"}}>
           <div className=' text-white md:mx-3 lg:mx-20 flex flex-col-reverse md:flex-row md:items-start lg:flex-row justify-around my-5 lg:my-10   '>
                      
                <div className=' max-w-3xl  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-70'> 
                    <p className='lg:text-3xl font-semibold'>MISSION STATEMENT</p>
                    {/* <p className='font-semibold'>-C.T.O</p> */}
                    <p className='text-justify lg:my-5 text-sm md:text-base w-5/6'>Dphospens is committed to fostering a vibrant and inclusive community for readers and writers, offering a platform that encourages creative expression, knowledge sharing, and personal growth </p>
                    <p className='lg:my-5 text-justify text-sm md:text-base w-5/6'>Our mission is to inspire, educate, and entertain by providing diverse literary content, writing resources, and interactive tools that empower individuals to share their voices with the world.</p>
                    {/* <p className='lg:my-5 text-justify text-sm md:text-base w-5/6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eos dolorem delectus sint sequi eius. Earum, possimus! Quia cupiditate atque quod sequi quos deleniti beatae at! Consectetur recusandae sapiente neque.</p> */}
                </div>

                {/* <div className='flex items-center justify-center'>
                  <div className='lg:h-[400px] lg:w-[400px] md:h-[500px] md:w-[200px] h-[250px] w-[250px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                  style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(71,27,80, 0.3), rgba(71,27,80, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/istockphoto-1249889027-612x612.jpg?alt=media&token=7911c7df-1a59-4911-b0eb-349c28aa975a')`,
                    backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
                  </div>  
                </div> */}
            </div>

              </div>

              <hr />
         

            <hr />

              {/* Other Supreme council members */}
            <p  className='mx-10 md:mx-0 lg:text-3xl font-semibold text-center text-orange-700 lg:my-10  transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' >OTHER MEMBERS OF THE SUPREME COUNCIL</p>

                <div className=' mx-10 md:mx-2 lg:mx-20 grid md:grid-cols-4 lg:grid-cols-4'>

                  <div>
                      <div className='lg:h-[300px] lg:w-[200px] md:h-[150px] md:w-[150px] rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/pastor%20bamidele.jpg?alt=media&token=b6f9f300-52e5-4cdb-9392-6277099498cf')`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
                      </div> 
                      <p className='lg:text-lg md:text-sm font-semibold  lg:my-5 hover:border-b'>PASTOR M.A BAMIDELE</p>

                  </div>

                  <div>
                      <div className='lg:h-[300px] lg:w-[200px] md:h-[150px] md:w-[150px]  rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/pastor%20Jerade.jpg?alt=media&token=ee61b06d-6a22-4464-9053-175cddac5fd1')`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "40%",}}>
                      </div> 
                      <p className='lg:text-lg md:text-sm font-semibold lg:my-5 hover:border-b'>PASTOR JENRADE</p>

                  </div>

                  <div>
                      <div className='lg:h-[300px] lg:w-[200px] md:h-[150px] md:w-[150px]  rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/past%20Oluwadare.jpg?alt=media&token=7ff2e170-81b6-42ac-baf3-296ed420f371')`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "50%",}}>
                      </div> 
                      <p className='lg:text-lg md:text-sm font-semibold lg:my-5 hover:border-b'>PASTOR OLUWADARE</p>

                  </div>

                  <div>
                      <div className='lg:h-[300px] lg:w-[200px] md:h-[150px] md:w-[150px]  rounded-3xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110' 
                        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) , rgba(230, 140, 120, 0.3), rgba(255, 165, 0, 0.9)), url('https://firebasestorage.googleapis.com/v0/b/yatlec-official.appspot.com/o/pastor%20Oluwatumise.jpg?alt=media&token=4b61d906-8ff8-406f-a05e-c206fc99c050')`,
                        backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionX: "50%", backgroundPositionY: "10%"}}>
                      </div> 
                      <p className='lg:text-lg md:text-sm font-semibold lg:my-5 hover:border-b'>PASTOR OLUWATUNMISE</p>

                  </div>

                


                </div>


               

      </div>


    </div>
  )
}

