import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import {  useSelector } from 'react-redux'
import CommentSection from './CommentSection';

export default function ReadAPost() {
  const { currentUser } = useSelector(state => state.user);
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const contentRef = useRef(null);

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
    const savedPosition = localStorage.getItem('scroll-position');
    if (savedPosition && contentRef.current) {
      contentRef.current.scrollTop = parseInt(savedPosition, 10);
    }
  }, [post]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollTop = contentRef.current.scrollTop;
        localStorage.setItem('scroll-position', scrollTop);
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleSubmit = () =>{
    
  }

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
    <main className="pt-24 mx-10 lg:mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[20%_50%_30%] relative">
        <div className="lg:sticky lg:top-0 p-5">
          <img src={post.image} className="p-3 w-96" alt={post.title} />
          <div>{post.title}</div>
          <div>{post.author}</div>
          <p>{(post.content.length / 1000).toFixed(0)} mins</p>
        </div>
        <div ref={contentRef} className="overflow-y-auto h-full max-h-screen">
          <div
            className="p-3 max-w-3xl mx-auto text-justify post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        {/* Likes and comment section */}
        <div>
        <p className='p-5 text-2xl'>LIKES AND COMMENTS</p>
          <span className='text-gray-500 text-sm px-5'>Kindly like and share your comments</span>
             <img src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2FAdd%20comments.jpg?alt=media&token=fd4e68ed-348f-491f-ae19-038aa81150f6" className="p-3 w-96 h-96" />
        

          <CommentSection postId = {post._id}/>
        </div>
      </div>
    </main>
  );
}
