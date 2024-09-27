import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className="bg-purple-800 py-12 mx-1 md:mx-0 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Why you should choose us?</h2>
        <p className="text-gray-100 mb-12 ">We are an agency that provides to step up their academic potential to the next level</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md md:mx-0 mx-1">
            <div className="text-pink-500 text-2xl mb-2">01</div>
            <h3 className="text-xl font-bold mb-2">Best Editors</h3>
            <p className="text-gray-700">At our institution, we take pride in offering a roster of top-notch tutors who are recognized for their excellence in teaching.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md md:mx-0 mx-1">
            <div className="text-pink-500 text-2xl mb-2">02</div>
            <h3 className="text-xl font-bold mb-2">Best Writers</h3>
            <p className="text-gray-700">We take pride in offering the best curriculum, carefully crafted to empower students.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md md:mx-0 mx-1">
            <div className="text-pink-500 text-2xl mb-2">03</div>
            <h3 className="text-xl font-bold mb-2"> Global Feasibility</h3>
            <p className="text-gray-700">We have acquired the necessary knowledge, skills, and competencies in a specific field or area of study.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
