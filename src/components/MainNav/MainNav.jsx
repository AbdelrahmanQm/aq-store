import React from "react";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import { useSelector } from "react-redux";
import NavSticky from "../NavSticky/NavSticky";

const MainNav = () => {
  const isOpen = useSelector((state) => state.navOpen.navOpen);
  return (
    <nav className="flex flex-col lg:min-h-[138px] sm:min-h-[55px]  mt-2  mx-auto w-full">
      <NavSticky />
      <div
        className={`down-nav  lg:max-h-[1000px] max-w-[1250px] mx-auto sm:max-h-0 pb-4 sm:pb-0 lg:overflow-visible sm:overflow-hidden transition-all duration-500 ease-in-out flex w-full  ${
          isOpen ? " sm:max-h-[2000px] sm:pb-4" : "lg:flex "
        }`}
      >
        <NavBarLinks />
      </div>
    </nav>
  );
};

export default MainNav;
