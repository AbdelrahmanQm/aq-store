import createAction from "../create-action";
import { ALL_PRODUCTS_ACTION_TYPES } from "./all-products-reducer";

export const setProducts = (payload) => {
  return createAction(ALL_PRODUCTS_ACTION_TYPES.GET_ALL_DATA, payload);
};
