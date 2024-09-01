import React from 'react';

const Aboutfull = () => {
    return (
        <div className="bg-black text-white">
            {/* Header Section */}
            <section className="">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-orange-500">About Us</h1>
                    <p className="mt-4 text-lg md:text-xl italic text-gray-300">
                        Our Journey, Our Mission
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className=" bg-black bg-opacity-15 h-[80vh] flex items-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 relative">
                        <img
                            src="src/assets/img/img2.png" // Replace with an actual image
                            alt="Our Story"
                            className="w-full ml-6 h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                        />

                    </div>
                    <div className="md:w-2/3 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
                        <div className="container mx-auto py-10">
                            <h2 className="text-3xl font-bold text-orange-500">Our Values</h2>
                            <p className="mt-4 text-gray-300">
                                At KarateMaster, we believe in discipline, respect, and continuous
                                self-improvement. Our values drive everything we do, from our
                                training programs to our community outreach efforts.
                            </p>
                        </div>
                        <h2 className="text-3xl font-bold text-orange-500">Our Story</h2>
                        <p className="mt-4 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            vehicula metus at urna cursus, id consequat est aliquet. Fusce ut
                            orci non dolor facilisis faucibus.
                        </p>
                        <p className="mt-4 text-gray-300">
                            Suspendisse potenti. Integer vitae sapien nulla. In luctus dui nec
                            magna consectetur, a lacinia erat ultrices. Proin euismod dui vel
                            quam vehicula, ac tincidunt mauris cursus.
                        </p>
                        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">
                            Read More
                        </button>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="bg-black h-[80vh] flex flex-col justify-center items-center text-center">
                <h2 className="text-4xl font-bold text-orange-500 mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <div className="relative  bg-gray-500 h-[50vh] bg-opacity-15 p-6 rounded-lg transform hover:scale-105 transition-transform duration-500">
                        <img
                            src="src/assets/img/img1.png" // Replace with actual image
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-orange-500"
                        />
                        <h3 className="mt-4 text-xl font-bold">John Doe</h3>
                        <p className="text-gray-400">CEO & Founder</p>
                        <p className="mt-2 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="relative bg-gray- bg-gray-500 bg-opacity-15 p-6 rounded-lg transform hover:scale-105 transition-transform duration-500">
                        <img
                            src="src/assets/img/img2.png" // Replace with actual image
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-orange-500"
                        />
                        <h3 className="mt-4 text-xl font-bold">Jane Smith</h3>
                        <p className="text-gray-400">Marketing Director</p>
                        <p className="mt-2 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="relative bg-gray- bg-gray-500 bg-opacity-15 p-6 rounded-lg transform hover:scale-105 transition-transform duration-500">
                        <img
                            src="src/assets/img/img3.png" // Replace with actual image
                            alt="Team Member"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-orange-500"
                        />
                        <h3 className="mt-4 text-xl font-bold">Michael Brown</h3>
                        <p className="text-gray-400">Freelancer</p>
                        <p className="mt-2 text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            {/* <section className="bg-gray- bg-gray-500 bg-opacity-15 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-orange-500">Our Values</h2>
                    <p className="mt-4 text-gray-300">
                        At KarateMaster, we believe in discipline, respect, and continuous
                        self-improvement. Our values drive everything we do, from our
                        training programs to our community outreach efforts.
                    </p>
                </div>
            </section> */}

            {/* Contact Us Section */}

        </div>
    );
};

export default Aboutfull;
