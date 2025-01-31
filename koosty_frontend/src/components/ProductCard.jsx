import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, imageUrl, productName, price }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image with Overlay */}
      <Link to={`/products/${id}`}>
        <div className="relative">
          <img
            src={imageUrl || "path/to/fallback-image.jpg"} // Fallback image path
            alt={productName || "Product image"} // Descriptive alt text
            className="w-full h-48 object-cover"
          />
          {/* Overlay and Info Icon */}
          {isHovered && (
            <div className="absolute inset-0 bg-[#014567] opacity-60 flex items-end justify-center transition-opacity duration-300">
              <div className="p-2 bg-white rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-label="More info"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </Link>

      {/* Product Details and Cart Icon */}
      <div className="p-4 flex justify-between items-center">
        {/* Name and Price */}
        <div className="flex flex-col justify-center items-center flex-grow">
          <h3 className="font-custom-sans text-md text-gray-800 text-center">
            {productName}
          </h3>
          <p className="font-custom-sans text-gray-600 text-center mb-2">{price}</p>
        </div>

        {/* Cart Icon */}
        <Link to={`/order/${id}`}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700 hover:text-blue-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-label="Add to cart"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
}