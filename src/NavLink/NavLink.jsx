import React from "react";

const NavLink = ({ item }) => {
  return (
    <div
      className="group relative whitespace-nowrap items-center lg:justify-center sm:justify-start pl-4 lg:flex sm:flex transition sm:w-full sm:bg-faded lg:bg-white
    sm:rounded-lg lg:rounded-none sm:h-12 lg:h-10"
    >
      <a href="" className="hover:text-primary transition-all cursor-pointer">
        {item.name}
      </a>
      {item.links.length > 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-chevron-down sm:block lg:hidden group-hover:stroke-primary pl-1 
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
      ) : (
        ""
      )}
      {item.links.length > 0 ? (
        <div
          className=" shadow-lg bg-white rounded-xl overflow-hidden  h-0 p-0 transform translate-y-10 group-hover:translate-y-0  group-hover:h-auto group-hover:p-4 ease-out transition-none w-[200px] duration-300 group-hover:transition-all top-10 text-left left-2
      absolute  "
        >
          <ul className="flex flex-col gap-4 pt-2 text-md lg:font-light ">
            {item.links.map((link) => (
              <li
                key={`${link.contName}`}
                className="hover:text-primary transition-all cursor-pointer"
              >
                <a className="" href={link.contLink}>
                  {link.contName}
                </a>
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
