// src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
// import coverImage from ''; // Update the path to your image

const Card = ({post}) => {
    return (
        <div className="flex items-center border p-4 max-w-6xl mx-auto shadow-lg">
            <img src={post.image} alt="Book Cover" className="w-36 h-auto mr-4" />
            <div className="flex-1">
                <div className="text-xl font-bold flex items-center">
                    <Link to={`/post/${post.slug}`}>
                    <span className='text-3xl hover:underline text-purple-800  '>{post.title}</span>
                    </Link>
                    <span className="text-yellow-500 ml-2">★★★★★</span>
                </div>
                <div className="text-base text-gray-700 my-2 text-justify line-clamp-3 text-purple-900">
                   {post.synopsis }  </div>
                <div className="text-sm text-purple-600">
                    {post.genre} / {post.category} by {post.author} • Complete • 60 chapters • <a href="#" className="hover:underline">Show Reviews (175)</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
