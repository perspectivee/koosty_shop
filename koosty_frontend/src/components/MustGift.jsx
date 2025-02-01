import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function MustGift() {
  // Array of Lorem Picsum image URLs (600x600 resolution)
  const images = [
    "https://picsum.photos/600/600?random=1",
    "https://picsum.photos/600/600?random=2",
    "https://picsum.photos/600/600?random=3",
    "https://picsum.photos/600/600?random=4",
    "https://picsum.photos/600/600?random=5",
    "https://picsum.photos/600/600?random=6",
  ];

  return (
    <section className="py-6">
      {/* Heading */}
      <h2 className="font-custom-sans text-4xl sm:text-4xl text-center mb-8">
        Must Gift
      </h2>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2} // Show 2 slides by default
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 0, // No delay between slides
          disableOnInteraction: false, // Continue autoplay even when user interacts with the carousel
          pauseOnMouseEnter: false, // Do not pause autoplay when user hovers over the carousel
        }}
        speed={2000} // Slower transition speed (2000ms for smoother effect)
        breakpoints={{
          640: {
            slidesPerView: 3, // Show 3 slides on sm screens and above
          },
          768: {
            slidesPerView: 4, // Show 4 slides on md screens and above
          },
          1024: {
            slidesPerView: 5, // Show 5 slides on lg screens and above
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Must Gift ${index + 1}`}
              className="w-full h-auto aspect-square object-cover cursor-pointer"
              onClick={() => console.log(`Clicked image ${index + 1}`)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/products" // Link to the Products page
          className="font-custom-sans text-[#014567] border border-[#014567] px-8 py-3 tracking-widest hover:bg-[#014567] hover:text-white transition-colors duration-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}