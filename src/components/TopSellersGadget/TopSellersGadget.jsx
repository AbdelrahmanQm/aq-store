import React from "react";
import ProductCardSmall from "../ProductCardSmall/ProductCardSmall";
import { ReactComponent as ArrowRight } from "../../svgs/rightArrow.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const TopSellersGadget = () => {
  const products = useSelector((state) => state.allProducts.state);
  const picks = [5, 10, 15, 20];

  return (
    <div className="pl-4 flex-1">
      <h2 className="text-xl font-semibold mb-4 ">Top Seller</h2>
      {products &&
        products
          .filter((product) => product.bestSeller)
          .map((product, i) =>
            picks.includes(i) ? <ProductCardSmall key={i} item={product} /> : ""
          )}
      <Link
        to="/best-sellers"
        className="text-press flex items-center cursor-pointer mt-4"
      >
        View more
        <ArrowRight className="stroke-press w-6 h-6" />
      </Link>
    </div>
  );
};

export default TopSellersGadget;
