import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", formData);
    setFormStatus("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white min-h-screen px-6">
      <Navbar />
      <h2 className="font-custom-sans text-3xl sm:text-4xl text-center my-8 text-shadow-lg">
        Contact Us!
      </h2>

      {formStatus && <p className="text-center text-green-500">{formStatus}</p>}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto"> {/* Increased max width for desktop */}
        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border-b border-[#014567] focus:outline-none"
          />
        </div>

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
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}