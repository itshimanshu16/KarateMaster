import React from 'react';

const TestimonialPage = () => {
  return (
    <div className="bg-gray-400 h-[100vh] bg-opacity-15 py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-600">Why to Choose Us??</h2>
        <p className="text-gray-400 mt-2">Hear from some Student Testimonials.</p>
      </div>

      <div className="flex flex-wrap justify-center  gap-8">
        <div className="bg-gray p-6 rounded-lg shadow-xl shadow-gray-950 w-[300px] h-[500px] md:w-[350px] text-center">
          <img
            src="src/assets/img/img1.png"
            alt="John Doe"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-200">John Doe</h3>
          <p className="text-gray-500 mb-4">CEO at Company</p>
          <p className="text-gray-300">"This product changed my life! The best investment I've ever made."</p>
        </div>

        <div className="bg-gray p-6 rounded-lg shadow-xl shadow-gray-950 w-[300px] md:w-[350px] text-center">
          <img
            src="src/assets/img/img2.png"
            alt="Jane Smith"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-200">Jane Smith</h3>
          <p className="text-gray-500 mb-4">Marketing Director</p>
          <p className="text-gray-300">"Our sales increased by 300% after using this service. Absolutely phenomenal!"</p>
        </div>

        <div className="bg-gray p-6 rounded-lg  shadow-xl shadow-gray-950 w-[300px] md:w-[350px] text-center">
          <img
            src="src/assets/img/img3.png"
            alt="Michael Brown"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-200">Michael Brown</h3>
          <p className="text-gray-500 mb-4">Freelancer</p>
          <p className="text-gray-300">"As a freelancer, this tool has streamlined my workflow like nothing else."</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;
