import React from "react";
import { navDepartments } from "../../assets";

const NavDepartments = () => {
  return (
    <div className="group relative transition justify-center  sm:w-full sm:bg-faded lg:bg-white lg:w-auto sm:rounded-lg lg:rounded-none  items-center ">
      <div className="flex items-center lg:pl-0 sm:pl-4 sm:h-12 lg:h-10 lg:border-r sm:pr-0 sm:mr-0  lg:pr-3 lg:mr-4 cursor-pointer transition-all group  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-layout-2 mr-1 transition-all group-hover:stroke-primary
          group-hover:text-primary"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="4" y="4" width="6" height="5" rx="2" />
          <rect x="4" y="13" width="6" height="7" rx="2" />
          <rect x="14" y="4" width="6" height="7" rx="2" />
          <rect x="14" y="15" width="6" height="5" rx="2" />
        </svg>
        <p
          className="group-hover:stroke-primary
       group-hover:text-primary transition-all sm:font-semibold lg:font-normal "
        >
          Departments
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-down group-hover:stroke-primary  
          group-hover:text-primary transition-all"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div
        className="grid-cols-3 gap-4 bg-white shadow-lg rounded-xl overflow-hidden grid h-0 p-0 transform translate-y-10 group-hover:translate-y-0  group-hover:h-auto group-hover:p-10 ease-out transition-none  duration-300 group-hover:transition-all
      absolute w-[700px]"
      >
        {navDepartments.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <img src={item.image} alt="Shoes" className="rounded-lg" />
            <h2 className="font-medium text-lg mt-4 cursor-default ">
              {item.title}
            </h2>
            <ul>
              {item.content.map((link) => (
                <li
                  key={link.name}
                  className="cursor-pointer hover:text-primary text-sm"
                >
                  <a>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDepartments;
