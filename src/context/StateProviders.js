import React, { createContext, useContext, useReducer } from "react";
import { productReducer, reducer } from "./reducers.js";
import { initial } from "./initial.js";

const Carts = createContext();
console.log(Carts);
export const StateProviders = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initial);
  console.log(useReducer(reducer, initial));
  const [productState, productdispatch] = useReducer(productReducer, {
    bystock: false,
    byfastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return (
    <Carts.Provider value={{ state, dispath, productState, productdispatch }}>
      {children}
    </Carts.Provider>
  );
};
StateProviders;
export const useStateValue = () => useContext(Carts);
