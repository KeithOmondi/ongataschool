import React from "react";
import { navItems } from "../../data/assets";
import { Link } from "react-router-dom";

const Navbar = ({ closeMenu }) => {
  return (
    <nav className="space-y-4 sm:space-y-0 sm:flex sm:items-center sm:space-x-6 font-bold text-[#000435]">
      {navItems &&
        navItems.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="hover:text-blue-600 block"
            onClick={closeMenu}
          >
            {item.link}
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
