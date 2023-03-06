import React from "react";
import { Link } from "react-router-dom";

const ShopNewArrival = () => {
  return (
    <div className="smd:h-[150px] md:h-[200px] bg-faded rounded-lg  flex justify-between overflow-hidden w-full smd:flex-row sm:flex-col">
      <div className="  flex flex-col justify-center smd:items-start sm:items-center smd:pl-6 sm:py-8 smd:py-0 flex-shrink-0">
        <p className="mb-2 text-lg">New arrival</p>
        <h2 className="text-2xl font-semibold mb-4">Now available</h2>
        <Link to="/new-arrivals">
          <button className="bg-primary px-4 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100  transform flex items-center gap-2">
            Shop all
          </button>
        </Link>
      </div>
      <img src="../../../assets/shop/new-arrival.jpg" />
    </div>
  );
};

export default ShopNewArrival;
