import React from "react";
import BottomNav from "../../BottomNav/BottomNav";
import MenuIcon from "../../MenuIcon/MenuIcon";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import NavCartIcon from "../NavCartIcon/NavCartIcon";
import NavSearchBox from "../NavSearchBox/NavSearchBox";
import NavSignIn from "../NavSignIn/NavSignIn";
import WishListIcon from "../WishListIcon/WishListIcon";
import { useSelector } from "react-redux";
import TopBar from "../TopBar/TopBar";

const MainNav = () => {
  const isOpen = useSelector((state) => state.navOpen.navOpen);
  return (
    <nav className="flex flex-col px-4 mt-2 max-w-[1400px] m-auto w-full">
      <div className="up-nav flex justify-between items-center gap-4 lg:pb-0 sm:pb-2 lg:pt-4 sm:pt-2">
        <img
          src="/logo-dark.png"
          alt="AR Store Logo"
          width="142px"
          heigh="34px"
          className=""
        />
        <NavSearchBox />
        <div className="flex lg:justify-around sm:justify-end gap-1 items-center lg:w-[550px] sm:w-[180px] ">
          <div className="lg:block sm:hidden ">
            <WishListIcon />
          </div>
          <div className="sm:block lg:hidden mr-4">
            <MenuIcon />
          </div>
          <div>
            <NavSignIn />
          </div>
          <div className="lg:block sm:hidden">
            <NavCartIcon />
          </div>
        </div>
      </div>
      <div
        className={`down-nav lg:max-h-[1000px] sm:max-h-0 pb-4 lg:overflow-visible sm:overflow-hidden transition-all duration-500 ease-in-out flex w-full ${
          isOpen ? " sm:max-h-[1200px]" : "lg:flex"
        }`}
      >
        <NavBarLinks />
      </div>
    </nav>
  );
};

export default MainNav;
