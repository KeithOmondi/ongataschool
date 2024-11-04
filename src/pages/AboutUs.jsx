import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const AboutUs = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update background opacity based on scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamically adjust the background based on the scroll position
  const gradientOpacity = Math.min(scrollPosition / 400, 1); // Adjust 400 for faster/slower transition
  return (
    <>
    <div>
        <Header />
    </div>

    <div className="bg-gray-50 py-16 px-4">
      {/* Hero Section */}
      <section
      className="relative flex flex-col items-center text-center space-y-6 mb-16 py-16 transition-all duration-300"
      style={{
        background: `linear-gradient(to right, rgba(0, 200, 255, ${1 - gradientOpacity}), rgba(136, 96, 255, ${1 - gradientOpacity}), rgba(255, 94, 255, ${gradientOpacity}), rgba(0, 255, 242, ${gradientOpacity}))`,
      }}
    >
      <h1 className="text-4xl font-bold text-[#000435]">About Us</h1>
      <p className="text-lg text-gray-600 max-w-3xl">
        We are Ongata Crown School, committed to nurturing future leaders through holistic education, leadership development, and competency-based learning.
      </p>
      <button className="bg-[#000435] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#1c2b5a] transition-all">
        Learn More
      </button>
    </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto max-w-6xl mb-16">
        {/* Mission */}
        <div className="bg-white shadow-md rounded-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-[#000435] mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to empower learners with the skills and knowledge needed to excel academically and lead with character. We aim to create a nurturing environment that fosters continuous learning, innovation, and personal growth.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md rounded-md p-8 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-[#000435] mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be a leading institution recognized for academic excellence and leadership development, producing well-rounded individuals who make meaningful contributions to society.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#000435] text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
          <p className="text-lg mb-8">
            We believe in integrity, excellence, innovation, and service to others. These values are at the heart of everything we do at Ongata Crown School.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-sm">
                We uphold honesty and strong moral principles in all our endeavors.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-sm">
                We strive for the highest standards in academic and personal achievement.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-sm">
                We embrace new ideas and technology to enhance learning experiences.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white text-black p-6 rounded-md shadow-md hover:bg-gray-100 transition-all">
              <h3 className="text-xl font-semibold mb-2">Service</h3>
              <p className="text-sm">
                We foster a culture of giving back to society and helping those in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#000435]">Meet Our Team</h2>
          <p className="text-gray-600">Our dedicated staff members are committed to providing the best education experience.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-[#000435]">John Doe</h3>
            <p className="text-sm text-gray-600">Head of Academics</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-[#000435]">Jane Smith</h3>
            <p className="text-sm text-gray-600">Head of Innovation</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-[#000435]">Michael Brown</h3>
            <p className="text-sm text-gray-600">Leadership Coach</p>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white shadow-md rounded-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <img src="https://images.pexels.com/photos/7792834/pexels-photo-7792834.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Team Member" className="w-24 h-24 mx-auto rounded-full mb-4" />
            <h3 className="text-lg font-semibold text-[#000435]">Emily White</h3>
            <p className="text-sm text-gray-600">Character Building Specialist</p>
          </div>
        </div>
      </section>
    </div>

    <div>
        <Footer />
    </div>
    </>
  );
};

export default AboutUs;
