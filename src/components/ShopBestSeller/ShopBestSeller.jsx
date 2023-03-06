import React from "react";
import { Link } from "react-router-dom";

const ShopBestSeller = () => {
  return (
    <div className="smd:h-[150px] md:h-[200px] flex-shrink bg-faded rounded-lg flex justify-between overflow-hidden w-full smd:flex-row sm:flex-col ">
      <img
        src="../../../assets/shop/bestsellers.jpg"
        className="sm:flex-shrink"
      />
      <div className=" flex-grow flex flex-col justify-center smd:items-end sm:items-center smd:pr-6 sm:py-8 smd:py-0 flex-shrink-0  ">
        <p className="mb-2 text-lg text-right">Best Sellers</p>
        <h2 className="text-2xl font-semibold mb-4 text-right">Most popular</h2>
        <Link to="/best-sellers">
          <button className="bg-primary px-4 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100  transform flex items-center gap-2">
            Shop all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShopBestSeller;
