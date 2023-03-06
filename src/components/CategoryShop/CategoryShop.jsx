import React from "react";
import { ReactComponent as ArrowRight } from "../../svgs/rightArrow.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoryShop = ({ category }) => {
  return (
    <Link to={`${category.title}`}>
      <div className="group flex-1 bg-faded pt-6 rounded-lg overflow-hidden self-stretch flex lg:flex-col sm:flex-row-reverse lg:justify-between sm:justify-center cursor-pointer">
        <div className="text pl-6 sm:self-center lg:self-auto z-[2]">
          <h2 className="text-2xl font-semibold">{category.title}</h2>
          <p className="text-press flex items-center  cursor-pointer">
            Shop all
            <ArrowRight className="stroke-press w-6 h-6" />
          </p>
        </div>
        <img
          className="sm:w-[50%] lg:w-auto transform scale-100 group-hover:scale-[1.1] transition duration-700 z-[1]"
          src={category.image}
          alt={category.title}
        />
      </div>
    </Link>
  );
};

export default CategoryShop;
