import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import SearchBar from "../components/SearchBar"; // Import the SearchBar component
import ProductCard from "../components/ProductCard"; // Import the ProductCard component
import allProducts from '../../data/Products';
export default function Products() {
  // Dummy data for products


  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  // Handle search
  const handleSearch = (query) => {
    const filtered = allProducts.filter((product) =>
      product.productName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <div className="container mx-auto p-4 flex justify-center">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Products Heading */}
      <h2 className="font-custom-sans text-3xl sm:text-4xl text-center my-8 font-bold text-shadow-lg">
        Products
      </h2>

      {/* Product Grid */}
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              id={product.id}
              imageUrl={product.imgUrl}
              productName={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}