import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function AllComments() {
  const { currentUser } = useSelector((state)=> state.user)
  const [comments, setcomments] = useState([])
  const [userPosts, setuserPosts] = useState([])
    const [users, setusers] = useState([])
  const [showMore, setshowMore] = useState(true) 
  const [commentIdToDelete, setcommentIdToDelete] = useState('')
  const [isModalOpen, setModalOpen] = useState(false);
  console.log(users);
  const forPostTitle = userPosts && userPosts.post ? userPosts.post : null;
  const forUser = users && users.users ? users.users : null

  useEffect(() => {
   const fetchComments = async () => {
    try {
      const res = await fetch(`/api/comment/getcomments`)
      const data = await res.json()
      if(res.ok){
        setcomments(data.comments);
        if (data.comments.length < 9){
          setshowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    } 
   };

   fetchComments()
   
    
  }, [currentUser._id])

  useEffect(() => {
    const fetchPosts = async () => {
     try {
       const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`)
       const data = await res.json()
       if(res.ok){
         setloading(false)
         setuserPosts(data.posts);
       }
     } catch (error) {
       console.log(error.message);
     } 
    };
 
    fetchPosts()
     
   }, [currentUser._id])


   useEffect(() => {
    const fetchUsers = async () => {
     try {
       const res = await fetch(`/api/user/getusers`)
       const data = await res.json()
       if(res.ok){
         setusers(data.users);
       }
     } catch (error) {
       console.log(error.message);
     } 
    };
 
    fetchUsers()
     
   }, [currentUser._id])


  const handleShowMore = async () =>{
    const startIndex = comments.length;
    try {
      const res = await fetch(`/api/comment/getcomments?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok){
        setcomments((prev)=> [...prev, ...data.comments]);
        if(data.comments.length < 9){
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
      const res = await fetch(`/api/comment/deleteComment/${commentIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();

      if (!res.ok){
        console.log(data.message);;

      }else {
        setcomments((prev)=>
        prev.filter((comments) => comments._id !== commentIdToDelete))
        setModalOpen(false)
      }

     
    } catch (error) {
      console.log(error.message);
    }
  };

  
  return (
    <>
      

      <div className='bg-[rgb(19,30,61)] h-32 text-gray-200 flex items-center justify-center flex-col'>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>Home - Admin - All Users</small>
      </div>
     
     <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100'>

     {
        comments.length > 0 ? (
         <div>

          <table class="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th class="py-3 px-4 bg-gray-200 text-left">Date Updated</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Comment content</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Number of likes</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">PostId</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">UserId</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Delete</th>
                    </tr>
                </thead>
                {comments.map((comments)=> (
                  <tbody>
                      <tr className=' hover:bg-gray-200 transition-all'>
                          <td className=" px-4 py-3 my-5 ">{new Date (comments.updatedAt).toLocaleDateString()}</td>

                        
                          <td className=' flex  items-center justify-center w-72 text-justify  my-5'> 
                            {comments.content}
                           </td>
                       
                          
                          <td className=" px-4 py-3  my-5" >
                         
                          {comments.numberOfLikes}</td>

                          <td className=" px-4 py-3  my-5" >
                            {
                            comments.postId 
                            // === forPostTitle._id ? (<p>{forPostTitle.title}</p>) : (<p>Deleted User</p>) 
                            }

                          </td>
                          {/* here to use conditional state to equate the userId = current._id then post currentuser.name */}
                          <td className=" px-4 py-3  my-5" >
                            {
                            comments.userId 
                            // === forUser._id ? (<p>{forUser.name}</p>) : (<p>Anonymous</p>) 
                            }</td>
                          <td className=" px-4 py-3  my-5" >                        
                            <button className='text-red-500 font-semibold hover:underline'
                             onClick={()=> {
                              setModalOpen(true);
                              setcommentIdToDelete(comments._id)
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
                title="Delete Comment"
              >
            Are you sure you want to delete this comment?
          </Modal>

          {showMore && (
            <button className='text-green-600 p-3 my-2 font-semibold hover:underline'
            onClick={handleShowMore}>SHOW MORE</button>
          )}

          

         </div>

           
        ) : (
          <p>You dont have a comment yet</p>
        )
      }


     </div>
      
    </>
  )
}
