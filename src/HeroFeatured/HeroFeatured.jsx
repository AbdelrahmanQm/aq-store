import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { featuredCards } from "../assets";
import { useState } from "react";

const HeroFeatured = () => {
  return (
    <div className="flex mm:flex-col lg:w-auto sm:w-full featuredContainer sm:flex-row lg:overflow-visible sm:overflow-x-scroll sm:scrollbar-hide gap-6 ">
      {featuredCards.map((item) => (
        <FeaturedCard card={item} key={item.id} />
      ))}
    </div>
  );
};

export default HeroFeatured;
