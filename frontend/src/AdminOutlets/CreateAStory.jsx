import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateAStory() {
  return (
    <div>
      
      <div className='bg-[rgb(19,30,61)] h-20 text-gray-200 flex items-center justify-center flex-col'>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>Home- Admin- Create-a-story</small>
      </div>
      
      <div>
        <p className='text-center text-2xl font-semibold my-5 '>CREATE A STORY</p>
          <div>
              <label className='pe-3 font-semibold' htmlFor="title"> Title:</label>
              <input type="text" id='title' className='border-2 rounded-lg w-full p-2' />
          </div>
           <div className='mt-5'>
            <label htmlFor="genre" className='font-semibold'>Genre:</label>
              <select name="genre" class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="uncategorized" class="text-gray-700">Select a genre</option>
              <option value="drama" class="text-gray-700">Drama</option>
              <option value="prose" class="text-gray-700">Prose</option>
              <option value="poetry" class="text-gray-700">Poetry</option>
              </select>
           </div>

          

            <div className='mt-5'>
              <label htmlFor="categories" className='font-semibold'>Categories:</label>
            <select name="categories" class="block w-full px-3 py-2 mb-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="uncategorized" class="text-gray-700">Select a category</option>
              <option value="biblical_stories" class="text-gray-700">Biblical Stories</option>
              <option value="science_fiction" class="text-gray-700">Science Fiction</option>
              <option value="mystery_thriller" class="text-gray-700">Mystery Thriller</option>
              <option value="historical_fiction" class="text-gray-700">Historical Fiction</option>
              <option value="adventure" class="text-gray-700">Adventure</option>
              <option value="biography" class="text-gray-700">Biography</option>
              <option value="children_stories" class="text-gray-700">Children Stories</option>
              <option value="literacy_fiction" class="text-gray-700">Literacy Fiction</option>
              <option value="humor" class="text-gray-700">Humor</option>
              <option value="drama" class="text-gray-700">Drama</option>
              <option value="non_fiction" class="text-gray-700">Non-Fiction</option>
              <option value="poetry" class="text-gray-700">Poetry</option>
              <option value="prose" class="text-gray-700">Prose</option>
            </select>

            </div>

              <label htmlFor="file" className='font-semibold'>Upload cover page of your story: </label>
            <div className='border-dotted py-2 my-3 bg-gray-400 rounded-xl'>
              <input type="file" accept='image/*' className='p-2'/>
              <button className='border px-2 py-2 rounded-xl bg-black text-white '>UPLOAD IMAGES</button>
           </div>

           <div>
              <ReactQuill theme="snow" placeholder='Write something...'
              className='h-72 mb-12 '/>
           </div>

           <button className='w-full bg-blue-950 text-white py-2 rounded-xl my-3'>PUBLISH</button>

      </div>
      
      </div>
  )
}
 