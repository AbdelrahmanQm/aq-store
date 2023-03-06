import React from "react";
import { ReactComponent as FavIcon } from "../../svgs/favIcon.svg";
import { ReactComponent as View } from "../../svgs/view.svg";
import { useState } from "react";
import QuickView from "../QuickView/QuickView";
import AddToCartBtn from "../AddToCartBtn/AddToCartBtn";
import { Link } from "react-router-dom";
const ProductCardLarge = ({ item }) => {
  const [openView, setOpenView] = useState(false);

  const openModal = () => {
    setOpenView(true);
  };
  const closeModal = () => {
    setOpenView(false);
  };

  return (
    <div>
      {openView && (
        <QuickView key={item._id} close={setOpenView} product={item} />
      )}
      {openView && (
        <div
          onClick={closeModal}
          className="w-screen h-screen bg-black fixed z-[1500] top-0 left-0 opacity-50"
        ></div>
      )}

      <div className="group shadow-sm relative cursor-pointer rounded-lg overflow-hidden flex flex-col  transform lg:hover:scale-105 lg:hover:shadow-2xl sm:hover:scale-100 sm:hover:shadow-sm transition-all duration-500">
        <img src={item.images[0]} alt={item.title} />
        <div className="discription px-4 mt-3">
          <p className="text-sm text-medium">{item.category}</p>
          <Link to={`/shop/${item.category}/${item._id}`}>
            <p className="font-semibold text-sm text-dark hover:text-primary transition-all">
              {item.title.substring(0, 25)}...
            </p>
          </Link>
          <p className="text-primary mt-3 mb-4">${item.price}.00</p>
        </div>
        <div className="flex flex-col justify-center items-center  group-hover:max-h-[500px] transition-all duration-500 ease-in-out absolute top-[-50%] group-hover:top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <div className="pickSize sm:hidden lg:flex gap-4 items-center whitespace-nowrap justify-center  ">
            <select className="focus:outline-none px-1 py-2 rounded-md border border-primary text-md">
              {item.sizes &&
                item.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
            </select>
            <AddToCartBtn item={item} />
          </div>
        </div>
        <FavIcon className="stroke-medium hover:stroke-press cursor-pointer bg-faded rounded-full p-2 h-10 w-10 absolute right-2 top-2" />
        <View
          onClick={openModal}
          className="stroke-medium hover:stroke-press cursor-pointer bg-faded rounded-full p-2 h-10 w-10 absolute group-hover:right-2 transition-all ease-in-out right-[-40px] top-14 lg:block sm:hidden"
        />
      </div>
    </div>
  );
};

export default ProductCardLarge;
