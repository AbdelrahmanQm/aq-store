import React from "react";
import { navDepartments } from "../../assets";
import { useState, useRef } from "react";
import { ReactComponent as Layout } from "../../svgs/layout.svg";
import { ReactComponent as ChevDown } from "../../svgs/chevronDown.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { navAction } from "../../store/nav-reducer/nav-action";
import { useSelector } from "react-redux";
const NavDepartments = () => {
  const isOpen = useSelector((state) => state.navOpen.navOpen);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    hoverClose();
    toggle();
    window.scrollTo(0, 0);

    dispatch(navAction(false));
  };
  /* ------------------------- */
  const navDepRef = useRef();
  const [hover, setHover] = useState(false);
  const hoverOpen = () => {
    setHover(true);
  };
  const hoverClose = () => {
    setHover(false);
  };
  const [open, setOpen] = useState(false);
  const toggle = () => {
    const isDefined = navDepRef.current;
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
    if (!navDepRef.current.contains(e.target)) setOpen(false);
  };
  const startClickOutHandler = (e) => {
    document.addEventListener("pointerdown", clickOutHandler);
  };

  const endClickOutHandler = () => {
    document.removeEventListener("pointerdown", clickOutHandler);
  };

  return (
    <div
      ref={navDepRef}
      onMouseEnter={hoverOpen}
      onMouseLeave={hoverClose}
      className="group relative transition justify-center  sm:w-full sm:bg-faded lg:bg-white lg:w-auto sm:rounded-lg lg:rounded-none  items-center  "
    >
      <div
        onClick={toggle}
        className="flex items-center lg:pl-0 sm:pl-4 sm:h-12 lg:h-10 lg:border-r sm:pr-0 sm:mr-0  lg:pr-3 lg:mr-4 cursor-pointer transition-all group  "
      >
        <Layout
          className="mr-1 transition-all group-hover:stroke-primary
          group-hover:text-primary h-5 w-5"
        />

        <p
          className="group-hover:stroke-primary
       group-hover:text-primary transition-all sm:font-semibold lg:text-base lg:font-medium "
        >
          Departments
        </p>
        <ChevDown className="group-hover:stroke-primary group-hover:text-primary transition-all w-5 h-5" />
      </div>
      <div
        className={`transform lg:translate-y-10 lg:group-hover:translate-y-0 ease-out lg:transition-none  lg:duration-300 group-hover:transition-all
        lg:absolute sm:relative lg:w-[700px] lg:bg-white sm:bg-inherit lg:shadow-lg sm:shadow-none rounded-xl overflow-hidden sm:transition-all
        sm:w-full sm:duration-1000

        ${hover ? "lg:group-hover:max-h-[2000px]" : "lg:max-h-0"}
        ${open ? "sm:max-h-[2000px]" : "sm:max-h-0"}
        `}
      >
        <ul
          className="md:grid-cols-3 lg:gap-4 sm:w-full grid  lg:p-5 sm:px-4 
        sm:grid-cols-2  sm:max-w-full lg:max-w-[1000px] sm:py-4 sm:gap-x-2 sm:gap-y-4 
        "
        >
          {navDepartments &&
            navDepartments.map((item) => (
              <li key={item.title} className="flex flex-col text-left gap-2 ">
                <img
                  src={item.image}
                  alt="Shoes"
                  className="sm:rounded-md  lg:rounded-lg "
                />
                <div className="">
                  <h2 className="font-medium text-lg mt-4 cursor-default ">
                    {item.title}
                  </h2>
                  <ul>
                    {item.content.map((link) => (
                      <li
                        key={link.name}
                        className="cursor-pointer hover:text-primary text-sm"
                      >
                        <Link onClick={toggleMenu} to={`/shop/${link.link}`}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDepartments;
