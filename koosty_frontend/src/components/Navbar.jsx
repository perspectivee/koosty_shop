import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img
              src="/assets/images/black.png" // Replace with your logo path
              alt="Logo"
              className="w-16 h-16 object-contain" // Logo size
            />
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <div
          className={`${isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 flex-grow justify-center`} // Added flex-grow and justify-center
        >
          <Link to="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link to="/products" className="text-gray-800 hover:text-blue-500">
            Products
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}