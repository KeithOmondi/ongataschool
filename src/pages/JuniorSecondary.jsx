import React from "react";
import { JuniorSecondaryActivities, Teachers } from "../data/assets"; // Assuming you have data for activities and teachers.
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const JuniorSecondary = () => {
  return (
    <>
    <div>
        <Header />
    </div>

    <div className="px-4 py-8 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#000435]">
          Junior Secondary School
        </h1>
        <p className="mt-2 text-gray-600">
          Welcome to our Junior Secondary School. Here, we focus on holistic
          education and development through various activities.
        </p>
      </div>

      {/* Activities Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">
          Activities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JuniorSecondaryActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-[#000435]">
                {activity.title}
              </h3>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Teachers Section */}
      <div>
        <h2 className="text-2xl font-semibold text-[#000435] mb-4">
          Our Teachers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Teachers.map((teacher, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-[#000435]">
                {teacher.name}
              </h3>
              <p className="text-gray-600">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    

    <div>
        <Footer />
    </div>
    </>
  );
};

export default JuniorSecondary;
