import React from "react";
import { Link } from "react-router-dom";

const PutYourAd = () => {
  return (
    <div className="md:h-[200px] sm:h-[150px] bg-faded flex flex-col justify-center items-center rounded-lg md:w-auto sm:w-full md:flex-1 sm:flex-auto">
      <h2 className="text-2xl font-semibold mb-2 px-4">Your Ad Here</h2>
      <p className="mb-2">Hurry up to reserve your spot</p>
      <Link to="/about">
        <button className="bg-primary px-4 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100  transform flex items-center gap-2">
          Contact us
        </button>
      </Link>
    </div>
  );
};

export default PutYourAd;
