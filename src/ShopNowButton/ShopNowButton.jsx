import React from "react";

const ShopNowButton = () => {
  return (
    <button className="bg-primary  px-8 py-3 text-faded hover:text-dark rounded-lg drop-shadow-lg font-semibold text-lg hover:bg-lighter transition-all active:bg-lightest duration-300 active:drop-shadow-sm active:scale-100 hover:scale-110 transform flex items-center gap-2">
      Shop Now <span className="text-2xl font-thin">{">"}</span>
    </button>
  );
};

export default ShopNowButton;
