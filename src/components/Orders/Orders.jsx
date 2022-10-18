import React from "react";
import { useContext } from "react";
import { ShopContexts } from "../../contexts/ShopContext";

import SingleItem from "../SingleItem/SingleItem";

const Orders = () => {
  const { orders } = useContext(ShopContexts);
  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 gap-5">
        {orders.map((item, index) => (
          <SingleItem key={item.index} item={item}></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default Orders;
