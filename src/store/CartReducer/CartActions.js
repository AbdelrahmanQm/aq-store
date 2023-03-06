import createAction from "../create-action";
import { CART_ACTION_TYPES } from "./CartReducer";

/* ============================ Add Item ============================ */
export const addItem = (payload, currentCartItems) => {
  // Find if the Item is previously added or not
  const isFound = currentCartItems.find(
    (cartItem) => cartItem._id === payload._id
  );
  // If Item is not previously added >>>> Add it with count (1)
  if (!isFound) {
    return createAction(CART_ACTION_TYPES.ADD_ITEM, { ...payload, count: 1 });
  }
  // If Item is previously added >>>> Modify it with count (+1)
  if (isFound) {
    const index = currentCartItems.findIndex(
      (item) => item._id === isFound._id
    );
    return createAction(CART_ACTION_TYPES.ADD_ONE_ITEM, index);
  }
};
/* ============================ Clear Item ============================ */
export const removeItem = (payload, currentCartItems) => {
  //Find Delete Index
  const deleteIndex = currentCartItems.findIndex(
    (item) => item._id === payload._id
  );
  return createAction(CART_ACTION_TYPES.REMOVE_ITEM, deleteIndex);
};

/* ============================ Remove One Item ============================ */

export const removeOneItem = (payload, currentCartItems) => {
  //Find Delete Index
  const deleteIndex = currentCartItems.findIndex(
    (item) => item._id === payload._id
  );
  //Find count
  const itemCount = currentCartItems[deleteIndex].count;

  //If Last Item (Count === 1) delete Item
  if (itemCount === 1) {
    return createAction(CART_ACTION_TYPES.REMOVE_ITEM, deleteIndex);
  }
  //If not last Item (Count > 1) >>>>> count--
  if (itemCount > 1) {
    return createAction(CART_ACTION_TYPES.REMOVE_ONE_ITEM, deleteIndex);
  }
};
