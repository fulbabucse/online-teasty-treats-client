import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContexts } from "../../contexts/ShopContext";

import SingleItem from "../SingleItem/SingleItem";

const Orders = () => {
  const { orders } = useContext(ShopContexts);
  return (
    <div className="mt-6">
      {orders.length === 0 && (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-semibold">Your Cart is Empty</h1>
          <Link to="/shop">
            <button className="btn btn-sm btn-secondary mt-3">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 gap-3">
        {orders.map((item, index) => (
          <SingleItem key={index} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default Orders;
