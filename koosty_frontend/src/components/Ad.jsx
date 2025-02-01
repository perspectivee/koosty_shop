import React from "react";

export default function Ad({ backgroundImage, text1, text2 }) {
  return (
    <section className="p-4 border-2 border-dotted border-blue-500">
      <div
        className="w-full h-96 bg-cover bg-center flex flex-col items-center justify-center p-6 md:flex-row md:justify-between md:items-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#0145675E]" // Overlay color with transparency
        />

        {/* Text 1 */}
        <p
          className="font-custom-serif text-white text-5xl tracking-widest uppercase mb-4 md:mb-0 md:text-left text-center relative z-10"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          {text1}
        </p>

        {/* Text 2 */}
        <p
          className="font-custom-serif text-white text-5xl tracking-widest uppercase md:text-right text-center relative z-10"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
        >
          {text2}
        </p>
      </div>
    </section>
  );
}