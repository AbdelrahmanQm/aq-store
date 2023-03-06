import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Trending from "../../components/Trending/Trending";
import AdSection from "../../components/AdSection/AdSection";
import InspireSection from "../../components/InspireSection/InspireSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Trending />
      <AdSection />
      <InspireSection />
      <Footer />
    </div>
  );
};

export default Home;
