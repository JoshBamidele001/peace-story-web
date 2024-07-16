import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from './Spinner';

export default function PostPage() {

  const { postSlug } = useParams();
  // const {postGenre } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [similarStory, setsimilarStory] = useState([])
  const [similarDrama, setsimilarDrama] = useState([])
  const [similarPoetry, setsimilarPoetry] = useState([])
  console.log(similarStory);
  console.log(similarDrama);
 

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (Array.isArray(data.posts) && data.posts.length > 0) {
          setPost(data.posts[0]);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?genre=prose&limit=4`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        } if (Array.isArray(data.posts) && data.posts.length > 0){
          setsimilarStory(data.posts)
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchGenre();  
   
  }, [])

  useEffect(() => {
    const fetchDrama = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?genre=drama&limit=4`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        } if (Array.isArray(data.posts) && data.posts.length > 0){
          setsimilarDrama(data.posts)
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchDrama();  
   
  }, [])

  useEffect(() => {
    const fetchPoetry = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?genre=poetry&limit=4`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        } if (Array.isArray(data.posts) && data.posts.length > 0){
          setsimilarPoetry(data.posts)
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchPoetry();  
   
  }, [])
  

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading post.</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <main className="pt-24 ">
     
        <div className='h-80 border-b shadow-lg shadow-slate-600 flex items-center justify-center self-center'>
            <img src={post.image}
            className='p-3 w-56 pb-5' alt={post.title} />
            <div>
                <div>{post.title}</div>
                <div>{post.author}</div>
            <p>{(post.content.length / 1000).toFixed(0)} mins</p>
            <Link to={`/post/read/${postSlug}`}>
            <p className='bg-black rounded-2xl btn text-white px-3 py-2'>Start Reading</p>
            </Link>
            </div>
        </div>

        <div className='max-w-5xl lg:mx-auto '>
            <div className='py-5'>
              <div className='text-xl font-semibold'>
                  { post.genre === 'drama' ? (
                    <p>Synopsis of Drama:</p>) :  ''           
                  }
                    { post.genre === 'prose' ? (
                    <p>Synopsis, {post.title}:</p>) :  ''           
                  }
                  { post.genre === 'poetry' ? (
                    <p>Biography of poet</p>) :  ''           
                  }
            </div>

            <div className='text-justify'>
                  <p>{post.synopsis} </p>              
            </div>

            </div>
              {/* the right sidebar of the postSlug */}
              <div className='py-5 text-justify'>
              <p className='text-xl font-semibold'>Biography of the Author:</p>
              <p>{post.biography}</p>
                
              </div>

        </div>

          <p className=' max-w-5xl lg:mx-auto py-5 text-2xl font-semibold'>Similar contents you would like</p>

          {
            post.genre === 'prose' ? (

     <div className='grid grid-cols-1 max-w-5xl lg:mx-auto lg:grid-cols-4 gap-5'>
      { 
        similarStory.map((posts) =>(
          <Link to={`/post/${posts.slug}`}>
         <div >
           <img src={posts.image} 
          className='w-72 h-72' alt={posts.title} />
           <p>{posts.title}</p>
           <p>Written by {posts.author}</p>

           </div>
          </Link>
        )
        
        )
      }
     </div>
            ) : ''
          }
     

     {
            post.genre === 'drama' ? (

     <div className='grid grid-cols-1 max-w-5xl lg:mx-auto lg:grid-cols-4 gap-5'>
      { 
        similarDrama.map((posts) =>(
          <Link to={`/post/${posts.slug}`}>
         <div >
           <img src={posts.image} 
          className='w-72 h-72' alt={posts.title} />
           <p>{posts.title}</p>
           <p>Written by {posts.author}</p>

           </div>
          </Link>
        )
        
        )
      }
     </div>
            ) : ''
          }
     

     {
            post.genre === 'poetry' ? (

     <div className='grid grid-cols-1 max-w-5xl lg:mx-auto lg:grid-cols-4 gap-5'>
      { 
        similarPoetry.map((posts) =>(
          <Link to={`/post/${posts.slug}`}>
         <div >
           <img src={posts.image} 
          className='w-72 h-72' alt={posts.title} />
           <p>{posts.title}</p>
           <p>Written by {posts.author}</p>

           </div>
          </Link>
        )
        
        )
      }
     </div>
            ) : ''
          }
      
      
    </main>
  );
}
