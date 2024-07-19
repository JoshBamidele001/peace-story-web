import moment from 'moment'
import { useEffect, useState } from 'react';

export default function Comment({comment}) {
    const [user, setuser] = useState({})
    console.log(user);

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
    
  return (
    <div className='flex p-4 border-b text-sm'>
        <div className='flex-shrink-0 mr-3'>
            <img className='w-10 h-10 rounded-full bg-gray-200' src={user.avatar} alt={user.name} />
        </div>
        <div className='flex-1'>
            <div className='flex items-center mb-1'>
                <span className='font-semibold mr-1 text-xs truncate '> {user ? `@ ${user.name}` : 'anonymous user'}</span>
                <span className='text-gray-500 text-xs'> {moment(comment.createdAt).fromNow()} </span>
            </div>
            <p className='text-justify text-gray-500 pb-2'>{comment.content}</p>
        </div>
    </div>
  )
}
 