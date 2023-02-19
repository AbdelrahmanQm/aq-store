import React from "react";
import ShopNowButton from "../ShopNowButton/ShopNowButton";

const HeroSlide = ({ item }) => {
  return (
    <div className="textAndImage flex items-center flex-shrink-0 w-[100%] md:flex-row sm:flex-col-reverse ">
      <div className="text flex-1 flex flex-col sm:pt-6 sm:pb-6 md:pt-0 md:pb-0 sm:items-center md:items-start md:pl-4">
        <h2 className="font-thin sm:text-center md:text-left cursor-default md:text-4xl sm:text-3xl text-dark mb-4">
          {item.firstText}
        </h2>
        <h2 className="font-semibold sm:text-center md:text-left cursor-default tracking-wide sm:text-4xl md:text-6xl mb-2 text-primary">
          {item.secondText}
        </h2>
        <h2 className="font-thin mb-6 sm:text-center md:text-left cursor-default text-2xl text-dark">
          {item.thirdText}
        </h2>
        <ShopNowButton />
      </div>

      <img className=" flex-1" src={item.img} />
    </div>
  );
};

export default HeroSlide;
