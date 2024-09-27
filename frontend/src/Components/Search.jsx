import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../Components/PostCard'

export default function Search() {
  const [sidebarData, setsidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: [],
    genre: 'uncategorized'
  });
  console.log(sidebarData);
  

  const [posts, setposts] = useState([])
  const [loading, setloading] = useState(false)
  const [showMore, setshowMore] = useState(false);

  const location = useLocation()
  const navigate = useNavigate()
 
  

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category')?.split(',') || [];
    const genreFromUrl = urlParams.get('genre');
  
    if (searchTermFromUrl ||
       sortFromUrl ||
        categoryFromUrl || 
        genreFromUrl) {

      setsidebarData({
        searchTerm: searchTermFromUrl || '',
        sort: sortFromUrl || 'desc',
        category: categoryFromUrl,
        genre: genreFromUrl || 'uncategorized',
      })
    }
  
    const FetchPosts = async () => {
      setloading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (res.ok) {
        const data = await res.json();
        setposts(data.posts);
        setloading(false);
        setshowMore(data.posts.length === 9);
      } else {
        setloading(false);
      }
    };
  
    FetchPosts();
  }, [location.search]);
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'searchTerm') {
      setsidebarData({ ...sidebarData, searchTerm: value });
    } else if (id === 'category') {
      setsidebarData({ ...sidebarData, category: value ? [value] : [] });
    } else if (id === 'sort') {
      setsidebarData({ ...sidebarData, sort: value || 'desc' });
    } else if (id === 'genre') {
      setsidebarData({ ...sidebarData, genre: value || 'uncategorized' });
    }
  };


  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const updatedCategories = checked
      ? [...sidebarData.category, value] // Add if checked
      : sidebarData.category.filter((category) => category !== value); // Remove if unchecked
  
    setsidebarData({ ...sidebarData, category: updatedCategories });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Correct the typo here
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('genre', sidebarData.genre);
    urlParams.set('category', sidebarData.category.join(','));
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }
  
  
  return (
    <div className='py-24 flex flex-col md:flex-row' >

      <form className='px-5 w-full md:w-1/4 ' onSubmit={handleSubmit}>
        <div>
          <div className='bg-gray-200 h-24 px-5 py-2 rounded-lg'>
              <label> SearchTerm </label>
              <p> 
                  <input type="text" placeholder='Search...'
                  id='searchTerm' 
                  value={sidebarData.searchTerm}
                  onChange={handleChange} className='p-2 rounded-lg w-full border my-2 '/>
              </p>
          </div>

          <div className='bg-gray-200 h-24 px-5 py-2 my-5 rounded-lg'>
              <label> Genre </label>
              <p>
                <select name="genre" class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                  defaultValue={sidebarData.genre}
                  id='genre'
                 
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
    <div className="flex items-center my-1">
      <input
        id="adventure"
        name="categories"
        type="checkbox"
        value="adventure"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("adventure")}
        onChange={handleCategoryChange} // <-- Handle changes here
      />
      <label htmlFor="adventure" className="ml-3 block text-sm font-medium text-gray-700">
        Adventure
      </label>
    </div>
    <div className="flex items-center my-1">
      <input
        id="biblical_stories"
        name="categories"
        type="checkbox"
        value="biblical_stories"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("biblical_stories")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="biblical_stories" className="ml-3 block text-sm font-medium text-gray-700">
        Biblical Stories
      </label>
    </div>
    <div className="flex items-center my-1">
      <input
        id="science_fiction"
        name="categories"
        type="checkbox"
        value="science_fiction"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("science_fiction")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="science_fiction" className="ml-3 block text-sm font-medium text-gray-700">
        Science Fiction
      </label>
    </div>
    {/* Repeat the pattern for all other categories */}
    <div className="flex items-center my-1">
      <input
        id="mystery_thriller"
        name="categories"
        type="checkbox"
        value="mystery_thriller"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("mystery_thriller")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="mystery_thriller" className="ml-3 block text-sm font-medium text-gray-700">
        Mystery Thriller
      </label>
    </div>
    <div className="flex items-center my-1">
      <input
        id="historian_fiction"
        name="categories"
        type="checkbox"
        value="historian_fiction"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("historian_fiction")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="historian_fiction" className="ml-3 block text-sm font-medium text-gray-700">
        Historical Fiction
      </label>
    </div>
    {/* Add more checkboxes for other categories */}

    <div className="flex items-center my-1">
      <input
        id="biography"
        name="categories"
        type="checkbox"
        value="biography"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("biography")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="biography" className="ml-3 block text-sm font-medium text-gray-700">
        Biography
      </label>
    </div>

    <div className="flex items-center my-1">
      <input
        id="children_stories"
        name="categories"
        type="checkbox"
        value="children_stories"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("children_stories")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="children_stories" className="ml-3 block text-sm font-medium text-gray-700">
       Children Stories
      </label>
    </div>

    <div className="flex items-center my-1">
      <input
        id="literacy_fiction"
        name="categories"
        type="checkbox"
        value="literacy_fiction"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("literacy_fiction")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="literacy_fiction" className="ml-3 block text-sm font-medium text-gray-700">
        Literacy Fiction
      </label>
    </div>

    <div className="flex items-center my-1">
      <input
        id="humor"
        name="categories"
        type="checkbox"
        value="humor"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("humor")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="humor" className="ml-3 block text-sm font-medium text-gray-700">
       Humor
      </label>
    </div>

    <div className="flex items-center my-1">
      <input
        id="non-fiction"
        name="categories"
        type="checkbox"
        value="non-fiction"
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        checked={sidebarData.category.includes("non-fiction")}
        onChange={handleCategoryChange}
      />
      <label htmlFor="non-fiction" className="ml-3 block text-sm font-medium text-gray-700">
        Non-Fiction
      </label>
    </div>


  </div>
</div>


            <div className='bg-gray-200 h-24 px-5 py-2 my-5 rounded-lg'>
              <label> Sort </label>
              <p>
                <select name="genre" class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleChange}
                  defaultValue={sidebarData.sort}
                  id='sort'
                  >
                  <option value="uncategorized" class="text-gray-700">Select sort</option>
                  <option value="desc" class="text-gray-700">Latest</option>
                  <option value="asc" class="text-gray-700">Oldest</option>
                  </select>
              </p>
          </div>

          <button className='bg-purple-900 text-white w-full p-2 rounded-xl'>SEARCH</button>



        </div>
      </form>

        <div>
            <div>
              <h1 className='font-semibold md:text-3xl text-center md:text-start  sm:border-b border-gray-500p-3 mt-5'>Search Results</h1>
            </div>

            <div className='p-3 flex flex-col gap-4'>
              {
                !loading && posts.length === 0 && (
                    <p> NO POST FOUND</p>
                )
              }
              {
                loading && <p className='text-xl text-gray-500'> Loading...</p>
              }

              {
                !loading && posts && posts.map((post) => 
                  <PostCard key={post._id} post={post}/>
                )
              }
            </div>

            

        </div>


    </div>
  )
}
