import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';

export default function ReadAPost() {
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
      <div className="flex flex-col lg:flex-row relative">
        <div className="lg:sticky lg:top-0">
          <img src={post.image} className="p-3 w-96" alt={post.title} />
          <div>{post.title}</div>
          <div>{post.author}</div>
          <p>{(post.content.length / 1000).toFixed(0)} mins</p>
        </div>
        <div ref={contentRef} className="overflow-y-auto h-full max-h-screen">
          <div
            className="p-3 max-w-3xl mx-auto text-justify"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
        <div>
        <img src={post.image} className="p-3 w-96" alt={post.title} />
        </div>
      </div>
    </main>
  );
}
