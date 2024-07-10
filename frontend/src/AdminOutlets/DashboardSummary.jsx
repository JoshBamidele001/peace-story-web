import React, { useState } from 'react'
import Modal from '../Components/Modal';

export default function DashboardSummary() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const confirmDelete = async () => {
    setModalOpen(false);
    try {
      const res = await fetch(`/api/post/deletepost/${postIdToDelete}/${currentUser.id}`,
        {
          method: 'DELETE',
        }
      );
      const data = await res.json();
      if (!res.ok){
        console.log(data.message);;

      }else {
        setUserPosts((prev)=>
        prev.filter((post) => post._id !== postIdToDelete))
      }

     
    } catch (error) {
      
    }

  };

  return (
    <div>
      
      <div className='bg-[rgb(19,30,61)] h-32 text-gray-200 flex items-center justify-center flex-col'>
            <p className=' text-lg'>ADMIN Dashboard</p>
            <small>HOME - ADMIN - DASHBOARD</small>
      </div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={openModal}
      >
       Delete Post
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        title="Delete Post"
      >
        Are you sure you want to delete this post?
      </Modal>
      
      </div>
  )
}
