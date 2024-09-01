import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                {/* Contact Us Header */}
                <h1 className="text-4xl md:text-6xl font-bold text-center text-orange-500 mb-12">Contact Us</h1>

                {/* Contact Info */}
                <div className="text-center text-lg md:text-xl text-gray-300 mb-12">
                    <p>Location: New Delhi, 110018</p>
                    <p className="mt-4">Phone: +91 6388561593</p>
                    <p className="mt-4">Email: contact@karatemaster.com</p>
                </div>

                {/* Contact Form */}
                <form className="max-w-lg mx-auto bg-gray-400 bg-opacity-15 p-8 rounded-lg mb-16">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 bg-gray-400 bg-opacity-15 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-gray-400 bg-opacity-15 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                        <textarea
                            id="message"
                            className="w-full px-4 py-2 bg-gray-400 bg-opacity-15 text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Enter your message"
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
