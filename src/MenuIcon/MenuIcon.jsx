import React from "react";
import { useDispatch } from "react-redux";
import { navAction } from "../store/nav-reducer/nav-action";
import { useSelector } from "react-redux";
const MenuIcon = () => {
  const isOpen = useSelector((state) => state.navOpen.navOpen);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    window.scrollTo(0, 0);
    dispatch(navAction(!isOpen));
  };
  return (
    <div>
      <svg
        onClick={toggleMenu}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2 transition stroke-light hover:stroke-primary"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </div>
  );
};

export default MenuIcon;
