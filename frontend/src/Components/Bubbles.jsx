import React from 'react';

const BubbleBackground = ({children}) => {
  return (
    <div className="relative w-full h-screen md:h- overflow-hidden  bg-transparent">
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

export default BubbleBackground;
