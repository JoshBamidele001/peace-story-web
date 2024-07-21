import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import Comment from '../Components/Comment';
import { Link, useNavigate } from 'react-router-dom'

export default function CommentSection({postId}) {
    const { currentUser } = useSelector(state => state.user);
    const [commentError, setcommentError] = useState(null)
    const [comment, setcomment] = useState('')
    const [comments, setcomments] = useState([]);
    const navigate = useNavigate()
    

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
                setcomments([data, ...comments])
            }
        } catch (error) {
            setcommentError(error.message)
        }
    }

    useEffect (() =>{
        const getComments = async () =>{
            try {
                const res = await fetch(`/api/comment/getPostComments/${postId}`);
                if(res.ok){
                    const data = await res.json()
                    setcomments(data)
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        getComments()
    }, [postId])

    const handleLike = async (commentId) =>{
        try {
            if (!currentUser){
                navigate('/sign-in')
                return
            }
            const res = await fetch(`/api/comment/likeComment/${commentId}`, {
                method: 'PUT',

            });
            if (res.ok){
                const data = await res.json();
                setcomments(comments.map((comment) => 
                    comment._id === commentId ? {
                        ...comment,
                        likes: data.likes,
                        numberOfLikes: data.likes.length,
                    } : comment
                ))
            }
        } catch (error) {
            next(error)
        }
    }

    const handleEdit = async (comment, editedContent) =>{
        setcomments(
            comments.map((c) =>
            c._id === comment._id ? { ...c, content: editedContent } : c)
        );
    };
  return (
    <div className='w-full p-3'>
        
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

            {
               comments.length === 0 ? (
                    <p className='text-sm my-5'> No comments yet! </p>
               ) : (
                <>
                    <div className='text-sm my-5 flex items-center gap-1'>
                        <p>Comments</p>
                        <div className='border border-gray-400 py-1 px-2 rounded-sm'>
                            <p>{comments.length}</p>
                        </div>
                    </div>

                {
                    comments.map((comment) => (
                        <Comment  key= {comment._id}
                        comment= {comment} onLike={handleLike}
                        onEdit={handleEdit}/>
                    ))
                }

                </>
               )}
        </div>
  )
}
