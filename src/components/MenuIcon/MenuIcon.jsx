import React from "react";
import {ReactComponent as MenuIconSvg} from "../../svgs/menuIcon.svg"
import { useDispatch } from "react-redux";
import { navAction } from "../../store/nav-reducer/nav-action";
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
      <MenuIconSvg onClick={toggleMenu} className="transition w-8 h-8 stroke-light hover:stroke-primary" />
    </div>
  );
};

export default MenuIcon;
