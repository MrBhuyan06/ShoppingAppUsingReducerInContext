import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProviders.js";
import { AiFillDelete } from "react-icons/ai";
import { actionType } from "../context/reducers.js";
const Header = () => {
  const {
    state: { cart, res },
    dispath,
  } = useStateValue();
  console.log(res);
  console.log(cart);
  const [searchText, setsearchText] = useState();
  // const [carts, setCarts] = useState(cart);

  const [total, setAllTotal] = useState();
  useEffect(() => {
    setAllTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <header className="fixed top-0 z-20 w-full">
      <div className=" navbar bg-base-100 px-8 flex justify-between">
        <div className="flex">
          <Link to={"/"}>
            <li className=" list-none normal-case text-orange-500 text-xl">
              Food Court
            </li>
          </Link>
        </div>
        <div className="form-control w-1/2 ">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            className="input input-bordered w-24 md:w-full"
          />
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart.length}Items</span>

                {cart.length > 0 ? (
                  <ul className="menu -ml-4  rounded-box">
                    {cart.map((c) => (
                      <li className="flex w-30">
                        <a className="">
                          <img src={c.cover} className="h-5 w-5"></img>
                          <span> {c.tittle}</span>
                          <span>Rs{c.price}</span>
                          <button
                            className=""
                            onClick={() => {
                              dispath({
                                type: actionType.REMOVE_CART,
                                payload: c,
                              });
                            }}
                          >
                            <AiFillDelete />
                          </button>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="menu bg-base-200 rounded-box">
                    <li className="flex flex-col">
                      <a>
                        <span>Cart is Empty</span>
                      </a>
                    </li>
                  </ul>
                )}

                <span className="text-info">Subtotal: {total}</span>

                <div className="card-actions">
                  <Link to={"/cart"}>
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
