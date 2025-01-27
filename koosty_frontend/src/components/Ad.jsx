import React from "react";

export default function Ad({ backgroundImage, text1, text2 }) {
  return (
    <section className="md:p-4 md:border-2 md:border-dotted md:border-blue-500 md:my-8 md:mx-8">
      <div
        className="w-full h-96 bg-cover bg-center flex flex-col items-center justify-center p-6 md:flex-row md:justify-between md:items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Text 1 */}
        <p className="font-custom-serif text-white text-4xl text-shadow-lg tracking-widest uppercase mb-4 md:mb-0 md:text-left md:pl-4 md:mr-4">
          {text1}
        </p>

        {/* Text 2 */}
        <p className="font-custom-serif text-white text-4xl text-shadow-lg tracking-widest uppercase md:text-right md:pr-4">
          {text2}
        </p>
      </div>
    </section>
  );
}