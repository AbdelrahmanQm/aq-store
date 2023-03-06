import React from "react";
import BottomNav from "../BottomNav/BottomNav";
import TopBar from "../TopBar/TopBar";
import MainNav from "../MainNav/MainNav";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="allNav">
      <TopBar />
      <MainNav />
      <BottomNav />
      <Outlet />
    </div>
  );
};

export default NavBar;
