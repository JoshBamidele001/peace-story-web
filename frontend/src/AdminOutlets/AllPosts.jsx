import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function AllPosts() {
  const { currentUser } = useSelector((state)=> state.user)
  const [userPosts, setuserPosts] = useState([])
  console.log(userPosts);
  useEffect(() => {
   const fetchPosts = async () => {
    try {
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`)
      const data = await res.json()
      if(res.ok){
        setuserPosts(data.posts)
      }
    } catch (error) {
      console.log(error.message);
    }
   };

   fetchPosts()
    
  }, [currentUser._id])
  
  return (
    <>
      

      <div className='bg-[rgb(19,30,61)] h-32 text-gray-200 flex items-center justify-center flex-col'>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>HOME - ADMIN - ALL POST</small>
      </div>
      {
        userPosts.length > 0 ? (
          <table class="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th class="py-3 px-4 bg-gray-200 text-left">Date Posted</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Post Image</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Post Title</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Genre</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Category</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Delete</th>
                    </tr>
                </thead>
                {userPosts.map((post)=> (
                  <tbody>
                      <tr>
                          <td className="border px-4 py-3">{new Date (post.updatedAt).toLocaleDateString()}</td>
                         <Link to={`/post/${post.slug}`}>
                          <td className='flex items-center justify-center'> <img src={post.image} alt={post.title}
                          className='w-20 h-20 object-contain bg-gray-500 '/> </td>
                         </Link>

                        

                          <td className="border px-4 py-3" >
                          <Link to={`/post/${post.slug}`}>
                          {post.title}
                         </Link></td>
                          <td className="border px-4 py-3" >{post.genre}</td>
                          <td className="border px-4 py-3" >{post.category}</td>
                          <td className="border px-4 py-3" >
                            <Link to={`/update-post/${post._id}`}>
                            <p className='text-green-500 font-semibold hover:underline'>Edit</p>
                            </Link>
                            
                            <p className='text-red-500 font-semibold hover:underline'>Delete</p>
                          </td>
                          
                      </tr>
                  </tbody>
                ))

                }
          </table>
        ) : (
          <p>You dont have a post yet</p>
        )
      }

      
    </>
  )
}
