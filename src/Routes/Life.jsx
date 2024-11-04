import React from 'react';
import { CrownLife, UpdateData } from '../data/assets';
import styles from '../styles/styles';

const Life = () => {
  return (
    <div className="mt-10">
      <div className="px-4 py-8 relative  pb-16">
        <div className={`${styles.section} flex items-center space-x-4`}>
          <h1 className={`${styles.heading} text-[1rem]`}>Life at Ongata Crown</h1>
          <hr className="w-full sm:w-[65rem] pb-7 border-t-[2px] border-[#000435]" />
        </div>

        {/* Grid layout for 4 columns on large screens, adjusts on smaller screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {CrownLife &&
            CrownLife.map((item, index) => (
              <div key={index} className="p-2  rounded-md shadow-lg hover:shadow-xl transition-shadow">
                <div>
                  <img
                    src={item.Img}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-md cursor-pointer"
                  />
                </div>
                <h3 className="text-center p-4 bg-[#ffffff] text-gray-800 font-semibold">{item.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Life;
