import React from "react";
import HeroFeatured from "../../HeroFeatured/HeroFeatured";
import HeroSlider from "../../HeroSlider/HeroSlider";

const HeroSection = () => {
  return (
    <section className="py-12  xl:px-32 lg:px-10 bg-faded w-full  ">
      <div className="wrapper flex lg:gap-6 xl:gap-20 items-center justify-center mm:flex-row md:flex-col-reverse sm:flex-col-reverse sm:px-6 max-w-[1400px] mx-auto">
        <HeroFeatured />
        <HeroSlider />
      </div>
    </section>
  );
};

export default HeroSection;
