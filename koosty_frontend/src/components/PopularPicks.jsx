import React from "react";
import PickButton from "../components/PickButton";

export default function PopularPicks() {
  return (
    <section className="p-6">
      {/* Heading */}
      <h2 className="font-custom-sans text-3xl sm:text-4xl text-center mb-8">
        Popular Picks
      </h2>

      {/* Buttons Container */}
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        {/* Button 1: Bags */}
        <PickButton
          imageUrl="https://picsum.photos/600/600?random=1"
          text="Bags"
        />

        {/* Button 2: Accessories */}
        <PickButton
          imageUrl="https://picsum.photos/600/600?random=2"
          text="Accessories"
          isMiddleButton
        />

        {/* Button 3: Shoes */}
        <PickButton
          imageUrl="https://picsum.photos/600/600?random=3"
          text="Shoes"
        />
      </div>
    </section>
  );
}