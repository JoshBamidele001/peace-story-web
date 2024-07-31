import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Modal from '../Components/Modal';
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function UsersDashboard() {
  const { currentUser } = useSelector((state)=> state.user)
  const [users, setusers] = useState([])
  const [showMore, setshowMore] = useState(true) 
  const [userIdToDelete, setuserIdToDelete] = useState('')
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
   const fetchUsers = async () => {
    try {
      const res = await fetch(`/api/user/getusers`)
      const data = await res.json()
      if(res.ok){
        setusers(data.users);
        if (data.users.length < 9){
          setshowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    } 
   };

   fetchUsers()
    
  }, [currentUser._id])

  const handleShowMore = async () =>{
    const startIndex = users.length;
    try {
      const res = await fetch(`/api/user/getusers?startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok){
        setusers((prev)=> [...prev, ...data.users]);
        if(data.users.length < 9){
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
      const res = await fetch(`/api/user/delete/${userIdToDelete}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();

      if (!res.ok){
        console.log(data.message);;

      }else {
        setusers((prev)=>
        prev.filter((users) => users._id !== userIdToDelete))
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
        users.length > 0 ? (
         <div>

          <table class="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr >
                        <th class="py-3 px-4 bg-gray-200 text-left">Date Created</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">User Image</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Name</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Email</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Admin</th>
                        <th class="py-3 px-4 bg-gray-200 text-left">Delete</th>
                    </tr>
                </thead>
                {users.map((users)=> (
                  <tbody>
                      <tr className='hover:bg-gray-200 transition-all'>
                          <td className=" px-4 py-3 my-5 ">{new Date (users.createdAt).toLocaleDateString()}</td>

                        
                          <td className=' flex  items-center justify-center  my-5'> <img src={users.avatar} alt={users.name}
                          className='w-12 h-12 rounded-full object-contain bg-gray-500 '/> </td>
                       
                          
                          <td className=" px-4 py-3  my-5" >
                         
                          {users.name}</td>

                          <td className=" px-4 py-3  my-5" >{users.email}</td>
                          <td className=" px-4 py-3  my-5" >
                            {users.isAdmin ? <FaCheck className='text-green-500' /> : <FaTimes className='text-red-500'/>
                                     }</td>
                          <td className=" px-4 py-3  my-5" >                        
                            <button className='text-red-500 font-semibold hover:underline'
                             onClick={()=> {
                              setModalOpen(true);
                              setuserIdToDelete(users._id)
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
