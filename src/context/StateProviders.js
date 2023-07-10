import React, { createContext, useContext, useReducer } from "react";
import Cart from "../components/Cart.js";
import { cartReducer } from "./reducers.js";

const Carts = createContext();
const StateProviders = ({ cartReducer, initialState, childern }) => {
  return (
    <Carts.Provider value={useReducer(cartReducer, initialState)}>
      {childern}
    </Carts.Provider>
  );
};

export default StateProviders;
export const useStateValue = () => useContext(Carts);
