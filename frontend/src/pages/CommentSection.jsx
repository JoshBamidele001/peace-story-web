import React, { useState } from 'react'
import {  useSelector } from 'react-redux'

export default function CommentSection({postId}) {
    const { currentUser } = useSelector(state => state.user);
    const [commentError, setcommentError] = useState(null)
    const [comment, setcomment] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if (comment.length > 200) {
            return;
        }
        try {
            
            const res = await fetch ('/api/comment/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: comment, postId, userId: currentUser._id}),
            });
            const data = await res.json()
            if (res.ok){
                setcomment('')
                setcommentError(null)
            }
        } catch (error) {
            setcommentError(error.message)
        }
    }

  return (
    <div className='w-full p-3'>
          <p className='p-5 text-2xl'>LIKES AND COMMENTS</p>
          <span className='text-gray-500 text-sm px-5'>Kindly like and share your comments</span>
             <img src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2FAdd%20comments.jpg?alt=media&token=fd4e68ed-348f-491f-ae19-038aa81150f6" className="p-3 w-96 h-96" alt={postId.title} />
        
        <div className='border rounded '>
              <form onSubmit={handleSubmit}>
               
              <p className='text-blue-700 font-semibold p-3 flex items-center'>Comment as  <img src={currentUser.avatar} className='w-6 h-6 border-4 ms-3 me-1  rounded-full' alt={currentUser.name} /> {currentUser.name}:</p>
              <textarea 
                    name=""
                    id=""
                    className='border-2 p-2 rounded-xl w-5/6 mx-3 '
                    placeholder='Add a comment...'
                    rows='3'
                    maxLength='200'
                    onChange={(e) => setcomment(e.target.value)}
                    value={comment}>              
               </textarea>
               <div className='flex justify-center items-center gap-5 py-3 shadow-lg'>
                  <p className='text-sm  text-gray-400'>{200 - comment.length} characters remaining</p>
                  <button type='submit' className='btn bg-blue-300 py-2 px-4 rounded-lg hover:bg-blue-900 hover:text-white'>Submit</button>
               </div>

              {
                commentError && (
                    <span className='text-sm text-red-500 py-3'>
                    {commentError}
                   </span>
                )
              }
              </form>

               
            </div>
        </div>
  )
}
