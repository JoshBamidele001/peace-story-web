import React from 'react';

const ExpertTutors = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="lg:text-5xl text-3xl  font-bold mb-4 text-wrap">We have highly expert & experienced writers</h2>
          <p className="text-gray-600 mb-6">We are confident that with our tutors' guidance, support, and commitment to excellence, students will thrive academically and reach their educational goals.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">Submit your ideas</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2FDecrease_4.jpg?alt=media&token=b69988ee-4850-408c-86cc-c90c099a5335"  // Replace with an AI-generated image link
            alt="Expert Tutor"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertTutors;
