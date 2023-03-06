import React from "react";

import { ReactComponent as Close } from "../../svgs/close.svg";
import { ReactComponent as InfoIcon } from "../../svgs/infoIcon.svg";
import { ReactComponent as FavIcon } from "../../svgs/favIcon.svg";
import { useState } from "react";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { Link } from "react-router-dom";
const QuickView = ({ product, close }) => {
  const [img, setImg] = useState(product.images[0]);
  const useImage = (e) => {
    const imgUrl = e.target.src;
    setImg(imgUrl);
  };
  const setClose = () => {
    close(false);
  };
  return (
    <div className="quickView  fixed z-[2000] top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] w-[1000px] h-[700px] flex flex-col bg-white rounded-lg shadow-xl">
      <div className="titleClose flex justify-between border-b mb-6 items-center px-6">
        <Link to={`/shop/${product.category}/${product._id}`}>
          <h2 className="title py-4  text-xl font-semibold hover:text-primary transition-all cursor-pointer">
            {product.title}
          </h2>
        </Link>
        <Close
          onClick={setClose}
          className=" stroke-dark w-8 h-8 hover:stroke-primary transition-all cursor-pointer"
        />
      </div>
      <div className="bodyQuick  flex gap-4 px-6">
        <div className="images flex justify-start flex-[6]">
          <div className="allImages flex flex-col w-32 p-2 gap-4">
            {product.images.map((image, i) => {
              return (
                <img
                  onClick={useImage}
                  key={i}
                  className={`border rounded-lg cursor-pointer hover:opacity-100 transition-all 
                  ${
                    img === image ? "opacity-100 border-primary" : "opacity-50"
                  }`}
                  src={image}
                  alt="Product Image"
                />
              );
            })}
          </div>
          <div className="bigImage">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="info flex-[4]">
          <p className="text-xl">{product.title}</p>
          <p className="mb-4 ">
            <span className="font-semibold ">Brand:</span> {product.brand}
          </p>
          <p className="text-2xl mb-4 font-semibold text-primary">
            ${product.price}.00
          </p>
          <p className="font-semibold mb-1">Size:</p>
          <select className="focus:outline-none px-1 py-2 mb-4 w-full rounded-md border border-primary text-md">
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <div className="pickSize flex gap-4 items-center mb-6 whitespace-nowrap justify-center ">
            <select className="focus:outline-none px-1 py-2  rounded-md border border-primary text-md">
              <option value="value">1</option>
              <option value="value">2</option>
              <option value="value">3</option>
              <option value="value">4</option>
              <option value="value">5</option>
            </select>
            <AddToCartBtn item={product} />
          </div>
          <div className="flex justify-between border-b pb-1 mb-4">
            <p className="font-semibold text-xl  pb-2 flex items-center ">
              <InfoIcon className="h-8 w-8 stroke-medium mr-1" />
              Product info
            </p>
            <FavIcon className="stroke-medium hover:stroke-press cursor-pointer h-8 w-8" />
          </div>
          <p className="font-semibold">Category</p>
          <p className="mb-4 pl-1">{product.category}</p>
          <p className="font-semibold">Key features</p>
          {product.features.map((feature, i) =>
            i < 5 ? (
              <p key={`${i}ss`} className="pl-1">
                {feature}
              </p>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default QuickView;
