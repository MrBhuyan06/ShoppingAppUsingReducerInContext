import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProviders.js";
import { AiFillDelete } from "react-icons/ai";
import { actionType } from "../context/reducers.js";

const Cart = () => {
  const {
    state: { cart },
    dispath,
  } = useStateValue();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => (acc = acc + curr.price), 0));
    console.log("called");
  }, [cart]);

  return (
    <div className="w-full px-4 relative  flex flex-col items-center md:items-start pt-4   md:flex md:flex-row gap-4 min-h-full mt-24">
      <div className="w-[70%] border-2 flex-wrap flex gap-4 justify-center p-4">
        <table className="table">
          {cart.map((c, i) => (
            <tr className="hover">
              <th>
                <img src={c.cover} className="w-20" alt="" />
              </th>
              <td className="">{c.tittle}</td>
              <td className="text-lg font-bold">{c.price}</td>
              <td className="text-lg font-bold">{c.rating}</td>
              <td>
                <select
                  as="select"
                  className="select select-bordered w-full max-w-xs"
                  value={c.qty}
                  onClick={(e) => {
                    dispath({
                      type: actionType.CHANGE_CART_QTY,
                      payload: {
                        id: c.id,
                        qty: e.target.value,
                      },
                    });
                    console.log("Hello");
                  }}
                >
                  {[...Array(c.inStock).keys()].map((x) => {
                    return <option key={x + 1}>{x + 1}</option>;
                  })}
                </select>
              </td>
              <td>
                <button
                  className="className=
                  hover:text-red-400
                  cursor-pointer
                  text-lg
                  font-bold"
                >
                  <AiFillDelete
                    onClick={() =>
                      dispath({
                        type: actionType.REMOVE_CART,
                        payload: c,
                      })
                    }
                  />
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div
        data-theme="dark"
        className=" w-full border-2 md:w-[30%] p-8 flex flex-col gap-4  rounded-md h-[450px] md:sticky md:top-14"
      >
        <h1 className="text-4xl">Subtotal({cart.length}) items</h1>
        <span
          className="mt-4 inline-block text-xl text-bold 
        "
        >
          Total {total}
        </span>
        <button className="btn btn-primary">CheckOut</button>
      </div>
    </div>
  );
};

export default Cart;
