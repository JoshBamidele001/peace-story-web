import React from 'react';

const ExpertTutors = () => {
  return (
    <div className="bg-purple-900 py-12">
      <div className="container mx-auto flex flex-col md:flex-row-reverse gap-5 items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="lg:text-5xl text-3xl  font-bold mb-4 text-wrap text-white">We also have highly skilled and experienced editors.</h2>
          <p className="text-gray-100 mb-6">We are confident that with our tutors' guidance, support, and commitment to excellence, students will thrive academically and reach their educational goals.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">Submit your writings</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/register-c737c.appspot.com/o/dphospen%2F5143312.jpg?alt=media&token=44fa39e0-d1ac-4641-997a-73e3c3f51008"  // Replace with an AI-generated image link
            alt="Expert Tutor"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <a href="https://www.freepik.com/free-vector/customer-support-flat-illustration_13107135.htm#fromView=keyword&page=1&position=5&uuid=881ca528-6930-47b6-a83d-e446f59835b7">Image by freepik</a>
        </div>
      </div>
    </div>
  );
};

export default ExpertTutors;
