import React from "react";
import ReactDOM from "react-dom/client.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { StateProviders } from "./context/StateProviders.js";

import { initial } from "./context/initial.js";
import { cartReducer } from "./context/reducers.js";

import Cart from "./components/Cart.js";
const AppLoyout = () => {
  return (
    <>
      <h1>{console.log("hello")}</h1>
      <StateProviders>
        <div>
          <Header />
          <Outlet />
        </div>
      </StateProviders>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLoyout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

console.log("this is FOR console log demo");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
