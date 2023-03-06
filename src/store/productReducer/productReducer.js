const INITIAL_STATE = {
  product: {},
};

export const PRODUCT_ACTION_TYPES = {
  SET_PRODUCT: "SET_PRODUCT",
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = state;
  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};
