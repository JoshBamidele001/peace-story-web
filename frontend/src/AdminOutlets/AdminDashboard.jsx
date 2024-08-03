import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaUserGroup } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import { MdOutlineInsertComment } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [users, setusers] = useState([])
  const [comments, setcomments] = useState([])
  const [posts, setposts] = useState([])
  const [totalUsers, settotalUsers] = useState(0)
  const [totalPosts, settotalPosts] = useState(0)
  const [totalComments, settotalComments] = useState(0)
  const [lastMonthUsers, setlastMonthUsers] = useState(0)
  const [lastMonthPosts, setlastMonthPosts] = useState(0)
  const [lastMonthComments, setlastMonthComments] = useState(0)
  const { currentUser } = useSelector((state)=> state.user)

  useEffect(() => {
    const fetchUsers = async () => {
       try {
        const res = await fetch ('/api/user/getusers?limit=5')
        const data = await res.json()
        if (res.ok) {
          setusers(data.users)
          settotalUsers(data.totalUsers)
          setlastMonthUsers(data.lastMonthUsers)
        }
       } catch (error) {
        console.log(error.message);
       }
    }
    const fetchPosts = async () => {
      try {
        const res = await fetch ('/api/post/getposts?limit=5')
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

    const fetchComments = async () => {
      try {
        const res = await fetch ('/api/comment/getcomments?limit=5')
        const data = await res.json()
        if (res.ok) {
          setcomments(data.comments)
          settotalComments(data.totalComments)
          setlastMonthComments(data.lastMonthComments)
        }
       } catch (error) {
        console.log(error.message);
       }
    }

    fetchUsers()
    fetchPosts()
    fetchComments()
  
   
  }, [currentUser])
  

  return (
    <div>
       <div className='bg-[rgb(19,30,61)] h-32 text-gray-200 flex items-center justify-center flex-col' style={{ background: "linear-gradient(to right,  #000000, #d251ee)"}}>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>HOME - ADMIN - DASHBOARD</small>
      </div>

        {/* the total users, post and comments header section */}
      <div className='py-3 md:mx-auto '>
          <div className="flex-wrap flex gap-4 justify-center ">

                 {/* for Users */}
          <div className='flex flex-col p-3 gap-4 
          md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-2xl text-purple-900 font-semibold text-md uppercase'>Total Users</h3>
                    <p className='text-2xl '>{totalUsers}</p>
                </div>
                    <FaUserGroup className='bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg' />
            </div>
                <div className='flex gap-2 text-sm'>
                    <span className='text-green-500 flex items-center'>
                    <FaArrowUpLong  />
                    {lastMonthUsers}
                    </span>
                  <div className='text-gray-500'>Last Month</div>
                </div>
             
          </div>

           {/* for Posts */}
           <div className='flex flex-col p-3 gap-4 
          md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-2xl text-gray-500 text-md uppercase'>Total Posts</h3>
                    <p className='text-2xl '>{totalPosts}</p>
                </div>
                    <TiDocumentText className='bg-red-600 text-white rounded-full text-5xl p-3 shadow-lg' />
            </div>
                <div className='flex gap-2 text-sm'>
                    <span className='text-green-500 flex items-center'>
                    <FaArrowUpLong  />
                    {lastMonthPosts}
                    </span>
                  <div className='text-gray-500'>Last Month</div>
                </div>
             
          </div>

           {/* for Commments */}
           <div className='flex flex-col p-3 gap-4 
          md:w-72 w-full rounded-md shadow-md'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-2xl text-gray-500 text-md uppercase'>Total Comments</h3>
                    <p className='text-2xl '>{totalComments}</p>
                </div>
                    <MdOutlineInsertComment className='bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg' />
            </div>
                <div className='flex gap-2 text-sm'>
                    <span className='text-green-500 flex items-center'>
                    <FaArrowUpLong  />
                    {lastMonthComments}
                    </span>
                  <div className='text-gray-500'>Last Month</div>
                </div>
             
          </div>
          </div>
      </div>

      {/* recents post, users, comment */}

  <div className='flex flex-wrap gap-4 py-3 mx-auto justify-center'>

         {/* the recent users div */}
      <div>
          <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md'>
              <div className='flex justify-between mb-4 border-b-2 text-sm font-semibold'>
                <h1 className='text-center text-lg'>Recent users</h1>
                <button className='bg-teal-500 text-white px-3 py-1 rounded hover:bg-transparent hover:border-green-900 hover:border-2'>
                  <Link to={'/admin/user-profile'}>
                  See All
                  </Link>
                </button>
              </div>

              <table className=''>
                  <thead>
                    <tr>
                      <th>User Image</th>
                      <th>Name</th>
                    </tr>
                  </thead>

                { users && users.map((user) => (
                  <tbody className='' key={user._id}>
                    <tr className=''>
                      <td className='bg-white divide-y p-2'> 
                          <img src={user.avatar} alt='user' className='w-10 h-10 rounded-full bg-gray-500 ' />
                      </td>
                      <td className='w-80'>{user.name}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
          </div>
      </div>

       {/* the recent comments div */}
       <div>
          <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md'>
              <div className='flex justify-between mb-4  border-b-2 text-sm font-semibold'>
                <h1 className='text-center text-lg'>Recent Comments</h1>
                <button className='bg-blue-500 text-white px-3  rounded hover:bg-transparent hover:border-green-900 hover:border-2'>
                  <Link to={'/admin/all-comments'}>
                  See All
                  </Link>
                </button>
              </div>

              <table className='text-justify'>
                  <thead>
                    <tr>                      
                      <th>Comment Contents</th>
                      <th>Likes</th>
                    </tr>
                  </thead>

                { comments && comments.map((comment) => (
                  <tbody className='' key={comment._id}>
                    <tr>
                        <td className='bg-white divide-y w-96 p-2 line-clamp-2'> 
                            {comment.content}
                        </td>
                        <td className='w-12'>{comment.numberOfLikes}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
          </div>
      </div>

      {/* the recent posts div */}
      <div>
          <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md'>
              <div className='flex justify-between mb-4 border-b-2 text-sm font-semibold'>
                <h1 className='text-center text-lg'>Recent posts</h1>
                <button className='bg-red-500 text-white px-3  rounded hover:bg-transparent hover:border-green-900 hover:border-2'>
                  <Link to={'/admin/all-posts'}>
                  See All
                  </Link>
                </button>
              </div>

              <table className=''>
                  <thead>
                    <tr>
                      <th>Post Image</th>
                      <th>Post Title</th>
                      <th>Author</th>

                    </tr>
                  </thead>

                { posts && posts.map((post) => (
                  <tbody className='' key={post._id}>
                    <tr>                      
                      <td className='bg-white divide-y p-2'> 
                          <img src={post.image} alt='user' className='w-10 h-10 rounded-full bg-gray-500 ' />
                      </td>
                      <td className='w-80 '>{post.title}</td>
                      <td>{post.author}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
          </div>
      </div>
      
     
          
        </div>

    </div>
  )
}
