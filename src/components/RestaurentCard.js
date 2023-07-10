import React from "react";

const RestaurentCard = ({
  cover,
  fastDelivery,
  rating,

  tittle,
  price,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={cover} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">S{tittle}</h2>
        <p>Rs{price}</p>

        <p>{fastDelivery}</p>
        <p>{rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurentCard;
