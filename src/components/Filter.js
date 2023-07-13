import React, { useState } from "react";
import Rating from "./Rating.js";
import { useStateValue } from "../context/StateProviders.js";
const Filter = () => {
  const {
    productState: { bystock, searchQuery, byRating, byfastDelivery },
    productdispatch,
  } = useStateValue();
  return (
    <>
      <h3 className="text-center text-2xl p-4 text-white">Filter Restaurent</h3>
      <div className="flex flex-col gap-4 p-8">
        <div className="form-control  ">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              label="ascending"
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
              label="descending"
            />
            <span className="label-text">Descending</span>
          </label>
        </div>

        <div className="form-control ">
          <label className="label cursor-pointer  flex justify-start gap-2">
            <input
              type="checkbox"
              label="not Avialbel"
              className="checkbox checkbox-primary"
            />
            <span className="label-text">Not Avilable</span>
          </label>
        </div>

        <div className="form-control ">
          <label className="label cursor-pointer  flex justify-start gap-2">
            <input
              type="checkbox"
              label="fastdelivery"
              className="checkbox checkbox-primary"
            />
            <span className="label-text">Fast Delivery</span>
          </label>
        </div>

        <div className="rating flex items-center justify-start gap-2">
          <span>Rating</span>
          <Rating
            rating={byRating}
            onClick={(i) =>
              productdispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
          />
        </div>

        <button className="btn btn-primary">Clear Filter</button>
      </div>
    </>
  );
};

export default Filter;
