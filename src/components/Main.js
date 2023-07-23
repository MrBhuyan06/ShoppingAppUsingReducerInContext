import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard.js";
import { useStateValue } from "../context/StateProviders.js";
import Filter from "./Filter.js";
const Main = () => {
  const [check, setCheck] = useState("");
  // console.log(useStateValue());
  const {
    state: { res },
    productState: { bystock, searchQuery, byRating, sort, byfastDelivery },
  } = useStateValue();
  // console.log(byRating);
  // console.log(searchQuery);
  const filterProduct = () => {
    let sortedProdut = res;
    if (sort) {
      sortedProdut = sortedProdut.sort((a, b) =>
        sort === "lowtohigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (bystock) {
      sortedProdut = sortedProdut.filter((prop) => prop.inStock === 0);
    }
    if (byfastDelivery) {
      sortedProdut = sortedProdut.filter((prop) => prop.fastDelivery);
    }
    if (byRating) {
      console.log(byRating);
      sortedProdut = sortedProdut.filter((prop) => byRating >= prop.rating);
    }
    if (searchQuery) {
      sortedProdut = sortedProdut.filter((prop) =>
        prop.tittle.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return sortedProdut;
  };

  return (
    <div className="w-full px-4 relative  flex flex-col items-center md:items-start pt-4   md:flex md:flex-row gap-4 min-h-full mt-24">
      <div
        data-theme="dark"
        className=" w-full border-2 md:w-[30%]  rounded-md h-[450px] md:sticky md:top-14 "
      >
        <Filter />
      </div>
      <div className="w-[70%] border-2 flex-wrap flex gap-4 justify-center p-4">
        {filterProduct().map((res) => (
          <RestaurentCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Main;
