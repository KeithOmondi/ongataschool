import React from 'react';
import { KindergartenData } from '../data/assets'; // Import data for kindergarten curriculum and teachers
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';

const Kindergarten = () => {
  return (
   <>
   <div>
    <Header />
   </div>

   <div className="px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#000435] text-center mb-6">Kindergarten Class</h1>
      <p className="text-center mb-8">
        Our Kindergarten program at Ongata Crown School focuses on nurturing young minds through play-based learning. 
        We provide a safe and stimulating environment that encourages exploration and discovery.
      </p>

      {/* Curriculum Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">Curriculum Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          {KindergartenData.curriculum.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </section>

      {/* Teacher Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KindergartenData.teachers.map((teacher, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
              {/* Circular Image */}
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-16 h-16 object-cover rounded-full mr-4" // Adjust the size for your design
              />
              <div>
                <h3 className="text-lg font-semibold text-[#000435]">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities Section */}
      <section>
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">Activities and Events</h2>
        <p className="text-gray-700 mb-4">
          Our Kindergarten class engages in a variety of enriching activities that foster creativity and social skills. 
          These activities include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">Storytelling Sessions</li>
          <li className="text-gray-700">Outdoor Learning</li>
          <li className="text-gray-700">Creative Arts</li>
          <li className="text-gray-700">Music and Movement</li>
          <li className="text-gray-700">Science Explorations</li>
        </ul>
      </section>
    </div>

   <div>
    <Footer />
   </div>
   </>
  );
};

export default Kindergarten;
