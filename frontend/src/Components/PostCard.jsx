// src/components/Card.js
import React from 'react';
// import coverImage from ''; // Update the path to your image

const Card = () => {
    return (
        <div className="flex items-center border p-4 max-w-2xl mx-auto shadow-lg">
            <img src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2Fpexels-lara-jameson-9363126.jpg?alt=media&token=f904ae14-19f5-479e-8e79-1c145de8ddab" alt="Book Cover" className="w-36 h-auto mr-4" />
            <div className="flex-1">
                <div className="text-xl font-bold flex items-center">
                    <span>Furry Humans</span>
                    <span className="text-yellow-500 ml-2">★★★★★</span>
                </div>
                <div className="text-lg text-gray-700 my-2">
                    Abigail wasn't prepared to hear that she and her parents were moving, she viewed it as a cover-up to move away from everything they've ever known and from the problems that have caused her family p...
                </div>
                <div className="text-sm text-gray-500">
                    Scifi / Mystery by Jariah Weaver • Complete • 60 chapters • <a href="#" className="hover:underline">Show Reviews (175)</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
