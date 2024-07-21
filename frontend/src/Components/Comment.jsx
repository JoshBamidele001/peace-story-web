import moment from 'moment'
import {  useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';

export default function Comment({comment, onLike, onEdit }) {
    const { currentUser } = useSelector(state => state.user);
    const [isEditing, setisEditing] = useState(false)
    const [editedContent, seteditedContent] = useState(comment.content)
    const [user, setuser] = useState({})
    
    useEffect(()=>{
        const getUser = async () => {
            try {
                const res = await fetch (`/api/user/${comment.userId}`);
                const data = await res.json()
                if (res.ok) {
                    setuser(data)
                }
            } catch (error) {
                console.log(error.message); 
            }
        }
        getUser();
    }, [comment])
    
    const handleEdit = () => {
        setisEditing(true)
        seteditedContent(comment.content)

    }

    const handleSave = async () =>{
        try {
            const res = await fetch (`/api/comment/editComment/${comment._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: editedContent
                })
            });

            if (res.ok) {
                setisEditing(false);
                onEdit(comment, editedContent)
            }
            
        } catch (error) {
           console.log(error.message);
        }
    }
  return (
    <div className=' max-w-3xl mx-auto flex p-4 border-b text-sm'>
        <div className='flex-shrink-0 mr-3'>
            <img className='w-10 h-10 rounded-full bg-gray-200' src={user.avatar} alt={user.name} />
        </div>
        <div className='flex-1'>
            <div className='flex items-center mb-1'>
                <span className='font-semibold mr-1 text-xs truncate '> {user ? `@ ${user.name}` : 'anonymous user'}</span>
                <span className='text-gray-500 text-xs'> {moment(comment.createdAt).fromNow()} </span>
            </div>
            
            {
                isEditing ? (
                   <>
                    <textarea
                    className='w-full p-2 text-gray-700 bg-gray-200
                    rounded-md resize-none focus:outline-none focus:bg-gray-100' 
                    value={editedContent} 
                    onChange={(e) => seteditedContent(e.target.value)}
                    id=""></textarea>

                    <div className='flex justify-end gap-2'>
                        <button type='button'
                        onClick={handleSave}
                         className=' btn bg-blue-600 py-2 px-3 text-white rounded-xl text-sm hover:bg-white hover:text-blue-700 hover:border'>
                            Save
                            </button>
                        <button type='button'
                        onClick={() => setisEditing(false)} className=' btn bg-red-600 py-2 px-3 text-white rounded-xl text-sm hover:bg-white hover:text-red-700 hover:border'>Cancel</button>
                    </div>
                   </>
                ) : (
                    <>
                    
            <p className='text-justify text-gray-500 pb-2'>{comment.content}</p>
            <div className='flex gap-2 items-center'>
                <button type='button' 
                onClick={()=> onLike(comment._id)} 
                className={`text-gray-400 hover:text-blue-500 ${ currentUser && comment.likes.includes(currentUser._id) && '!text-blue-500'
                    }`}>
                    <FaThumbsUp className='text-sm'/>
                </button>
                <p className='text-gray-500 text-xs'>
                    {comment.numberOfLikes > 0 && comment.numberOfLikes + ' ' +
                    (comment.numberOfLikes === 1 ? 'like' : 'likes')}
                </p>

                {
                    currentUser && (currentUser._id === comment.userId || currentUser.isAdmin
                        && ( <button
                                type= 'button'
                                onClick={handleEdit}
                                className='text-gray-400 hover:text-blue-500'>
                                Edit
                        </button>)
                    )
                }
            </div>
                    </>
                )
            }
            
        </div>
    </div>
  )
}
 