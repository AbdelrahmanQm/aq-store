import React from "react";
import NavCartIcon from "../components/NavCartIcon/NavCartIcon";
import WishListIcon from "../components/WishListIcon/WishListIcon";
import MenuIcon from "../MenuIcon/MenuIcon";

const BottomNav = () => {
  return (
    <div className="w-full lg:hidden sm:flex justify-around items-center h-16 z-10 shadow-md bg-white fixed border-t bottom-0">
      <div className="flex-1 flex justify-center flex-col items-center">
        <WishListIcon />
        <p className="text-sm  ">Wish list</p>
      </div>
      <div className="border-r border-l flex-1 flex justify-center flex-col items-center">
        <MenuIcon />
        <p className="text-sm  ">Menu</p>
      </div>
      <div className="flex-1 flex justify-center">
        <NavCartIcon />
      </div>
    </div>
  );
};

export default BottomNav;
