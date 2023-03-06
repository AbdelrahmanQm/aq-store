import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../svgs/rightArrow.svg";
const ViewMoreBtn = () => {
  return (
    <Link to="/best-sellers">
      <button className="group bg-white border border-primary px-6 py-2 text-primary  rounded-md   text-lg hover:bg-primary hover:text-faded transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-95  transform flex items-center gap-2">
        View More{" "}
        <RightArrow className="stroke-primary group-hover:stroke-faded transition-all w-6 h-6" />
      </button>
    </Link>
  );
};

export default ViewMoreBtn;
