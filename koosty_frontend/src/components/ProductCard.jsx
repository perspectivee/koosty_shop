import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ id, imageUrl, productName, price }) {


  console.log(id)
  return (
    <Link to={`/products/${id}`}>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      >
        {/* Product Image */}
        <img
          src={imageUrl || 'path/to/fallback-image.jpg'} // Fallback image path
          alt={productName || 'Product image'} // Descriptive alt text
          className="w-full h-48 object-cover"
        />

        {/* Product Details */}
        <div className="p-4">
          <h3 className="font-custom-sans text-lg font-bold text-gray-800">
            {productName}
          </h3>
          <p className="font-custom-sans text-gray-600 mt-2">${price}</p>
        </div>

        {/* Cart Icon */}
        <div className="p-4 flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 hover:text-blue-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-label="Add to cart" // Accessibility improvement
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}