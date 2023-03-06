import React from "react";
import { Link } from "react-router-dom";

const FeaturedCard = ({ card }) => {
  return (
    <div className="h-[150px] w-[275px] rounded-lg bg-red-100 flex items-center justify-center gap-4 hover:bg-white transition-all transform lg:hover:scale-105 sm:hover:scale-100 lg:flex-shrink-1 sm:flex-shrink-0 ">
      <img src={card.image} className="h-full" alt={card.firstText} />
      <div className="flex flex-col gap-0">
        <h2 className="text-dark cursor-default font-normal text-xl">
          {card.firstText}
        </h2>
        <h2 className="text-dark cursor-default font-bold text-xl">
          {card.secondText}
        </h2>
        <h2 className="text-dark cursor-default font-normal mb-2 text-xl">
          {card.thirdText}
        </h2>
        <Link to="/shop" className="cursor-pointer text-primary">
          Shop now <span>{">"}</span>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCard;
