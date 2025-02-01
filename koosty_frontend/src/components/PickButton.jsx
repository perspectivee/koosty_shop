import React from "react";

export default function PickButton({ imageUrl, text, isMiddleButton = false }) {
  return (
    <div className={`flex-grow h-[32rem] ${isMiddleButton ? "relative border-2 border-dotted border-blue-500 p-4" : ""} flex`}>
      <button
        className={`flex-grow w-full bg-cover bg-center flex items-center justify-center font-custom-sans text-3xl text-white overflow-hidden`}
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