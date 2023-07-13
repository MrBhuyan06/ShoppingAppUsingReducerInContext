export const actionType = {
  ADD_CART: "ADD_CART",
  REMOVE_CART: "REMOVE_CART",
  CHANGE_CART_QTY: "CHANGE_CART_QTY",
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
    case actionType.CHANGE_CART_QTY:
      console.log(action.payload.id);
      console.log(state.cart[0].id);
      console.log(state.cart[0].id);
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER_BY_AVA":
      return {
        ...state,
        bystock: !state.bystock,
      };
    case "FILTER_BY_DELIVERY":
      return {
        ...state,
        byfastDelivery: !state.byfastDelivery,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        byRating: action.payload,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "CLEAR_FILTER":
      return {
        bystock: false,
        byfastDelivery: false,
        byRating: 0,
        searchQuery: "",
      };
    default:
      return state;
  }
};
