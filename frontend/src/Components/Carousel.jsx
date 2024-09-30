import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider1_unlock_052109.jpg?alt=media&token=0d296923-30b8-4ba1-93d3-c2265e1fccaa',
  'https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider2_idea_052132.jpg?alt=media&token=25a1a5ca-db1a-4cf4-8cca-45bb522c4a5c',
  'https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider3_ghostwriter_052152.jpg?alt=media&token=a2cc0b51-ca03-420e-8b48-93863a0f26f8',
  'https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider4_editing_052210.jpg?alt=media&token=39bf95eb-52f0-4ce8-ad50-e87d2c9fd0b4',
  'https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider5_boost_052238.jpg?alt=media&token=d17693fa-c04d-4311-9fb2-7c64dfc9bb68',
  'https://firebasestorage.googleapis.com/v0/b/dphospens.appspot.com/o/Slider%2FDPHOSPen%20slider6_promote_052047.jpg?alt=media&token=9b5adfca-47a7-44df-a2ed-1aa12c65f62f',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex justify-center items-center bg-transparent">
      <div className="relative w-full max-w-screen-lg" style={{ height: '100%', maxHeight: '600px' }}>
        <div className="overflow-hidden rounded-lg shadow-lg h-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
          >
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} className="w-full flex-shrink-0 h-full object-cover" />
            ))}
          </div>
        </div>

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2"
          onClick={goToPrevious}
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2"
          onClick={goToNext}
        >
          &gt;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-white'}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
