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
    <div className='py-24'>

      <form>
        <div>
          <label> SearchTerm</label>
          <input type="text" placeholder='Search...'
          id='searchTerm'
           />
        </div>
      </form>
      <div></div>


    </div>
  )
}
