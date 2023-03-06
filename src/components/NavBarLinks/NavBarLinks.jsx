import React from "react";
import NavLink from "../NavLink/NavLink";
import NavDepartments from "../NavDepartments/NavDepartments";
import { navLinks } from "../../assets";
import ResponsiveSearchBox from "../ResponsiveSearchBox/ResponsiveSearchBox";

const NavBarLinks = () => {
  return (
    <div className="flex z-10 mt-6 sm:text-center sm:text-lg lg:text-lg items-center sm:flex-col  lg:flex-row sm:gap-2 lg:gap-0 sm:w-full lg:w-auto px-6">
      <ResponsiveSearchBox />
      <NavDepartments />
      <div className="sm:w-full lg:w-full ">
        <ul className="flex sm:font-semibold lg:font-normal lg:gap-10 sm:gap-2 sm:flex-col lg:flex-row sm:w-full">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className=" transition-all cursor-pointer w-full"
            >
              <NavLink item={link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBarLinks;
