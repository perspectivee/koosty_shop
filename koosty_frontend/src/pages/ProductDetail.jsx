import React from "react";
import { useParams } from "react-router-dom";
import dummyProducts from "../../data/Products"; // Import dummyProducts from the correct path
import Navbar from "../components/Navbar"; // Import the Navbar component

export default function ProductDetail() {
  const { id } = useParams(); // Get the product ID from URL params
  const product = dummyProducts.find((p) => p.id === id); // Find the product

  if (!product) {
    return <div>Product not found!</div>; // Handle case where product is not found
  }

  const handleAddToCart = () => {
    console.log(`Product ${product.id} added to cart`); // Add to cart logic
  };

  return (
    <div>
      {/* Navbar at the Top */}
      <Navbar />

      {/* Product Details Section */}
      <div className="p-4 md:p-8">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Main Image */}
          <img
            src={product.imgUrl}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />

          {/* Additional Images in a Row */}
          <div className="flex gap-2 mt-4">
            {product.imgUrlArr.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${product.name} - ${index + 1}`}
                className="w-1/3 h-auto rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Product Details */}
          <div className="mt-6">
            <h1 className="font-custom-sans text-3xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 font-custom-sans text-2xl font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Desktop Layout (md and above) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-8">
          {/* Left Column: Additional Images */}
          <div className="flex flex-col gap-4">
            {product.imgUrlArr.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${product.name} - ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            ))}
          </div>

          {/* Middle Column: Main Image */}
          <div className="flex items-center">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-custom-sans text-4xl font-bold text-gray-800">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 font-custom-sans text-3xl font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}