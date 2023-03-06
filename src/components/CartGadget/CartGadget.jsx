import React from "react";
import { ReactComponent as RightArrow } from "../../svgs/rightArrow.svg";
import { ReactComponent as Credit } from "../../svgs/creditCard.svg";
import ProductCartSmall from "../ProductCartSmall/ProductCartSmall";
import { useSelector } from "react-redux";
const CartGadget = () => {
  const products = useSelector((state) => state.allProducts.state);
  const picks = [5, 10, 15, 20];
  return (
    <div className=" w-[320px] p-4 bg-white shadow-lg rounded-lg absolute top-[37px] right-0 flex flex-col ">
      <div className="items max-h-[250px] cart-box overflow-y-scroll">
        {products &&
          products
            .filter((product) => product.newArrival)
            .map((product, i) =>
              picks.includes(i) ? (
                <ProductCartSmall key={i} item={product} />
              ) : (
                ""
              )
            )}
      </div>
      <div className="totalExpand py-4 flex justify-between items-center">
        <p>
          Subtotal: <span className="text-primary">$265.00</span>
        </p>
        <button className="group bg-white border border-primary px-2 py-2 text-primary  rounded-md   text-sm hover:bg-primary hover:text-faded transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-95  transform flex items-center gap-2">
          Expand Cart
          <RightArrow className="stroke-primary group-hover:stroke-faded transition-all w-6 h-6" />
        </button>
      </div>
      <button className="bg-primary px-4 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100 justify-center transform flex items-center gap-2">
        <Credit className="stroke-faded group-hover:stroke-faded transition-all w-6 h-6" />{" "}
        Checkout
      </button>
    </div>
  );
};

export default CartGadget;
