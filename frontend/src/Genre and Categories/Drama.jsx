import React, { useEffect , useState}  from 'react'
import PostCard from '../Components/PostCard';

export default function Drama() {
    const [drama, setDramaGenre] = useState([])

    useEffect(() => {
        const fetchdrama = async () => {
            try {
              const res = await fetch ('/api/post/getposts?genre=drama&limit=3')
              const data = await res.json()
              if (res.ok) {
                setDramaGenre(data.posts)
               
              }
             } catch (error) {
              console.log(error.message);
             }
          }
      
          fetchdrama()
      }, [])
  return (
    <div>
            {
                drama && drama.length > 0 && (
                    <div>
                        <div>
                            <p className='text-center py-5 text-purple-900 lg:text-3xl font-semibold'>Because you love drama, here are other drama</p>
                        </div>
                        { drama && drama.map((post) => (
                         <div className='w-full py-5 '>
                        <PostCard key={post._id} post={post}/>
                         </div> ))
                         }
                    </div>
                )
            }
    </div>
  )
}
 