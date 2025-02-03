import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function MustGift() {
  // Array of Lorem Picsum image URLs (900x900 resolution)
  const images = [
    "https://picsum.photos/900/900?random=1",
    "https://picsum.photos/900/900?random=2",
    "https://picsum.photos/900/900?random=3",
    "https://picsum.photos/900/900?random=4",
    "https://picsum.photos/900/900?random=5",
    "https://picsum.photos/900/900?random=6",
  ];

  return (
    <section className="py-6 min-h-screen flex flex-col ">
      {/* Heading */}
      <h2 className="font-custom-sans lg:text-5xl md:text-4xl text-3xl text-center mb-12">
        Must Gift
      </h2>

      {/* Carousel */}
      <div className="my-12"> {/* Add margin above and below the Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Show 2 slides by default
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 0, // No delay between slides
            disableOnInteraction: false, // Continue autoplay even when user interacts with the carousel
            pauseOnMouseEnter: false, // Do not pause autoplay when user hovers over the carousel
          }}
          speed={2000} // Slower transition speed (2000ms for smoother effect)
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 3 slides on sm screens and above
            },
            768: {
              slidesPerView: 3, // Show 4 slides on md screens and above
            },
            1024: {
              slidesPerView: 4, // Show 5 slides on lg screens and above
            },
            1440: {
              slidesPerView: 5,
            }
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Must Gift ${index + 1}`}
                className="w-full h-auto aspect-square object-cover cursor-pointer" // Fixed height and aspect ratio
                onClick={() => console.log(`Clicked image ${index + 1}`)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Shop Now Button */}
      <div className="flex justify-center mt-12"> {/* Add margin above the button */}
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