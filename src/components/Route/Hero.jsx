import React from "react";
import { Utils } from "../../data/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "30rem",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Optional Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay
          }}
        ></div>

        {/* Content inside Hero Section */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <h1 className="text-white text-5xl font-bold">
            Welcome to Ongata Crown School
          </h1>
          <p className="text-white text-xl mt-4">
            Nurturing young minds for a brighter future
          </p>
          <div className="mt-8">
            <Link to="/admForm" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-800 mx-2">
              Enroll Now
            </Link>
            <button className="bg-white text-blue-600 py-2 px-6 rounded-lg hover:bg-blue-200 mx-2">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center sm:flex-wrap lg:gap-20 sm:gap-4 p-4 mx-4 sm:mx-44 bg-white shadow-md rounded-md cursor-pointer">
        {Utils &&
          Utils.map((i, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 shadow-sm transition-transform transform hover:scale-105 w-full sm:w-1/3 md:w-1/4 lg:w-auto"
            >
              <img
                src={i.Img}
                alt=""
                className="h-16 w-16 mb-2 sm:h-20 sm:w-20"
              />
              <h1 className="text-center font-semibold text-gray-800 text-lg sm:text-base">
                {i.title}
              </h1>
            </div>
          ))}
      </div>
    </>
  );
};

export default Hero;
