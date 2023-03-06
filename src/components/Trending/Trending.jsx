import React from "react";
import ProductCardLarge from "../ProductCardLarge/ProductCardLarge";
import { useSelector } from "react-redux";
import ViewMoreBtn from "../ViewMoreBtn/ViewMoreBtn";

const Trending = () => {
  const products = useSelector((state) => state.allProducts.state);
  const randomNumber = Math.trunc(Math.random() * 9);
  const randomSix = [
    randomNumber,
    randomNumber + 10,
    randomNumber + 20,
    randomNumber + 30,
    randomNumber + 40,
    randomNumber + 50,
    randomNumber + 5,
    randomNumber + 15,
  ];
  const randomProducts =
    products && products.filter((product, i) => randomSix.includes(i));
  return (
    <section className="max-w-[1250px] mx-auto mt-16 flex flex-col items-center">
      <h2 className="text-center text-3xl text-primary font-semibold">
        Trending Products
      </h2>
      <div className="grid lx:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 smd:grid-cols-2 sm:grid-col-1  gap-x-6 gap-y-10 py-10 px-4">
        {randomProducts &&
          randomProducts.map((product) => (
            <ProductCardLarge item={product} key={product._id} />
          ))}
      </div>
      <ViewMoreBtn />
    </section>
  );
};

export default Trending;
