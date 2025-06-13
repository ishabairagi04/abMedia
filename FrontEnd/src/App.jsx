import React from "react";
import { useSelector } from "react-redux";
import HeroSection from "./Components/HeroSection";
import Testimonials from "./Components/Testimonials";
import TourPackages from "./Components/TourPackages";

const App = () => {

  return (
    <>
      <HeroSection/>
      <TourPackages/>
      <Testimonials/>
    </>
  );
};

export default App;
