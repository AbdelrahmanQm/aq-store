export const CART_ACTION_TYPES = {
  ADD_ITEM: "ADD_ITEM",
  ADD_ONE_ITEM: "ADD_ONE_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ONE_ITEM: "REMOVE_ONE_ITEM",
};

const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case CART_ACTION_TYPES.ADD_ONE_ITEM:
      state.cartItems[payload].count = state.cartItems[payload].count + 1;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case CART_ACTION_TYPES.REMOVE_ITEM:
      const newItems = state.cartItems.filter((_, i) => i !== payload);

      return {
        ...state,
        cartItems: [...newItems],
      };
    case CART_ACTION_TYPES.REMOVE_ONE_ITEM:
      state.cartItems[payload].count = state.cartItems[payload].count - 1;

      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    default:
      return state;
  }
};
