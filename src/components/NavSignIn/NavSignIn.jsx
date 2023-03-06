import React from "react";
import { ReactComponent as User } from "../../svgs/user.svg";

const NavSignIn = () => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <User className="stroke-light w-10 h-10" />
      <div className=" flex-col  lg:flex">
        <p className="text-xs font-medium text-primary ">Hello,</p>
        <p className="text-sm font-medium ">Sign in</p>
      </div>
    </div>
  );
};

export default NavSignIn;
