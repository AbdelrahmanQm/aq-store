import React from "react";
import { Link } from "react-router-dom";

const ShopNowButton = () => {
  return (
    <Link to="/shop">
      <button className="bg-primary  px-8 py-2 text-faded  rounded-lg drop-shadow-lg font-semibold text-lg hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100 hover:scale-[1.03] transform flex items-center gap-2">
        Shop Now <span className="text-2xl font-thin">{">"}</span>
      </button>
    </Link>
  );
};

export default ShopNowButton;
