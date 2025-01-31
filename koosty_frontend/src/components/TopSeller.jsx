import React from "react";
import { LuCrown } from "react-icons/lu"; // Import the LuCrown icon
import { Link } from "react-router-dom"; // Import Link for navigation
import dummyProducts from "../../data/Products"; // Import dummy products data

export default function TopSeller({ id = "1" }) { // Default id set to "1"
  // Find the product by id
  const product = dummyProducts.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found</div>; // Handle case where product is not found
  }

  return (
    <section
      className="p-8 flex flex-col md:flex-row items-center justify-between mb-8"
      style={{
        background:
          "linear-gradient(63.7deg, #D9D9D9 -6.41%, rgba(1, 69, 103, 0.47) 38.03%)",
      }}
    >
      {/* Left Side: Text and Icon */}
      <div className="text-white text-left">
        {/* Flex container to align text */}
        <div className="flex flex-col">
          {/* Top Text */}
          <p className="font-custom-sans text-2xl mb-2 tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
            {product.name}
          </p>

          {/* Crown Icon and "Top Seller" Text */}
          <div className="flex items-center mb-4">
            <LuCrown className="h-8 w-8 mr-2 transform -rotate-12 text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }} /> {/* Crown icon */}

            <p className="font-custom-sans text-4xl tracking-widest" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
              Top Seller <br /> of the Month
            </p>
          </div>

          {/* Shop Now Button */}
          <div className="flex justify-center mt-4">
            <Link
              to={`/products/${id}`} // Redirect to the specific product page by id
              className="font-custom-sans bg-white text-[#014567] border border-[#014567] px-8 py-3 tracking-widest hover:bg-[#014567] hover:text-white transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="mt-6 md:mt-0 md:ml-8">
        <img
          src={product.imgUrl} // Changed from imageUrl to imgUrl
          alt={product.name}
          className="w-48 h-48 md:w-64 md:h-64 object-cover"
        />
      </div>
    </section>
  );
}