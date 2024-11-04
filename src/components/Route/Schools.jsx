import React from "react";
import styles from "../../styles/styles";

const Schools = () => {
  return (
    <div className="mt-6">
      <div className="px-4 py-8 relative bg-slate-300 pb-16">
        <div
          className={`${styles.section} flex items-center space-x-4 text-center justify-center`}
        >
          <h1 className={`${styles.heading} text-[1.1rem]`}>Our Schools</h1>
        </div>

        <div className="flex flex-wrap justify-between mx-4 sm:mx-56 font-bold text-[#000435] gap-4">
          <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
            <h1>Ongata Crown</h1>
          </div>
          <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
            <h1>Ongata Crown</h1>
          </div>
          <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
            <h1>Ongata Crown</h1>
          </div>
          <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
            <h1>Ongata Crown</h1>
          </div>
          <div className="w-full sm:w-auto border border-gray-300 p-4 bg-white shadow-md rounded-md">
            <h1>Ongata Crown</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;
