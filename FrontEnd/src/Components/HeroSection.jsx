import React from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { title, subtitle, image } = useSelector((state) => state.hero);

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: "url('/road-trip-in-india.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-32 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            {title.split("Adventure")[0]}
            <br />
            <span className="text-yellow-400">Adventure</span>
          </h1>
          <p className="text-md sm:text-lg font-semibold mb-6">{subtitle}</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full text-lg sm:text-xl transition">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Feature Row */}
      <div className="absolute bottom-0 w-full sm:w-[60%] bg-black bg-opacity-50 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white text-center text-sm sm:text-base font-semibold">
          <p className="py-3">Easy Booking</p>
          <p className="py-3">Curated Destinations</p>
          <p className="py-3">Trusted Support</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
