import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducers.js";
import { initial } from "./initial.js";

const Carts = createContext();
console.log(Carts);
export const StateProviders = ({ children }) => {
  const [state, dispath] = useReducer(reducer, initial);
  return <Carts.Provider value={{ state, dispath }}>{children}</Carts.Provider>;
};
StateProviders;
export const useStateValue = () => useContext(Carts);
