import React from "react";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/images/hero-bg-hd.webp)" }}
    >
      {/* Shade Overlay */}
      <div
        className="absolute inset-0 bg-[#014567] opacity-37"
        style={{ opacity: 0.37 }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-white flex flex-col items-center gap-6">
        {/* Logo */}
        <img
          src="/assets/images/white.png" // Replace with your logo path
          alt="Logo"
          className="w-24 h-24 object-contain"
        />

        {/* Heading */}
        <h2 className="font-custom-serif text-4xl md:text-5xl">
          <span className="block">Denim</span>
          <span className="block">
            <span className="line-through">Re</span>Defined
          </span>
        </h2>

        {/* Paragraphs (Visible Only on Mobile) */}
        <div className="md:hidden flex flex-col gap-4">
          <p className="font-custom-sans tracking-widest">
            Discover the best products and services.
          </p>
          <p className="font-custom-sans tracking-widest">
            Experience excellence like never before.
          </p>
        </div>
      </div>
    </section>
  );
}