import createAction from "../create-action";
import { NAV_ACTION_TYPES } from "./nav-reducer";

export const navAction = (payload) => {
  return createAction(NAV_ACTION_TYPES.TOGGLE_NAV, payload);
};
