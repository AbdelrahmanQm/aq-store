import { PRODUCT_ACTION_TYPES } from "./productReducer";
import createAction from "../create-action";

export const setProduct = (payload) => {
  return createAction(PRODUCT_ACTION_TYPES.SET_PRODUCT, payload);
};
