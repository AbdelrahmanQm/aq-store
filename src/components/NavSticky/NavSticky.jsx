import React from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import NavCartIcon from "../NavCartIcon/NavCartIcon";
import NavSearchBox from "../NavSearchBox/NavSearchBox";
import NavSignIn from "../NavSignIn/NavSignIn";
import AccountSign from "../AccountSign/AccountSign";
import WishListIcon from "../WishListIcon/WishListIcon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChevUp } from "../../svgs/chevronUp.svg";

const NavSticky = () => {
  const [signInOpen, setSignInOpen] = useState(false);
  const openSignIn = () => setSignInOpen(true);
  const closeSignIn = () => setSignInOpen(false);
  const [fixed, setFixed] = useState(false);
  const [toTop, setToTop] = useState(false);
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const showToTop = () => {
    window.scrollY >= 1000 ? setToTop(true) : setToTop(false);
  };
  const controlY = () => {
    window.scrollY >= 400 ? setFixed(true) : setFixed(false);
  };
  window.addEventListener("scroll", controlY);
  window.addEventListener("scroll", showToTop);
  return (
    <div
      className={`w-full bg-white z-[1000] h-auto top-0 left-0 right-0 transition-all duration-500 ${
        fixed ? "sticky-nav" : ""
      } `}
    >
      <div className="max-w-[1250px] mx-auto bg-white  z-[1000] w-full  px-6 top-0 left-0 right-0  ">
        <div className="up-nav flex justify-between items-center gap-4 lg:pb-0 sm:pb-2 lg:pt-4 sm:pt-2 ">
          <Link className="" to="/">
            <img
              src="/logo-dark.png"
              alt="AR Store Logo"
              className="h-full w-full lg:max-h-[55px] sm:max-h-[30px]"
            />
          </Link>
          <NavSearchBox />
          <div className="flex lg:justify-between sm:justify-end gap-1 items-center lg:w-[550px] sm:w-[180px] ">
            <div className="lg:block sm:hidden pl-4">
              <WishListIcon />
            </div>
            <div className="sm:block lg:hidden mr-4">
              <MenuIcon />
            </div>
            <div onClick={openSignIn}>
              <NavSignIn />
            </div>
            <div className="lg:block sm:hidden">
              <NavCartIcon />
            </div>
          </div>
        </div>

        <ChevUp
          onClick={scrollToTop}
          className={` ${
            toTop ? "right-6" : "-right-16"
          } fixed lg:bottom-6 sm:bottom-20  h-12 w-12 bg-primaryfaded rounded-full p-2 cursor-pointer stroke-faded lg:hover:stroke-primary lg:hover:bg-faded transition-all duration-500 
        `}
        />
      </div>
      {signInOpen && (
        <AccountSign close={setSignInOpen} isItOpen={signInOpen} />
      )}
    </div>
  );
};

export default NavSticky;
