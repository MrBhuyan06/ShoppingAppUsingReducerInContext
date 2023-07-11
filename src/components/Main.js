import React, { useState } from "react";
import RestaurentCard from "./RestaurentCard.js";
import { useStateValue } from "../context/StateProviders.js";
import Filter from "./Filter.js";
const Main = () => {
  const [check, setCheck] = useState("");
  console.log(useStateValue());
  const {
    state: { res },
  } = useStateValue();
  console.log(res);
  return (
    <div className="w-full px-4 relative  flex flex-col items-center md:items-start pt-4   md:flex md:flex-row gap-4 min-h-full mt-24">
      <div
        data-theme="dark"
        className=" w-full border-2 md:w-[30%]  rounded-md h-[450px] md:sticky md:top-14 "
      >
        <Filter />
      </div>
      <div className="w-[70%] border-2 flex-wrap flex gap-4 justify-center p-4">
        {res.map((res) => (
          <RestaurentCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Main;
