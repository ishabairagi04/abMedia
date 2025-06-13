import React from "react";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const { title, subtitle, image } = useSelector((state) => state.hero);

  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-end"
      style={{
       backgroundImage: "url('/road-trip-in-india.jpg')"

      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-12 lg:py-20 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            {title.split("Adventure")[0]}
            <br />
            <span className="text-yellow-400">Adventure</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">{subtitle}</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded-full transition">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Feature Row */}
      <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between px-6 py-4 text-sm sm:text-base text-center">
          <p className="font-semibold mb-2 sm:mb-0">Easy Booking</p>
          <p className="font-semibold mb-2 sm:mb-0">Curated Destinations</p>
          <p className="font-semibold">Trusted Support</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
