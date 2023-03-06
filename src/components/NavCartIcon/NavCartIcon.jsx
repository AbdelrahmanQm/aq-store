import React from "react";
import { ReactComponent as ShoppingCart } from "../../svgs/shoppingCart.svg";
import { ReactComponent as ChevDown } from "../../svgs/chevronDown.svg";
import { ReactComponent as RightArrow } from "../../svgs/rightArrow.svg";
import { ReactComponent as Credit } from "../../svgs/creditCard.svg";
import ProductCartSmall from "../ProductCartSmall/ProductCartSmall";
import "./NavCartIcon.css";
import { useSelector } from "react-redux";
const NavCartIcon = () => {
  const items = useSelector((state) => state.cartReducer.cartItems);
  const subTotal = items.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  const itemsCount = items.reduce((acc, cur) => acc + cur.count, 0);
  return (
    <div className="flex lg:gap-4 sm:gap-0 group sm:flex-col lg:flex-row items-center justify-center relative cursor-pointer ">
      <div className="relative h-full flex justify-center items-center">
        <ShoppingCart className="lg:bg-lightest w-9 h-9 sm:bg-white sm:stroke-light lg:stroke-[2] sm:stroke-[1.5] lg:stroke-primary lg:p-[5px] sm:p-0 sm:rounded-none lg:rounded-full" />

        <p className="bg-primary text-center text-white rounded-full lg:absolute lg:w-[23px] lg:h-[23px] sm:w-[20px] sm:h-[20px] lg:-top-2.5 lg:-right-2.5 sm:relative text-sm font-semibold flex items-center justify-center">
          {itemsCount < 99 ? itemsCount : 99}
        </p>
      </div>
      <div className="flex-col  lg:flex">
        <p className="text-xs lg:block sm:hidden">My Cart</p>
        <div className="flex items-center">
          <p className="text-sm sm:font-normal lg:font-bold">
            {subTotal < 999 ? "" : "+"}${subTotal < 999 ? subTotal : 999}.00
          </p>
          <ChevDown className="sm:hidden lg:block h-5 w-5 stroke-press" />
        </div>
      </div>
      {/* ======================== Cart Gadget ======================== */}
      <div
        className="overflow-hidden lg:flex sm:hidden w-[320px] group-hover:py-4 py-0 px-4 bg-white shadow-lg rounded-lg absolute top-[37px] opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[2000px] transition-none right-0  flex-col group-hover:duration-500
      transform translate-y-10 group-hover:translate-y-0 group-hover:transition-all
      "
      >
        <div className="items cart-box max-h-[250px] cart-box overflow-y-scroll">
          {items.length < 1 ? (
            <p className="text-lg font-semibold text-primaryfaded h-[100px] flex items-center justify-center">
              Cart is empty
            </p>
          ) : (
            items &&
            items.map((product, i) => (
              <ProductCartSmall key={i} item={product} />
            ))
          )}
        </div>
        <div className="totalExpand py-4 flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-sm">Subtotal: </p>
            <span className="text-primary font-semibold">${subTotal}.00</span>
          </div>
          <button className="group/c bg-white border border-primary px-2 py-2 text-primary  rounded-md   text-sm hover:bg-primary hover:text-faded transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-95  transform flex items-center gap-2">
            Expand Cart
            <RightArrow className="stroke-primary  group-hover/c:stroke-faded transition-all w-6 h-6" />
          </button>
        </div>
        <button className="bg-primary px-4 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100 justify-center transform flex items-center gap-2">
          <Credit className="stroke-faded group-hover:stroke-faded transition-all w-6 h-6" />{" "}
          Checkout
        </button>
      </div>
    </div>
  );
};

export default NavCartIcon;
