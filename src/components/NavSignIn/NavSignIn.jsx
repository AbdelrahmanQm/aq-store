import React from "react";

const NavSignIn = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <svg
        className="stroke-light icon icon-tabler icon-tabler-user"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#b5838d"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
      <div className=" flex-col  lg:flex">
        <p className="text-xs font-medium text-primary ">Hello,</p>
        <p className="text-sm font-medium ">Sign in</p>
      </div>
    </div>
  );
};

export default NavSignIn;
