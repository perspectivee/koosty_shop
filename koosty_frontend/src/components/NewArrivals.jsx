import React from "react";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  // Dummy data for products
  const products = [
    {
      imageUrl: "https://picsum.photos/300/300?random=1",
      productName: "Denim Shirt",
      price: 29.99,
    },
    {
      imageUrl: "https://picsum.photos/300/300?random=2",
      productName: "Denim Trousers",
      price: 49.99,
    },
    {
      imageUrl: "https://picsum.photos/300/300?random=3",
      productName: "Denim",
      price: 19.99,
    },
    {
      imageUrl: "https://picsum.photos/300/300?random=4",
      productName: "Denim",
      price: 39.99,
    },
    {
      imageUrl: "https://picsum.photos/300/300?random=5",
      productName: "Denim",
      price: 59.99,
    },
    {
      imageUrl: "https://picsum.photos/300/300?random=6",
      productName: "Denim",
      price: 69.99,
    },
  ];

  return (
    <section className="p-6">
      {/* Heading */}
      <h2 className="font-custom-sans text-3xl sm:text-4xl text-center mb-8 font-bold text-shadow-lg">
        New Arrivals
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}