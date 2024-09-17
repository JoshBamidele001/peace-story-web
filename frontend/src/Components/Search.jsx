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

          <div className='bg-gray-200 h-80 px-5 py-2 my-5 rounded-lg'>
              <label> Categories </label>
              <div>
                  <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Adventure
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Biblical Stories 
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Science Fiction
                            </label>
                      </div>
                     
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Mystery Thriller
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Historical Fiction
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Biography
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Children Stories
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Literary Fiction
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Humor
                            </label>
                      </div>
                      <div class="flex items-center my-1">
                            <input id="adventure" name="categories" type="checkbox" value="adventure" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            // defaultChecked={false}
                            // onChange={handleChange}
                            />
                            <label for="adventure" class="ml-3 block text-sm font-medium text-gray-700">
                            Non-fiction
                            </label>
                      </div>
                      
                  </div>
            </div>

            <div className='bg-gray-200 h-24 px-5 py-2 my-5 rounded-lg'>
              <label> Sort </label>
              <p>
                <select name="genre" class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  // onChange={(e)=> setformData({... formData, genre: e.target.value})}
                  >
                  <option value="uncategorized" class="text-gray-700">Select a genre</option>
                  <option value="drama" class="text-gray-700">Latest</option>
                  <option value="prose" class="text-gray-700">Oldest</option>
                  </select>
              </p>
          </div>

          <button className='bg-purple-900 text-white w-full p-2 rounded-xl'>SEARCH</button>



        </div>
      </form>

        <div>
      <div>
        <h1 className='font-semibold text-3xl sm:border-b border-gray-500p-3 mt-5'>Search Results</h1>
      </div>

      <div className='p-7 flex flex-col gap-4'>
        {
          !loading && posts.length === 0 && (
              <p> NO POST FOUND</p>
          )
        }
      </div>

        </div>


    </div>
  )
}
