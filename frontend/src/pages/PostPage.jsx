import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Spinner from './Spinner';
import CalltoAction from './CalltoAction';
import CommentSection from './CommentSection';
import PostCard from '../Components/PostCard'
import AdvertCard from '../Components/AdvertCard'


export default function PostPage() {
  const { currentUser } = useSelector(state => state.user);
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [similarStory, setSimilarStory] = useState([]);
  const [similarDrama, setSimilarDrama] = useState([]);
  const [similarPoetry, setSimilarPoetry] = useState([]);
  

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
        }
        if (Array.isArray(data.posts) && data.posts.length > 0) {
          setSimilarStory(data.posts);
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
  }, []);

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
        }
        if (Array.isArray(data.posts) && data.posts.length > 0) {
          setSimilarDrama(data.posts);
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
  }, []);

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
        }
        if (Array.isArray(data.posts) && data.posts.length > 0) {
          setSimilarPoetry(data.posts);
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
  }, []);

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
    <main className="pt-24">
      <div className='h-80 border-b shadow-lg pb-5 shadow-slate-600 flex items-center justify-center self-center'>
        <img src={post.image} className='p-3 w-56 pb-5' alt={post.title} />
        <div>
          <div>{post.title}</div>
          <div>{post.author}</div>
          <p>{(post.content.length / 1000).toFixed(0)} mins</p>
       
          <Link to={`/post/read/${postSlug}`}>
            <p className='bg-black rounded-2xl btn text-white px-3 py-2'>Start Reading</p>
          </Link>
        </div>
      </div>

      <div className='max-w-5xl lg:mx-auto'>
        <div className='py-5'>
          <div className='text-xl font-semibold'>
            {post.genre === 'drama' ? (
              <p>Synopsis of Drama:</p>) : ''
            }
            {post.genre === 'prose' ? (
              <p>Synopsis, {post.title}:</p>) : ''
            }
            {post.genre === 'poetry' ? (
              <p>Biography of poet</p>) : ''
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
      {/* the call to action */}
      <div className='max-w-7xl mx-auto w-full'>
        <CalltoAction />
        {
          currentUser ? (
            <div className='flex items-center my-1 gap-2'>
              <p className='text-gray-400'>Signed in as: </p>
              <img
                className='h-5 w-5 object-cover rounded-full' src={currentUser.avatar}
                alt={currentUser.name} />
            </div>
          ) : (
            <div className='text-sm text-orange-500 my-5 flex gap-1'>
              You must be signed in to view and make comment.
              <Link to='/sign-in' className='font-semibold'>Sign-in</Link>
            </div>
          )
        }

        {/* {currentUser && (
          <CommentSection postId={post._id} />
        )} */}
      </div>


        {/* the divi for the posts that are PROSE */}

      {
        post.genre === 'prose' ? (
          <>
          <p className='max-w-6xl lg:mx-auto py-5 text-2xl font-semibold'>Similar {post.genre} you would like:</p>

          <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row'>
                <div>
                    <div className='flex flex-wrap max-w-4xl lg:mx-auto  gap-5'>
                      { similarStory && similarStory.map((post) => (
                          <PostCard key={post._id} post={post}/>
                      ))}
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <AdvertCard
                      rating="4.8"
                      title="Our Ads: Share with Us"
                      imageUrl="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2FWriting%20card%201.jpg?alt=media&token=41741a8f-b602-40fe-80ba-da6e0876c717"
                      level="Submit With Us"
                      description="Share your godly and moral stories to inspire others. Your wisdom and positivity can uplift many! PROMO ENDS SEPT 2ND"
                      instructorImageUrl="https://tinyurl.com/dphospens"
                      instructorName="dphosPENS Editors"
                      price="0"
                      />
                    <AdvertCard
                      rating="4.8"
                      title="We can help your write"
                      imageUrl="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2Fwriting%20card%202.jpg?alt=media&token=5f31f956-c239-4a58-a06a-ff16e25148f9"
                      level="Drop your synopsis"
                      description="Let us help you write your godly and moral stories. Share your experiences, and we'll bring your wisdom to life. "
                      instructorImageUrl="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2Fwriting%20card%202.jpg?alt=media&token=5f31f956-c239-4a58-a06a-ff16e25148f9"
                      instructorName="dphosPENS Writers"
                      price="20"
                    />
                </div>
            </div>
          </div>
          </>
        ) : ''
      }

      {
        post.genre === 'drama' ? (
          <div className=' flex'>
            <div>
              <div className='flex flex-wrap max-w-5xl lg:mx-auto  gap-5'>
                {similarDrama && similarDrama.map((post) => (
                  <PostCard key={post._id} post={post}/>
                ))}
              </div>
            </div>
            <div>
              <AdvertCard/>
            </div>
          </div>
        ) : ''
      }

      {
        post.genre === 'poetry' ? (
          <div className='grid grid-cols-1 max-w-5xl lg:mx-auto lg:grid-cols-4 gap-5'>
            {similarPoetry && similarPoetry.map((post) => (
                <PostCard key={post._id} post={post}/>
            ))}
          </div>
        ) : ''
      }
    </main>
  )

}
