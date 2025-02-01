import React from "react";
import PickButton from "../components/PickButton";

export default function PopularPicks() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen overflow-hidden py-4">
      {/* Heading */}
      <h2 className="font-custom-sans text-4xl sm:text-4xl text-center mb-8">
        Popular Picks
      </h2>

      {/* Buttons Container */}
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-center w-full">
        {/* Button 1: Bags */}
        <div className="flex-grow sm:flex-grow-0 sm:w-1/3">
          <PickButton
            imageUrl="https://picsum.photos/600/600?random=1"
            text="Bags"
          />
        </div>

        {/* Button 2: Accessories */}
        <div className="flex-grow sm:flex-grow-0 sm:w-1/3">
          <PickButton
            imageUrl="https://picsum.photos/600/600?random=2"
            text="Accessories"
            isMiddleButton
          />
        </div>

        {/* Button 3: Shoes */}
        <div className="flex-grow sm:flex-grow-0 sm:w-1/3">
          <PickButton
            imageUrl="https://picsum.photos/600/600?random=3"
            text="Shoes"
          />
        </div>
      </div>
    </section>
  );
}