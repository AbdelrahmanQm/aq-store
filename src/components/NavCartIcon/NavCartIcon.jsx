import React from "react";

const NavCartIcon = () => {
  return (
    <div className="flex lg:gap-4 sm:gap-0 sm:flex-col lg:flex-row items-center justify-center cursor-pointer">
      <div className="relative flex justify-center items-center">
        <svg
          className="lg:bg-lightest sm:bg-white sm:stroke-light lg:stroke-[2] sm:stroke-[1.5] lg:stroke-primary lg:p-[5px] sm:p-0 sm:rounded-none lg:rounded-full icon icon-tabler icon-tabler-shopping-cart"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        <p className="bg-primary text-center text-white rounded-full lg:absolute lg:w-[23px] lg:h-[23px] sm:w-[20px] sm:h-[20px] lg:-top-2.5 lg:-right-2.5 sm:relative text-sm font-semibold flex items-center justify-center">
          4
        </p>
      </div>
      <div className="flex-col  lg:flex">
        <p className="text-xs lg:block sm:hidden">My Cart</p>
        <div className="flex items-center">
          <p className="text-sm sm:font-normal lg:font-bold">$265.00</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down sm:hidden lg:block"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#b5838d"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NavCartIcon;
