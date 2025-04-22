import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/sections/Hero";
import Unique from "../components/sections/Unique";
import Juices from "../components/sections/Juices";
import FreshJuice from "../components/sections/freshJuice";
import Footer from "../components/sections/Footer";
import SubscribeSection from "../components/sections/SubscribeSection";

const LandingPages = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Unique />
      <Juices />
      <FreshJuice />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default LandingPages;
