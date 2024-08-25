import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Search() {
  const [sidebarData, setsidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
    genre: 'uncategorized'
  });

  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)
  const [showMore, setshowMore] = useState(false);

  const location = useLocation()
  console.log(sidebarData);
  

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort')
    const categoryFromUrl = urlParams.get('category')
    const genreFromUrl = urlParams.get('genre')

    if (searchTermFromUrl || sortFromUrl || categoryFromUrl || genreFromUrl) {
      setsidebarData ({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
        genre: genreFromUrl,
      })
    }
  }, [location.search])
  
  return (
    <div className='py-24 flex' >

      <form className='px-5 w-1/4' >
        <div>
          <div className='bg-gray-200 h-24 px-5 py-2 rounded-lg'>
              <label> SearchTerm </label>
              <p> 
                  <input type="text" placeholder='Search...'
                  id='searchTerm' className='p-2 rounded-lg w-full border my-2 '/>
              </p>
          </div>

          <div className='bg-gray-200 h-24 px-5 py-2 my-5 rounded-lg'>
              <label> Genre </label>
              <p>
                <select name="genre" class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  // onChange={(e)=> setformData({... formData, genre: e.target.value})}
                  >
                  <option value="uncategorized" class="text-gray-700">Select a genre</option>
                  <option value="drama" class="text-gray-700">Drama</option>
                  <option value="prose" class="text-gray-700">Prose</option>
                  <option value="poetry" class="text-gray-700">Poetry</option>
                  </select>
              </p>
          </div>

          

        </div>
      </form>

      <div></div>


    </div>
  )
}
