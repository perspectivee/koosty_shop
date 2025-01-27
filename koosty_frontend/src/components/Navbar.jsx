import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/images/black.png" // Replace with your logo path
            alt="Logo"
            className="w-12 h-12 object-contain"

          />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
          <a href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </a>
          <a href="/products" className="text-gray-800 hover:text-blue-500">
            Products
          </a>
          <a href="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}