import React from "react";

export default function TopSeller({ topText, imageUrl }) {
  return (
    <section
      className="p-8 rounded-lg flex flex-col md:flex-row items-center justify-between mb-8"
      style={{
        background:
          "linear-gradient(63.7deg, #D9D9D9 -6.41%, rgba(1, 69, 103, 0.47) 38.03%)",
      }}
    >
      {/* Left Side: Text and Icon */}
      <div className="text-white text-left">
        {/* Top Text */}
        <p className="font-custom-sans text-lg font-bold mb-2">{topText}</p>

        {/* Crown Icon and "Top Seller" Text */}
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mr-2 transform -rotate-12" // Leaning to the left
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
            {/* Crown Shape */}
            {/* <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4l3 6h6l-3 6 3 6H3l3-6-3-6h6l3-6z"
            /> */}
          </svg>

          <p className="font-custom-sans text-2xl">Top Seller <br /> of the Month</p>
        </div>

        {/* "of the Month" Text */}
      </div>

      {/* Right Side: Image */}
      <div className="mt-6 md:mt-0 md:ml-8">
        <img
          src={imageUrl}
          alt="Top Seller"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
        />
      </div>
    </section>
  );
}