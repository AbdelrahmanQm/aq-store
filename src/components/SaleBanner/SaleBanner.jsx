import React from "react";
import { Link } from "react-router-dom";

const SaleBanner = () => {
  return (
    <div className="h-[200px] bg-faded rounded-lg flex-[2] flex justify-between overflow-hidden w-full smd:flex-row sm:flex-col">
      <div className="  flex flex-col justify-center smd:items-start sm:items-center smd:pl-6 sm:py-8 smd:py-0">
        <p className="mb-2 text-lg">Now Available</p>
        <h2 className="text-2xl font-semibold mb-4">New Shoes Collection</h2>
        <Link to="/shop/Shoes">
          <button className="bg-primary px-4 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100  transform flex items-center gap-2">
            Take a look
          </button>
        </Link>
      </div>
      <img src="../../../assets/ad-banner.jpg" alt="Shoes Picture" />
    </div>
  );
};

export default SaleBanner;
