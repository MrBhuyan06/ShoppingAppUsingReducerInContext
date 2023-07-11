export const actionType = {
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case actionType.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
