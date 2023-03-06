import React from "react";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import { featuredCards } from "../../assets";
import "./HeroFeatured.css";

const HeroFeatured = () => {
  return (
    <div className="flex featured-box mm:flex-col lg:w-auto sm:w-full featuredContainer sm:flex-row lg:overflow-visible sm:overflow-x-scroll sm:scrollbar-hide gap-6 pb-4">
      {featuredCards.map((item) => (
        <FeaturedCard card={item} key={item.id} />
      ))}
    </div>
  );
};

export default HeroFeatured;
