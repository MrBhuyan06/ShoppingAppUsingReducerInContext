import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const RestaurentCard = ({
  cover,
  fastDelivery,
  rating,

  tittle,
  price,
}) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:scale-105   transition-all ease-in-out">
      <figure className="w-40 mx-auto">
        <img src={cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">S{tittle}</h2>
        <p>Rs{price}</p>

        <p>{fastDelivery}</p>
        <div className=" px-2  w-[50px] bg-green-600 rounded-md flex items-center  text-white justify-center">
          <span className=" ">{rating}</span>
          <AiOutlineStar />
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
