import React from "react";
import { ReactComponent as User } from "../../svgs/user.svg";

const NavSignIn = () => {
  return (
    <div className="flex justify-start items-center cursor-pointer">
      <User className="stroke-light w-8 h-8" />
      <div className=" flex-col  lg:flex">
        <p className="text-xs font-medium text-primary ">Hello,</p>
        <p className="text-xs font-medium whitespace-nowrap">Sign in</p>
      </div>
    </div>
  );
};

export default NavSignIn;
