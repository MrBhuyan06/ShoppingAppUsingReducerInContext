import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard.js";
const Main = () => {
  const [check, setCheck] = useState("");

  return (
    <div className="w-full px-4 relative  flex flex-col items-center md:items-start pt-4   md:flex md:flex-row gap-4 min-h-full mt-24">
      <div
        data-theme="dark"
        className=" w-full border-2 md:w-[30%]  rounded-md h-[450px] md:sticky md:top-14 "
      >
        <h3 className="text-center text-2xl p-4 text-white">
          Filter Restaurent
        </h3>
        <div className="flex flex-col gap-4 p-8">
          <div className="form-control  ">
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
              <span className="label-text">Ascending</span>
            </label>
          </div>
          <div className="form-control   ">
            <label className="label cursor-pointer flex justify-start gap-2">
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
              />
              <span className="label-text">Descending</span>
            </label>
          </div>

          <div className="form-control ">
            <label className="label cursor-pointer  flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text">Not Avilable</span>
            </label>
          </div>

          <div className="form-control ">
            <label className="label cursor-pointer  flex justify-start gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text">Fast Delivery</span>
            </label>
          </div>

          <div className="rating flex justify-start gap-2">
            <span>Rating</span>
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>

          <button className="btn btn-primary">Clear Filter</button>
        </div>
      </div>
      <div className="w-[70%] border-2  flex flex-wrap gap-4 justify-center p-4">
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
        <RestaurentCard />
      </div>
    </div>
  );
};

export default Main;
