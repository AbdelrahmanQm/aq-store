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
import MainNav from "../MainNav/MainNav";

const NavBar = () => {
  return (
    <div className="allNav">
      <TopBar />
      <MainNav />
      <BottomNav />
    </div>
  );
};

export default NavBar;
