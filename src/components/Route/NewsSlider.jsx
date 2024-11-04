import React from "react";
import Slider from "react-slick";
import { UpdateData } from "../../data/assets";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi"; // Icons for the buttons
import styles from "../../styles/styles";

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

const NewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000, // Slide changes every 3 seconds
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <PrevArrow />, // Custom previous arrow
    nextArrow: <NextArrow />, // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-10">
        <div className="slider-container px-4 py-8 relative bg-slate-300 pb-16">
      <div className={`${styles.section} flex items-center space-x-4`}>
        <h1 className={`${styles.heading} text-[1rem]`}>News & Updates</h1>
        <hr className="w-[65rem] pb-7 border-t-[2px] border-[#000435]" />
      </div>

      <Slider {...settings}>
        {UpdateData &&
          UpdateData.map((item, index) => (
            <div key={index} className="p-2">
              <div>
                <img
                  src={item.Image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md cursor-pointer"
                />
              </div>
              <h3 className="text-center p-10 rounded-md bg-[#ffffff] ">{item.title}</h3>
            </div>
          ))}
      </Slider>
    </div>
    </div>
  );
};

export default NewsSlider;
