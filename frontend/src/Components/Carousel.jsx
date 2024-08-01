import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/more%20on%20dphospen%2FADVERT%20001.png?alt=media&token=5aecc6c0-26ee-4cd2-893b-b93bf480600a',
  'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/more%20on%20dphospen%2Fadvert%20002.png?alt=media&token=9042bc24-2fb3-42b4-a20d-3a5e8da1dab2',
  'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/more%20on%20dphospen%2Fadvert3.png?alt=media&token=52cec550-9457-42c7-a615-dac037267e2f',
  'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/more%20on%20dphospen%2FADVERT4.png?alt=media&token=cd0299d1-b313-433a-be6d-0d77ee36fb34',
  'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/more%20on%20dphospen%2FBrown%20Eco-Friendly%20Bambook%20Toothbrush%20and%20Pill%20Container%20Brand%20Design%20and%20Strategy%20Online%20Course%20Facebook%20App%20Advert.png?alt=media&token=bdd8c03a-59fb-4732-b099-43f17fe35252',
  'https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/more%20on%20dphospen%2FADVERT%206.png?alt=media&token=950f87b7-80a6-4928-afc2-842efe5f341b',
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
