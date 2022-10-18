import React, { createContext } from "react";
import { useState } from "react";

export const ShopContexts = createContext();

const ShopContext = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const handleAddToCart = (product) => {
    const newOrders = [...orders, product];
    setOrders(newOrders);
  };

  const removeProduct = (idMeal) => {
    const restProducts = orders.filter((order) => order.idMeal !== idMeal);
    setOrders(restProducts);
  };

  const shopInfo = { handleAddToCart, orders, removeProduct };
  return (
    <div>
      <ShopContexts.Provider value={shopInfo}>{children}</ShopContexts.Provider>
    </div>
  );
};

export default ShopContext;
