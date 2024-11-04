import React from "react";
import { BiSolidEditLocation } from "react-icons/bi";
import { FaPhoneAlt,  FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000435] text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Column 1 - About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            Ongata Crown School is dedicated to providing holistic education
            that nurtures personal growth and academic excellence. We prepare
            students to become future leaders through personalized support and
            modern facilities.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/admission" className="text-sm hover:underline">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li className="flex gap-1">
              <span>
                <FaPhoneAlt />{" "}
              </span>
              +254 700 123456
            </li>
            <li className="flex gap-1">
              <span>
                <FaEnvelope />{" "}
              </span>
              hello@ongatacrownschool.com
            </li>
            <li className="flex gap-1">
              <span>
                <BiSolidEditLocation />{" "}
              </span>
              Ongata Rongai, Nairobi, Kenya
            </li>
          </ul>
        </div>

        {/* Column 4 - Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">
              Facebook
            </a>
            <a href="#" className="text-sm hover:underline">
              Twitter
            </a>
            <a href="#" className="text-sm hover:underline">
              Instagram
            </a>
            <a href="#" className="text-sm hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
        <p>&copy; 2024 Ongata Crown School. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
