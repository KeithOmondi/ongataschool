import React from "react";
import styles from "../../styles/styles";
import { Innovation } from "../../data/assets";

const Programs = () => {
  return (
    <>
      <div>
        <div className="px-4 py-8 relative bg-white pb-16">
          <div className="flex items-center space-x-4 text-center justify-center">
            <h1 className={`${styles.heading} text-[1.1rem]`}>Our Programs</h1>
          </div>

          <div className="flex flex-wrap justify-between mx-4 sm:mx-56 font-bold text-[#000435] text-[.9rem] gap-4">
            <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
              <h1>Play Group</h1>
            </div>
            <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
              <h1>Pre-primary (PP1 and PP2)</h1>
            </div>
            <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
              <h1>Primary (Grade 1 - 8)</h1>
            </div>
            <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
              <h1>Junior Secondary School (JSS)</h1>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="px-4 py-8 relative bg-gray-300 pb-16">
          <div className="flex items-center space-x-4 text-center justify-center">
            <h1 className={`${styles.heading} text-[1.1rem]`}>
              Research, Innovation and Incubation
            </h1>
          </div>

          <div className={`${styles.section}`}>
          <div className="mx-8 p-6  rounded-md ">
  <p className="text-gray-700 text-lg leading-relaxed">
    At Ongata Crown School, holistic education is a cornerstone of our academic
    vision. As a leading institution in nurturing both academic excellence and
    personal growth, we are dedicated to fostering a culture of continuous
    learning and innovation. Our focus areas include Education and Learning,
    Leadership Development, Character Building, and Competency-Based Education.
    We provide learners with opportunities to excel in various fields through
    modern facilities and personalized support, ensuring they thrive in
    academics, creativity, and leadership. Our mission is to empower learners
    to make meaningful contributions to society and become future leaders.
  </p>
</div>


           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 ">
  {Innovation &&
    Innovation.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center p-4  shadow-lg rounded-lg transition-transform transform hover:scale-105"
      >
        <img
          src={item.Icon}
          alt=""
          className="h-20 w-20 mb-4 object-contain"
        />
        <h1 className="text-lg font-semibold text-center text-gray-800">
          {item.Desc}
        </h1>
      </div>
    ))}
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
