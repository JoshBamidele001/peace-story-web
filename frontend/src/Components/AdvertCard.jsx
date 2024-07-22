import React from 'react';

const Card = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
      <div className="bg-blue-100 rounded-t-lg p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
            4.8
          </div>
          <span className="ml-2 font-semibold">Beautiful Offer</span>
        </div>
      </div>
      <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2FWrite%20your%20story.jpg?alt=media&token=662fdb9d-574b-4b68-86c0-d34c7160e28b" alt="Learn English" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Submit Your Work</div>
        <p className="text-gray-700 text-base">
          Dynamic and interdisciplinary field that combines the principles of computer science and engineering to design, develop
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full" src="https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/call%20to%20action%20and%20other%20images%2FWrite%20your%20story.jpg?alt=media&token=662fdb9d-574b-4b68-86c0-d34c7160e28b" alt="Alex Bin" />
          <span className="ml-2">Alex Bin</span>
        </div>
        <span className="text-blue-500 text-xl font-semibold">$200</span>
      </div>
    </div>
  );
};

export default Card;
