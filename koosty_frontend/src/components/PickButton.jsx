import React from "react";

export default function PickButton({ imageUrl, text, isMiddleButton = false }) {
  return (
    <button
      className={`h-40 sm:h-80 w-full sm:w-[30%] bg-cover bg-center flex items-center justify-center font-custom-sans font-black text-white text-xl text-shadow-lg ${isMiddleButton ? "border-2 border-dotted border-blue-500" : ""
        }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {text}
    </button>
  );
}