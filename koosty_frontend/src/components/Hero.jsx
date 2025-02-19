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
      <div className="relative z-10 flex flex-col justify-around items-center h-full text-center text-white gap-6 ">
        {/* Logo Above Heading */}
        <img
          src="/assets/images/white.png" // Replace with your logo path
          alt="Logo"
          className="w-48 h-48 object-contain" // Added margin for spacing
        />

        {/* Heading */}
        <h2 className="font-custom-serif text-4xl md:text-5xl">
          <span className="block">Denim</span>
          <span className="block">
            <span className="line-through">Re</span>Defined
          </span>
        </h2>

        {/* Paragraphs (Centered) */}
        <div className="flex gap-4 text-left px-8">
          <p className="lg:inline font-custom-sans tracking-widest text-justify break-words hyphens-auto">
            Discover the best pro&shy;ducts and servi&shy;ces.
          </p>
          <p className="lg:inline font-custom-sans tracking-widest text-justify break-words hyphens-auto">
            Experience excellence li&shy;ke never before.
          </p>
        </div>
      </div>
    </section>
  );
}