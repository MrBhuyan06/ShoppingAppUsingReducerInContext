import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useStateValue } from "../context/StateProviders.js";
import { actionType } from "../context/reducers.js";

const RestaurentCard = ({ res }) => {
  const {
    state: { cart },
    dispath,
  } = useStateValue();
  console.log(useStateValue());
  console.log(cart, dispath);
  console.log(res);
  return (
    <div className="card w-80 bg-base-100 shadow-xl hover:scale-105   transition-all ease-in-out">
      <figure className="w-40 mx-auto">
        <img src={res.cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{res.tittle}</h2>
        <p>Rs{res.price}</p>

        <p>{res.fastDelivery}</p>
        <div className=" px-2  w-[50px] bg-green-600 rounded-md flex items-center  text-white justify-center">
          <span className=" ">{res.rating}</span>
          <AiOutlineStar />
        </div>

        <div className="card-actions -2 flex items-center ">
          {cart.some((c) => c.id === res.id) ? (
            <button
              className="btn btn-error"
              onClick={() =>
                dispath({
                  type: actionType.REMOVE_CART,
                  payload: res,
                })
              }
            >
              Remove From cart
            </button>
          ) : (
            <button
              disabled={!res.inStock}
              className="  btn btn-primary rounded-lg "
              onClick={() =>
                dispath({
                  type: actionType.ADD_CART,
                  payload: res,
                })
              }
            >
              {res.inStock ? "Add To Cart" : "Not Avilable"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
