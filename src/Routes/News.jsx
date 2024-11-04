import React from 'react';
import Slider from 'react-slick';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'; // Icons for the buttons
import styles from '../styles/styles';
import { Leadership } from '../data/assets';

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-600 transition"
    >
      <BiArrowFromRight size={30} />
    </button>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 hover:bg-gray-600 transition"
    >
      <BiArrowFromLeft size={30} />
    </button>
  );
};

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000, // Slide changes every 3 seconds
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    initialSlide: 0,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
  };

  return (
    <div className="overflow-hidden w-full">
      <div className={`${styles.section} flex flex-col lg:flex-row justify-between lg:space-x-8 space-y-8 lg:space-y-0 mb-10 bg-slate-300 w-full`}>
        {/* Appreciation Section (Left) */}
        <div className="w-full lg:w-1/4 p-4 lg:p-6 mx-4 lg:mx-16 rounded-lg space-y-4">
          <h1 className="text-lg lg:text-xl font-bold mb-4 bg-[#000435] text-white items-center p-1 lg:p-2 rounded-md">Appreciation</h1>
          <p className="text-sm lg:text-base">Dear Parents,</p>
          <p className="text-sm lg:text-base">We would like to express our gratitude for your continued support...</p>
        </div>

        {/* Internal Memo Section (Center) */}
        <div className="w-full lg:w-1/4 p-4 lg:p-6 rounded-lg space-y-4">
          <h1 className="text-lg lg:text-xl font-bold mb-4 bg-[#000435] sm:p-1 text-white items-center p-1 lg:p-2 rounded-md">School Memo</h1>
          <p className="text-sm lg:text-base">No new updates yet!</p>
        </div>

        {/* Slider Section (Right) */}
        <div className="w-full lg:w-[30%] relative mx-4 lg:mx-16">
          <div className="slider-container px-4 py-6 shadow-md relative">
            <div className="flex items-center space-x-4 mb-4">
              <h1 className="text-sm lg:text-base font-bold">Ongata Leadership</h1>
              <hr className="w-full border-t-2 border-[#000435]" />
            </div>

            <Slider {...settings}>
              {Leadership &&
                Leadership.map((item, index) => (
                  <div key={index} className="p-2">
                    <div className="relative">
                      <img
                        src={item.Img}
                        alt={item.title}
                        className="w-50 h-auto object-cover rounded-md cursor-pointer"
                      />
                      <h3 className="text-center p-2 lg:p-4 mt-2 text-sm lg:text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
