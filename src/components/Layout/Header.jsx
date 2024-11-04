import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Adjust overflow behavior
  };

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body from scrolling when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      {/* Upper div with contact info */}
      <div className="flex justify-between items-center bg-[#000435] py-4 px-4 sm:px-10 text-white">
        <div className="flex items-center space-x-2">
          <FaPhoneAlt size={15}/>
          <a href="tel:+254710268620" className="font-semibold text-[15px]">
            +254710268620
          </a>
        </div>
        <div className="flex space-x-2">
          <FaInstagram size={20} />
          <FaFacebookF size={20} />
        </div>
      </div>

      {/* Sticky Header */}
      <div
        className={`${
          isSticky ? "fixed top-0 left-0 w-full z-20 shadow-lg" : ""
        } bg-white py-2 px-4 sm:px-10 flex justify-between items-center`}
      >
        <Link to="/">
          <img
            src="https://ongatacrownschool.com/wp-content/uploads/2023/10/WhatsApp_Image_2023-10-09_at_15.08.52-removebg-preview-120x139.png"
            alt="logo"
            className="h-16 w-16 sm:h-20 sm:w-20"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="sm:hidden">
          {isMenuOpen ? (
            <FaTimes size={24} className="text-[#000435]" />
          ) : (
            <FaBars size={24} className="text-[#000435]" />
          )}
        </button>

        {/* Navbar for larger screens */}
        <div className="hidden sm:flex">
          <Navbar />
        </div>

        {/* "Join Us" link visible only on larger screens */}
        <div className="hidden sm:block">
          <Link
            to="/admForm"
            className="bg-blue-500 py-1 px-3 rounded text-white hover:bg-blue-600"
          >
            Join Us
          </Link>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden overflow-hidden"
          onClick={toggleMenu}
        >

          <div className={`${
          isSticky ? "fixed top-0 left-0 w-full z-20 shadow-lg" : ""
        } bg-white py-2 px-4 sm:px-10 flex justify-between items-center`}>
          <div
            className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-4 z-50 transition-transform transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Navbar closeMenu={toggleMenu} />
          </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
