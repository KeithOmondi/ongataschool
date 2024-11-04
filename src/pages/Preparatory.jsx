import React from 'react';
import { PreparatoryData } from '../data/assets'; // Import data for curriculum and teachers
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const Preparatory = () => {
  return (
    <>
    <div>
        <Header />
    </div>

    <div className="px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#000435] text-center mb-6">Preparatory Class</h1>
      <p className="text-center mb-8">
        Welcome to the Preparatory Class at Ongata Crown School! Our preparatory program is designed to 
        provide young learners with a solid foundation in their early education, promoting holistic development.
      </p>

      {/* Curriculum Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">Curriculum Highlights</h2>
        <ul className="list-disc list-inside space-y-2">
          {PreparatoryData.curriculum.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>
      </section>

      {/* Teacher Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">Meet Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PreparatoryData.teachers.map((teacher, index) => (
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
          Our preparatory class includes a variety of engaging activities designed to promote creativity 
          and teamwork. These activities include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">Arts and Crafts</li>
          <li className="text-gray-700">Story Time</li>
          <li className="text-gray-700">Outdoor Play</li>
          <li className="text-gray-700">Music and Movement</li>
        </ul>
      </section>
    </div>
 


    <div>
        <Footer />
    </div>
    </>
  );
};

export default Preparatory;
