import React from "react";

const TopBar = () => {
  return (
    <div className="w-full h-[40px] bg-dark text-lightest  ">
      <div className="max-w-[1250px] h-[40px] m-auto flex px-6  items-center cursor-default justify-between">
        <div className="flex gap-2 items-center">
          <svg
            className="stroke-lighter icon icon-tabler icon-tabler-headset"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="13" rx="2" width="4" height="6" />
            <rect x="16" y="13" rx="2" width="4" height="6" />
            <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
            <path d="M18 19a6 3 0 0 1 -6 3" />
          </svg>
          <p className="text-sm text-light sm:hidden lg:block">Support</p>
          <p className="text-sm font-medium text-lighter hover:text-lightest transition-all cursor-pointer">
            +2 01000 66 24 55
          </p>
        </div>
        <div className="sm:hidden lg:block">
          <p className="text-sm   text-lighter">
            Free shipping for order over $200
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <svg
              className="stroke-lighter icon icon-tabler icon-tabler-map-pin"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className="text-sm font-medium text-lighter hover:text-lightest transition-all cursor-pointer">
              Order tracking
            </p>
          </div>
          <div className="sm:hidden lg:block">
            <p className="text-sm font-medium text-lighter  cursor-default">
              Eng/$
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
