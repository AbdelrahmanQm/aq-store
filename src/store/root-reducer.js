import { combineReducers } from "redux";
import { navReducer } from "./nav-reducer/nav-reducer";

export const rootReducer = combineReducers({
  navOpen: navReducer,
});
