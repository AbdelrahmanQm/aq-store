import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../svgs/rightArrow.svg";

const InspireLeft = () => {
  return (
    <div className="flex-1 bg-faded pt-6 rounded-lg overflow-hidden self-stretch flex lg:flex-col sm:flex-row-reverse lg:justify-between sm:justify-center">
      <div className="text pl-6 sm:self-center lg:self-auto">
        <h2 className="text-2xl font-semibold">Classic look ?</h2>

        <Link
          to="/shop/Suits"
          className="text-press flex items-center  cursor-pointer"
        >
          Shop Suits
          <ArrowRight className="stroke-press w-6 h-6" />
        </Link>
      </div>
      <img
        className="sm:w-[35%] lg:w-auto"
        src="../../../assets/inspire.jpg"
        alt="inspire"
      />
    </div>
  );
};

export default InspireLeft;
