import { combineReducers } from "redux";
import { navReducer } from "./nav-reducer/nav-reducer";
import { allProductsReducer } from "./all-products-reducer/all-products-reducer";
import { cartReducer } from "./CartReducer/CartReducer";
import { productReducer } from "./productReducer/productReducer";
export const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  cartReducer: cartReducer,
  navOpen: navReducer,
  product: productReducer,
});
