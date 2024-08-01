import React from 'react';

const Card = ({ rating, title, imageUrl, level, description, instructorImageUrl, instructorName, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 text-justify">
      <div className="bg-purple-700 rounded-t-lg p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-yellow-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
            {rating}
          </div>
          <span className="ml-2 font-semibold text-white">{title}</span>
        </div>
      </div>
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-purple-900">{level}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full" src={instructorImageUrl} alt={instructorName} />
          <span className="ml-2">{instructorName}</span>
        </div>
        <span className="text-blue-500 text-xl font-semibold">${price}</span>
      </div>
    </div>
  );
};

export default Card;
