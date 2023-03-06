import React from "react";
import { Link } from "react-router-dom";
import { shopDepartments, accountLinks, aboutLinks } from "../../assets";
const FooterTop = () => {
  return (
    <div className="grid lg:grid-cols-3 smd:grid-cols-2 max-w-[1250px] mx-auto gap-y-6 justify-between pt-20 px-6">
      <div className="flex flex-col gap-2 ">
        <h2 className="text-lightest mb-2 font-semibold">Shop departments</h2>
        {shopDepartments.map((dep, i) => (
          <Link
            className="text-lighter hover:text-lightest transition cursor-pointer text-sm"
            key={i}
            to={dep.link}
          >
            {dep.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lightest mb-2 font-semibold">
          Account & shipping info
        </h2>
        {accountLinks.map((dep, i) => (
          <Link
            className="text-lighter hover:text-lightest transition cursor-pointer text-sm"
            key={i}
            to={dep.link}
          >
            {dep.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lightest mb-2 font-semibold">About us</h2>
        {aboutLinks.map((dep, i) => (
          <Link
            className="text-lighter hover:text-lightest transition cursor-pointer text-sm"
            key={i}
            to={dep.link}
          >
            {dep.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterTop;
