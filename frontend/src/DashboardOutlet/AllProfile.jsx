import React from 'react'
import {  useSelector } from 'react-redux'

export default function Packages() {
  const { currentUser } = useSelector(state => state.user);
  return (
    <>
      {/* the searcjh button of the books */}
      <input type="text" placeholder='Search a book' className='py-1 px-10 w-full sm:w-96 rounded-lg border-8 border-purple-800' />

      {/* Welcome user note */}
      <div>
        <p className='lg:text-5xl p-3 text-purple-800'>Welcome, {currentUser.name}</p>
        <p className='p-3 '> Here is a summary of your activities, and invovlement on your reading pace</p>
       
      </div>

      {/* button for the explore */}

      <button className='bg-purple-800 text-white px-5 py-2 rounded-lg m-3'>Explore Books</button>

      {/* this is the counter on the profile */}
      <div className='mt-5 flex flex-col md:flex-row gap-8 mb-10 text-white '>
          <div className='w-60 h-40 rounded-2xl shadow-xl hover:shadow-2xl bg-gray-200' style={{ background: "linear-gradient(to top,  #000000, #d251ee)"}}>
            <p className='p-5 text-lg font-semibold '>Total Books Read:</p>
            <p className='text-6xl  p-5 font-semibold'>0</p>
          </div>

          <div className='w-60 h-40 rounded-2xl shadow-xl hover:shadow-2xl bg-gray-200' style={{ background: "linear-gradient(to top,  #000000, #d251ee)"}}>
            <p className='p-5 text-lg font-semibold '>Total Books Listed:</p>
            <p className='text-6xl  p-5 font-semibold'>0</p>
          </div>

          <div className='w-60 h-40 rounded-2xl shadow-xl hover:shadow-2xl bg-gray-200' style={{ background: "linear-gradient(to top,  #000000, #d251ee)"}}>
            <p className='p-5 text-lg text-nowrap font-semibold '>Saved Books:</p>
            <p className='text-6xl  p-5 font-semibold'>20</p>
          </div>

          <div className='w-60 h-40 rounded-2xl shadow-xl hover:shadow-2xl bg-gray-200' style={{ background: "linear-gradient(to top,  #000000, #d251ee)"}}>
            <p className='p-5 text-lg text-nowrap font-semibold '>Books in my Library:</p>
            <p className='text-6xl  p-5 font-semibold'>20</p>
          </div>
      </div>

      <hr  />

      <div className='mt-6'>
          <div>
            <p className=' mt-2 text-2xl font-semibold'>YOUR BOOKS</p>
            <small className=''>Base on your categories</small>
          </div>

          {/* based on the catergories of users */}

            <div className='w-full grid  lg:grid-cols-6 lg:gap-3'>
                  <div className='text-center'>
                      <img className='w-40'
                      src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FBlack%20and%20White%20Illustrative%20Woman%20Autobiography%20Book%20Cover%20(1).jpg?alt=media&token=651546ea-6578-44c1-a74b-8c553ea057e3" alt="" />
                      <p className='font-semibold'>Walk into Shadow</p>
                      <small className=''>Estelle Darcy</small>
                  </div>

                   <div className='text-center'>
                      <img className='w-40'
                      src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FBlack%20and%20White%20Illustrative%20Woman%20Autobiography%20Book%20Cover.jpg?alt=media&token=7ad97c07-a4dd-4ce8-93ad-23e848940be4" alt="" />
                      <p className='font-semibold'>Intruition</p>
                      <small className=''>Estelle Darcy</small>
                  </div>

                  <div className='text-center'>
                      <img className='w-40'
                      src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FDark%20Mysterious%20Book%20Cover%20%20(1).jpg?alt=media&token=e6dfb913-95fb-4eaa-9185-495d5c92e49c" alt="" />
                      <p className='font-semibold'>Soul</p>
                      <small className=''>Estelle Darcy</small>
                  </div>

                   <div className='text-center'>
                      <img className='w-40'
                      src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FDark%20Mysterious%20Book%20Cover%20%20(2).jpg?alt=media&token=11a16b0a-855e-47ea-abaf-d69b296a7b31" alt="" />
                      <p className='font-semibold'>My first Love</p>
                      <small className=''>Estelle Darcy</small>
                  </div>

                   <div className='text-center'>
                      <img className='w-40'
                      src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FDark%20Mysterious%20Book%20Cover%20%20(3).jpg?alt=media&token=7690857e-148d-460b-be1e-a71de83880ab" alt="" />
                      <p className='font-semibold'>Just the two of us</p>
                      <small className=''>Estelle Darcy</small>
                  </div>

                   <div className='text-center'>
                      <img className='w-40'
                      src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FDark%20Mysterious%20Book%20Cover%20.jpg?alt=media&token=3fa22a7e-b5c6-4d86-b853-049c644891f8" alt="" />
                      <p className='font-semibold'>In your eyes</p>
                      <small className=''>Estelle Darcy</small>
                  </div>
            </div>
      </div>
    </>
  )
}
