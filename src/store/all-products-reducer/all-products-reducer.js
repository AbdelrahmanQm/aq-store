export const ALL_PRODUCTS_ACTION_TYPES = {
  GET_ALL_DATA: "GET_ALL_DATA",
};

const INITIAL_STATE = [];

export const allProductsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_PRODUCTS_ACTION_TYPES.GET_ALL_DATA:
      return {
        state: payload,
      };
    default:
      return state;
  }
};
