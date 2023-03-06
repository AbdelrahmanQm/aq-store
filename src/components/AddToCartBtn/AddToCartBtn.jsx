import React from "react";
import { ReactComponent as AddToCart } from "../../svgs/addToCart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/CartReducer/CartActions";
const AddToCartBtn = ({ item }) => {
  const currentCartItems = useSelector((state) => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addItem(item, currentCartItems));
  };
  return (
    <button
      onClick={add}
      className="bg-primary  px-2 py-2 text-faded  rounded-md drop-shadow-lg  text-sm hover:bg-press transition-all active:bg-primary duration-300 active:drop-shadow-sm active:scale-100 w-full justify-center transform flex items-center gap-2"
    >
      <AddToCart className="stroke-faded w-6 h-6" /> Add to Cart
    </button>
  );
};

export default AddToCartBtn;
