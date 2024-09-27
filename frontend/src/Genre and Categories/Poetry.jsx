import React, { useEffect , useState}  from 'react'
import PostCard from '../Components/PostCard';

export default function Poetry() {
    const [poetry, setpoetry] = useState([])

    useEffect(() => {
        const fetchPoetry = async () => {
            try {
              const res = await fetch ('/api/post/getposts?genre=poetry&limit=3')
              const data = await res.json()
              if (res.ok) {
                setpoetry(data.posts)
               
              }
             } catch (error) {
              console.log(error.message);
             }
          }
      
          fetchPoetry()
      }, [])
  return (
    <div>
            {
                poetry && poetry.length > 0 && (
                    <div>
                        <div>
                            <p className='text-center py-5 text-purple-900 lg:text-3xl font-semibold'>For lovers of poetry, here are poems for you:</p>
                        </div>
                        { poetry && poetry.map((post) => (
                         <div className='w-full py-5 '>
                        <PostCard key={post._id} post={post}/>
                         </div> ))
                         }
                    </div>
                )
            }
    </div>
  )
}
 