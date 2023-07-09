import React from "react";

const Main = () => {
  return (
    <div className="w-full">
      <div data-theme="dark" className="w-[30%] rounded-md">
        <ul className="menu flex flex-col h-[450px] justify-start gap-8 w-56 rounded-box">
          <li className="">
            <a>Acessdeing</a>
          </li>
          <li>
            <a>Decending</a>
          </li>
          <li>
            <a>Out Of Stock</a>
          </li>
          <li>
            <a>Fast Delivery</a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
      </div>
      <div className="w-[70%] bg-red-400"></div>
    </div>
  );
};

export default Main;
