import React, { useState } from "react";
import Rating from "./Rating.js";
import { useStateValue } from "../context/StateProviders.js";
const Filter = () => {
  const {
    productState: { bystock, searchQuery, byRating, sort, byfastDelivery },
    productdispatch,
  } = useStateValue();
  console.log(bystock, searchQuery, byRating, sort, byfastDelivery);
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
              onChange={() => {
                productdispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowtohigh",
                });
              }}
              checked={sort === "lowtohigh" ? true : false}
            />
            <span className="label-text">Low To High</span>
          </label>
        </div>
        <div className="form-control   ">
          <label className="label cursor-pointer flex justify-start gap-2">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              label="descending"
              onChange={() => {
                productdispatch({
                  type: "SORT_BY_PRICE",
                  payload: "hightolow",
                });
              }}
              checked={sort === "hightolow" ? true : false}
            />
            <span className="label-text">High To Low</span>
          </label>
        </div>

        <div className="form-control ">
          <label className="label cursor-pointer  flex justify-start gap-2">
            <input
              type="checkbox"
              label="not Avialbel"
              className="checkbox checkbox-primary"
              onChange={() => {
                productdispatch({
                  type: "FILTER_BY_AVA",
                });
              }}
              checked={bystock}
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
              onChange={() => {
                productdispatch({
                  type: "FILTER_BY_DELIVERY",
                });
              }}
              // checked={byfastDelivery}
              checked={byfastDelivery}
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

        <button
          className="btn btn-primary"
          onClick={() =>
            productdispatch({
              type: "CLEAR_FILTER",
            })
          }
        >
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default Filter;
