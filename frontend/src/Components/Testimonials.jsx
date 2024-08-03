import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Serena Williams",
    position: "American Professional Tennis Player",
    quote: "Tony Robbins helps me discover what I am really made of. With Tony's help, I've set new standards for myself, and I've taken my tennis game—and my life—to a whole new level!",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Maria Menounos",
    position: "Actress & TV Host",
    quote: "I feel on top of the world. I feel incredibly motivated. I feel empowered. I am the master of my own destiny.",
    image: "https://via.placeholder.com/100"
  },
  {
    name: "Marc Benioff",
    position: "Chairman and CEO of Salesforce",
    quote: "Tony's strategies and his tools have been at the core of our culture from the beginning. He has been one of the critical keys to Salesforce.com's leadership in cloud computing and its growth into an over $6 billion company.",
    image: "https://via.placeholder.com/100"
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                <p className="text-xl text-gray-800 font-semibold mb-4">{testimonial.quote}</p>
                <p className="text-gray-600">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
