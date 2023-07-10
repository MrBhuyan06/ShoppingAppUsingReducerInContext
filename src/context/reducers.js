export const actionType = {
  ADD_CART: "ADD_CART",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_CART:
      return {
        ...state,
        cart: action.cart,
      };
    default:
      return state;
  }
};
