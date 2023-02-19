import React from "react";

const ResponsiveSearchBox = () => {
  return (
    <div className="w-full group sm:block lg:hidden">
      <div
        className="flex px-1 justify-center items-center  border rounded-lg w-full transition
       focus-within:border-lighter focus-within:shadow-sm"
      >
        <form className="w-full ">
          <input
            type="search"
            placeholder="Search for products"
            className="p-2 w-full  focus:outline-none  "
          />
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-search"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffb4a2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>
    </div>
  );
};

export default ResponsiveSearchBox;
