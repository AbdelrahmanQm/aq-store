import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChevDown } from "../../svgs/chevronDown.svg";
import { useDispatch } from "react-redux";
import { navAction } from "../../store/nav-reducer/nav-action";
import { useSelector } from "react-redux";
const NavLink = ({ item }) => {
  const isOpen = useSelector((state) => state.navOpen.navOpen);
  const dispatch = useDispatch();
  const [hoverOpen, setHoverOpen] = useState(false);
  const hoverIn = () => {
    setHoverOpen(true);
  };
  const hoverOut = () => {
    setHoverOpen(false);
  };
  const toggleMenu = () => {
    toggle();
    window.scrollTo(0, 0);
    dispatch(navAction(false));
  };
  /* ------------------- */
  const navLinkRef = useRef();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    if (!open) {
      setOpen(true);
      startClickOutHandler();
    }
    if (open) {
      setOpen(false);
      endClickOutHandler();
    }
  };
  const clickOutHandler = (e) => {
    if (!navLinkRef.current.contains(e.target)) setOpen(false);
  };
  const startClickOutHandler = (e) => {
    document.addEventListener("pointerdown", clickOutHandler);
  };

  const endClickOutHandler = () => {
    document.removeEventListener("pointerdown", clickOutHandler);
  };

  return (
    <div
      ref={navLinkRef}
      className="nav-link group relative outline-none"
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      onClick={hoverOut}
    >
      <p
        /* to={item.link} */
        onPointerDown={toggle}
        className={`hover:text-primary sm:h-12 flex items-center transition-all cursor-pointer pl-4 whitespace-nowrap lg:justify-center sm:justify-start lg:flex sm:flex sm:w-full sm:bg-faded lg:bg-white lg:text-base lg:font-medium
          sm:rounded-lg lg:rounded-none  lg:h-10
           ${item.hideSm ? "sm:hidden" : ""} 
          `}
      >
        {item.name}
        {item.links.length > 0 ? (
          <ChevDown
            className="sm:block w-6 h-6 lg:hidden group-hover:stroke-primary pl-1 
          group-hover:text-primary transition-all"
          />
        ) : (
          ""
        )}
      </p>

      {item.links.length > 0 ? (
        <div
          className={` lg:shadow-lg bg-white lg:rounded-xl overflow-hidden lg:max-h-0 transform lg:translate-y-10 lg:w-[200px] duration-500  lg:top-10 text-left lg:left-2 lg:hover:transition-none lg:transition-all sm:transition-all ${
            hoverOpen
              ? "lg:group-hover:translate-y-0 lg:group-hover:max-h-[1000px]"
              : ""
          }
        lg:absolute sm:duration-500 ease-in-out delay-0 outline-none
        ${open ? "sm:max-h-[2000px]" : "sm:max-h-[0px]"}
        `}
        >
          <ul className="flex flex-col gap-2 text-md  pt-4 lg:text-base ">
            {item.links.map((link) => (
              <li
                  key={`${link.contName}`}
                  className="hover:text-primary hover:bg-faded px-4 py-2 cursor-pointer"
                >
              <Link className="w-full h-full inline-block" onPointerDown={toggleMenu} to={link.contLink}>
                  {link.contName}
              </Link>
                </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavLink;
