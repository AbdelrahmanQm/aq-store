import React from "react";
import { Link } from "react-router-dom";

const ProductCardSmall = ({ item }) => {
  return (
    <div className="flex h-20 gap-2 border-b py-2">
      <img src={item.images[0]} alt={item.title} />
      <div className="flex flex-col justify-around">
        <Link
          to={`/shop/${item.category}/${item._id}`}
          className="text-sm font-semibold text-dark hover:text-press cursor-pointer transition-all duration-300"
        >
          {item.title.substring(0, 25)}...
        </Link>
        <p className="text-primary text-sm">${item.price}.00</p>
      </div>
    </div>
  );
};

export default ProductCardSmall;
