import React from 'react'

export default function CalltoAction() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[60%_40%] border-2 border-orange-300 rounded-tl-3xl rounded-br-3xl shadow-md'>
      {/* Call to action textr */}
      <div className='px-14 py-6'> 
        <h2 className='lg:text-3xl font-semibold '> Unleash Your Creativity!</h2>
        <p className='w-5/6 text-gray-500 '>Got a captivating story, poem, or drama? Share your masterpiece with us and let our professional team bring it to life.</p>
        <button className='btn bg-orange-400 px-3 py-2  rounded-tl-xl rounded-br-xl my-4 hover:bg-transparent hover:text-orange-800 hover:border-orange-900 hover:border'>
          <a href="/submit-your-work" target='_blank' rel='noopener noreferrer'>
          Submit Your Work Now!
          </a>
          </button>
      </div>

      {/* the image of call to action */}
      <div className='p-3'>
        <img  className='h-52 w-96 rounded-xl'
        src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2FWrite%20your%20story.jpg?alt=media&token=662fdb9d-574b-4b68-86c0-d34c7160e28b" alt="" />
      </div>
    </div>
  )
}
