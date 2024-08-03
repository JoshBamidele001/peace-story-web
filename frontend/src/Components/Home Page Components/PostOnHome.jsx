import React, { useEffect, useState } from 'react'
import PostCard from '../PostCard'
import AdvertCard from '../AdvertCard'

export default function PostOnHome() {
    const [posts, setposts] = useState([])
    const [totalPosts, settotalPosts] = useState(0)
    const [lastMonthPosts, setlastMonthPosts] = useState(0)
    
    useEffect(() => {
      const fetchPosts = async () => {
          try {
            const res = await fetch ('/api/post/getposts?limit=3')
            const data = await res.json()
            if (res.ok) {
              setposts(data.posts)
              settotalPosts(data.totalPosts)
              setlastMonthPosts(data.lastMonthPosts)
            }
           } catch (error) {
            console.log(error.message);
           }
        }
    
        fetchPosts()
    }, [])
    
    
  return (
    <div>
         { posts && posts.map((post) => (
                  <div className='w-full py-5 '>
                        <PostCard key={post._id} post={post}/>
                       
                  </div>
                ))}
    </div>
  )
}
