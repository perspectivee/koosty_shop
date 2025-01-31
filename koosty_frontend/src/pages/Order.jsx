import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import dummyProducts from "../../data/Products";

export default function OrderNow() {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    productType: "", // Initially empty; will be set in useEffect
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    // Find the product by ID and set the productType
    const product = dummyProducts.find((product) => product.id === id);
    if (product) {
      setFormData((prev) => ({
        ...prev,
        productType: product.name, // Autofill the product type
      }));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted!", formData);
    setFormStatus("Your order has been submitted!");
    setFormData({
      email: "",
      phone: "",
      productType: "",
      message: "",
    });
  };

  return (
    <div className="bg-white min-h-screen px-6">
      <Navbar />
      <h2 className="font-custom-sans text-3xl sm:text-4xl text-center my-8 text-shadow-lg">
        Order Now!
      </h2>

      {formStatus && <p className="text-center text-green-500">{formStatus}</p>}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto"> {/* Increased max width for desktop */}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border-b border-[#014567] focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
            className="w-full px-4 py-2 border-b border-[#014567] focus:outline-none"
          />
        </div>

        <div className="px-4 mb-4 flex justify-between items-center border-b border-[#014567]">
          <label className="text-gray-700">Product Type</label>
          <span className="w-max px-4 py-2 bg-[#014567] text-white border-b border-[#014567]">
            {formData.productType || "Loading..."}
          </span>
        </div>

        <div className="mb-6">
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border-b border-[#014567] focus:outline-none"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="font-custom-sans text-[#014567] border border-[#014567] px-8 py-3 tracking-widest uppercase hover:bg-[#014567] hover:text-white transition-colors duration-300"
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
}