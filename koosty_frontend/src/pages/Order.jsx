import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function OrderNow() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    productType: "Select Product Type",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

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
      productType: "Select Product Type",
      message: "",
    });
  };

  return (
    <div className="bg-white min-h-screen px-6">
      <Navbar />
      <h2 className="font-custom-sans text-3xl sm:text-4xl text-center my-8 font-bold text-shadow-lg">
        Order Now!
      </h2>

      {formStatus && <p className="text-center text-green-500">{formStatus}</p>}

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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

        <div className="mb-4">
          <select
            id="productType"
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            className="w-full px-4 py-2 border-b border-[#014567] focus:outline-none"
            disabled
          >
            <option value="Select Product Type" disabled>
              Select Product Type
            </option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
          </select>
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