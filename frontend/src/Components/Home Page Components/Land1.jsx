import React from 'react';

export default function Land1() {
  return (
    <div className='w-[90%] flex items-center justify-around text-center h-screen'>
      <div className='max-w-3xl'>
        <div className='lg:text-6xl flex items-center gap-3 m-4'>
          <p className='text-blue-700 font-semibold'>Maximize </p>
          <p
            style={{ backgroundColor: 'rgb(238, 209, 208)' }}
            className='rounded-2xl p-3 font-semibold'
          >
            the BENEFITS
          </p>
        </div>
        <div className='flex items-center gap-2 m-4'>
          <p className='lg:text-6xl'>of </p>
          <p className='bg-blue-700 text-6xl p-3 text-white rounded-2xl'>Online</p>
          <p className='text-6xl font-semibold'>
            Rea<span className='text-blue-700'>ding</span>
          </p>
        </div>

        <div>
          <p className='py-10 text-start'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos vero sed rem labore cum dolores cumque, voluptates pariatur voluptatibus accusantium!
          </p>
        </div>
        <div className='flex gap-5'>
          <button className='bg-blue-600 p-3 mt-5 rounded-2xl text-white'>JOIN NOW</button>
          <button className='bg-transparent border-2 border-blue-700 p-3 mt-5 rounded-2xl text-blue-700'>
            See how it works
          </button>
        </div>
      </div>

      <div className='max-w-3xl '>
        <img
          className='w-[} h-[85vh]'
          src='https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2Fpexels-lara-jameson-9363131-removebg-preview.png?alt=media&token=bd268c20-1ddf-4e9d-a46b-8428d40d68f9'
          alt='Visual Representation'
        />
      </div>
    </div>
  );
}
