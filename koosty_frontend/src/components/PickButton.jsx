import React from "react";

export default function PickButton({ imageUrl, text, isMiddleButton = false }) {
  return (
    <div className={`flex-grow ${isMiddleButton ? "relative border-2 border-blue-500" : ""} flex`}>
      <button
        className={`flex-grow h-64 sm:h-full w-full bg-cover bg-center flex items-center justify-center font-custom-sans text-3xl text-white ${isMiddleButton ? "p-4" : "p-2"}`}
        style={{ backgroundImage: `url(${imageUrl})`, overflow: 'hidden', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
      >
        <span className="text-center">{text}</span>
      </button>
    </div>
  );
}