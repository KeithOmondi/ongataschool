import React from 'react';
import { VirtualTourData } from '../data/assets'; // Import the data

const VirtualTour = () => {
  return (
    <div className="px-4 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-[#000435] text-center mb-6">Virtual Tour</h1>
      <p className="text-center mb-8">Take a look at our facilities and see what makes our school special.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {VirtualTourData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <video
              width="100%"
              height="200"
              controls
              className="rounded-md mb-4 bg-cover"
              src={item.video}
              title={item.title}
            />
            <h3 className="text-lg font-semibold text-[#000435]">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualTour;
