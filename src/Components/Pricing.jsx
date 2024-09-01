import React from 'react';

const Pricing = () => {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-4 py-12">
                {/* Pricing Header */}
                <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-500 mb-12">
                    Karate Classes Pricing
                </h1>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Beginner Plan */}
                    <div className="bg-gray-400 bg-opacity-15 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-orange-500"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Beginner</h2>
                        <p className="text-gray-300 mb-8 text-center">Perfect for young warriors starting their journey.</p>
                        <div className="text-4xl font-bold text-orange-500 mb-8 text-center">₹449/month</div>
                        <ul className="text-gray-400 mb-8">
                            <li className="mb-4 text-center">Basic Karate Lessons</li>
                            <li className="mb-4 text-center">Group Classes</li>
                            <li className="mb-4 text-center">Access to Beginner Events</li>
                        </ul>
                        <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300">
                            Choose Beginner
                        </button>
                    </div>

                    {/* Intermediate Plan */}
                    <div className="bg-gray-400 bg-opacity-15 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-orange-500"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Intermediate</h2>
                        <p className="text-gray-300 mb-8 text-center">For students who want to hone their skills.</p>
                        <div className="text-4xl font-bold text-orange-500 mb-8 text-center">₹999/month</div>
                        <ul className="text-gray-400 mb-8">
                            <li className="mb-4 text-center">Intermediate Karate Techniques</li>
                            <li className="mb-4 text-center">Personal Training Sessions</li>
                            <li className="mb-4 text-center">Access to All Group Classes</li>
                            <li className="mb-4 text-center">Participation in Competitions</li>
                        </ul>
                        <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300">
                            Choose Intermediate
                        </button>
                    </div>

                    {/* Advanced Plan */}
                    <div className="bg-gray-400 bg-opacity-15 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 rounded-full border-4 border-orange-500"></div>
                        </div>
                        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">Advanced</h2>
                        <p className="text-gray-300 mb-8 text-center">For dedicated students aiming for mastery.</p>
                        <div className="text-4xl font-bold text-orange-500 mb-8 text-center">₹1599/month</div>
                        <ul className="text-gray-400 mb-8">
                            <li className="mb-4 text-center">Advanced Karate Techniques</li>
                            <li className="mb-4 text-center">Unlimited Personal Training</li>
                            <li className="mb-4 text-center">Access to Exclusive Events</li>
                            <li className="mb-4 text-center">Leadership Training</li>
                            <li className="mb-4 text-center">Priority Access to Competitions</li>
                        </ul>
                        <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300">
                            Choose Advanced
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
