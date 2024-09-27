import React, { useEffect , useState}  from 'react'
import PostCard from '../Components/PostCard';
export default function Prose() {
    const [proseGenre, setproseGenre] = useState([])

    useEffect(() => {
        const fetchProseGenre = async () => {
            try {
              const res = await fetch ('/api/post/getposts?genre=prose&limit=3')
              const data = await res.json()
              if (res.ok) {
                setproseGenre(data.posts)
               
              }
             } catch (error) {
              console.log(error.message);
             }
          }
      
          fetchProseGenre()
      }, [])
  return (
    <div>
            {
                proseGenre && proseGenre.length > 0 && (
                    <div>
                        <div>
                            <p className='text-center py-5 text-purple-900 lg:text-3xl font-semibold'>For lovers of Prose, here are prose for you:</p>
                        </div>
                        { proseGenre && proseGenre.map((post) => (
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
 