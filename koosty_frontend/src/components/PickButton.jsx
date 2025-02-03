import React from "react";

export default function PickButton({ imageUrl, text, isMiddleButton = false }) {
  return (
    <div className={`flex-grow h-[32rem] ${isMiddleButton ? "relative border-3 border-dotted border-[#014567] p-4" : ""} flex`}>
      <button
        className={`flex-grow w-full bg-cover bg-center flex items-center justify-center font-custom-sans text-3xl md:text-4xl lg:text-5xl text-white overflow-hidden`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          aspectRatio: '1/1.2', // Ensures height is greater than width
        }}
      >
        <span className="text-center">{text}</span>
      </button>
    </div>
  );
}