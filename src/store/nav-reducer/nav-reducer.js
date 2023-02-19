const INITIAL_STATE = {
  navOpen: false,
};

export const NAV_ACTION_TYPES = {
  TOGGLE_NAV: "TOGGLE_NAV",
};

export const navReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV_ACTION_TYPES.TOGGLE_NAV:
      return {
        ...state,
        navOpen: payload,
      };
    default:
      return state;
  }
};
