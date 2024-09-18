import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';
import Spinner from '../pages/Spinner';

export default function AllPosts() {
  const { currentUser } = useSelector((state)=> state.user)
  const [userPosts, setuserPosts] = useState([])
  const [showMore, setshowMore] = useState(true) 
  const [postIdToDelete, setpostIdToDelete] = useState('')
  const [isModalOpen, setModalOpen] = useState(false);
  const [ loading, setloading] = useState(true);

  useEffect(() => {
   const fetchPosts = async () => {
    try {
      setloading(true)
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`)
      const data = await res.json()
      if(res.ok){
        setloading(false)
        setuserPosts(data.posts);
        if (data.posts.length < 9){
          setshowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    } 
   };

   fetchPosts()
    
  }, [currentUser._id])

  const handleShowMore = async () =>{
    const startIndex = userPosts.length;
    try {
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok){
        setuserPosts((prev)=> [...prev, ...data.posts]);
        if(data.posts.length < 9){
          setshowMore(false)
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const confirmDelete = async () => {
    setModalOpen(false);
    try {
      const res = await fetch(`/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();

      if (!res.ok){
        console.log(data.message);;

      }else {
        setuserPosts((prev)=>
        prev.filter((post) => post._id !== postIdToDelete))
      }

     
    } catch (error) {
      setloading(false)
      console.log(error.message);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  
  return (
    <>
      

      <div className='bg-[rgb(19,30,61)] h-32 text-gray-200 flex items-center justify-center flex-col'>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>HOME - ADMIN - ALL POST</small>
      </div>
     
     <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100'>

     {
        userPosts.length > 0 ? (
         <div>

          <table class="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr >
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
                      <tr className="hover:bg-gray-200 transition-all">
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
                            <Link to={`/admin/update_post/${post._id}`}>
                            <p className='text-green-500 font-semibold hover:underline'>Edit</p>
                            </Link>
                            
                            <button className='text-red-500 font-semibold hover:underline'
                             onClick={()=> {
                              setModalOpen(true);
                              setpostIdToDelete(post._id)
                             }}>Delete</button>
                          </td>
                          
                      </tr>
                  </tbody>
                ))

                }
          </table>

              <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                onConfirm={confirmDelete}
                title="Delete Post"
              >
            Are you sure you want to delete this post?
          </Modal>

          {showMore && (
            <button className='text-green-600 p-3 my-2 font-semibold hover:underline'
            onClick={handleShowMore}>SHOW MORE</button>
          )}

          

         </div>

           
        ) : (
          <p>You dont have a post yet</p>
        )
      }


     </div>
      
    </>
  )
}
