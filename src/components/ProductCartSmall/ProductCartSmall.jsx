import React from "react";
import { ReactComponent as Trash } from "../../svgs/trash.svg";
import { ReactComponent as Plus } from "../../svgs/plus.svg";
import { ReactComponent as Minus } from "../../svgs/minus.svg";
import {
  addItem,
  removeItem,
  removeOneItem,
} from "../../store/CartReducer/CartActions";
import { useSelector, useDispatch } from "react-redux";

const ProductCartSmall = ({ item }) => {
  const dispatch = useDispatch();
  const currentCartItems = useSelector((state) => state.cartReducer.cartItems);
  const remove = () => {
    dispatch(removeItem(item, currentCartItems));
  };
  const add = () => {
    dispatch(addItem(item, currentCartItems));
  };
  const removeOne = () => {
    dispatch(removeOneItem(item, currentCartItems));
  };
  return (
    <div className="flex h-20 gap-2 group/b  border-b py-2">
      <div className="flex flex-col overflow-hidden items-center w-0 group-hover/b:w-[25px] transition-all duration-300 ease-in-out justify-center">
        <Plus
          onClick={add}
          className=" stroke-green-700 hover:fill-green-700 hover:stroke-lightest transition-all"
        />
        <Trash onClick={remove} className=" stroke-red-700" />
        <Minus
          onClick={removeOne}
          className=" stroke-dark hover:fill-dark hover:stroke-lightest transition-all"
        />
      </div>
      <img src={item.images[0]} alt={item.title} />
      <div className="flex flex-col justify-around">
        <a className="text-sm font-semibold text-dark hover:text-press cursor-pointer transition-all duration-300">
          {item.title.substring(0, 20)}...
        </a>
        <p className="text-primary text-sm">
          ${item.price}.00
          <span className="text-primaryfaded font-semibold"> X</span>
          <span> {item.count}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCartSmall;
