import React from "react";
import { useParams, Link } from "react-router-dom";
import dummyProducts from "../../data/Products"; // Import dummyProducts from the correct path
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from '../components/Footer';

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
    <main className="h-screen">
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
            className="w-full h-64 object-cover shadow-md" // Removed rounded-lg
          />

          {/* Additional Images in a Row */}
          <div className="flex gap-2 mt-4 justify-center"> {/* Centered horizontally */}
            {product.imgUrlArr.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${product.name} - ${index + 1}`}
                className="w-20 h-20 object-cover shadow-md" // Removed rounded-lg
              />
            ))}
          </div>

          {/* Product Details */}
          <div className="mt-6">
            <h1 className="font-custom-sans text-3xl text-gray-800">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 font-custom-sans text-2xl text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            <Link to={`/order/${id}`} className="mt-6 w-full">
              <button
                onClick={handleAddToCart}
                className="w-full h-12 flex items-center justify-center"
                style={{
                  background: "linear-gradient(0deg, rgba(1, 69, 103, 0.47) -15.07%, rgba(2, 137, 205, 0.2585) 155.36%)",
                  border: 'none'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white" // Changed color to white
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
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop Layout (md and above) */}
        <div className="hidden md:grid md:grid-cols-[1fr_3fr_2fr] md:gap-8 md:max-h-screen">
          {/* Left Column: Additional Images */}
          <div className="flex flex-col gap-4 items-center"> {/* Centered horizontally */}
            {product.imgUrlArr.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`${product.name} - ${index + 1}`}
                className="w-20 h-20 object-cover shadow-md" // Removed rounded-lg
              />
            ))}
          </div>

          {/* Middle Column: Main Image */}
          <div className="flex items-center">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-96 object-cover shadow-lg transform transition-transform duration-300 hover:scale-105" // Removed rounded-lg
            />
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-custom-sans text-4xl text-gray-800">
              {product.name}
            </h1>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="mt-4 font-custom-sans text-3xl text-gray-800">
              ${product.price.toFixed(2)}
            </p>
            <Link to={`/order/${id}`} className="mt-6 w-full">
              <button
                onClick={handleAddToCart}
                className="w-full h-12 flex items-center justify-center"
                style={{
                  background: "linear-gradient(0deg, rgba(1, 69, 103, 0.47) -15.07%, rgba(2, 137, 205, 0.2585) 155.36%)",
                  border: 'none'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white" // Changed color to white
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
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}