import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as Home } from "../../svgs/home.svg";
import { ReactComponent as ChevRight } from "../../svgs/chevronRight.svg";
const BestSellers = () => {
  const allProducts = useSelector((state) => state.allProducts.state);
  return (
    <div>
      <header className="bg-primary h-32 ">
        <div className="header-content h-32 px-6 flex items-center smd:justify-between max-w-[1250px] mx-auto sm:flex-col smd:flex-row sm:justify-evenly">
          <h1 className="text-3xl text-faded ">Best sellers</h1>
          <div className="flex items-center">
            <Link to="/">
              <p className="flex items-center gap-1 text-faded text-sm">
                <span>
                  <Home className="h-6 w-6 stroke-faded" />
                </span>{" "}
                Home
              </p>{" "}
            </Link>
            <ChevRight className="h-6 w-6 stroke-faded" />
            <p className="text-lightest text-sm">Best sellers</p>
          </div>
        </div>
      </header>
      <div className="grid lx:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 smd:grid-cols-2 sm:grid-col-1  gap-x-6 gap-y-10 px-6 max-w-[1250px] mx-auto mt-10 ">
        {allProducts &&
          allProducts
            .filter((prod) => (prod.bestSellers = true))
            .map((product) => (
              <ProductCardLarge key={product._id} item={product} />
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default BestSellers;
