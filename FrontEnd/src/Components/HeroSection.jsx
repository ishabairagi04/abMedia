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
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-5 lg:py-40 text-white">
        <div className="max-w-xl ">
          <h1 className="text-6xl md:text-6xl font-extrabold mb-4 leading-tight">
            {title.split("Adventure")[0]}
            <br />
            <span className="">Adventure</span>
          </h1>
          <p className="text-lg font-bold md:text-xl mb-6">{subtitle}</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-15 py-4 mt-15 mb-[-20px] rounded-full border-none text-2xl transition">
            BOOK NOW
          </button>
        </div>
      </div>

 {/* Feature Row - Updated */}
<div className="absolute bottom-0 h-[12%] bg-black opacity-50 w-[50%] text-white">
  <div className=" mx-auto grid grid-cols-3 divide-x divide-white text-center text-lg sm:text-base font-bold">
    <p className="py-3">Easy Booking</p>
    <p className="py-3">Curated Destinations</p>
    <p className="py-3">Trusted Support</p>
  </div>
</div>


      
    </section>
  );
};

export default HeroSection;
