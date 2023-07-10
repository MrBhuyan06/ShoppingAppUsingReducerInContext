export const actionType = {
  ADD_CART: "ADD_CART",
};
export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD_CART:
      return {};
    default:
      return state;
  }
};
