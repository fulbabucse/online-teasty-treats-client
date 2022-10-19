import React, { createContext } from "react";
import { useState } from "react";

export const ShopContexts = createContext();

const ShopContext = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const handleAddToCart = (product) => {
    let savedProducts = [];
    const isExitsProducts = orders.find(
      (item) => item.idMeal === product.idMeal
    );
    if (!isExitsProducts) {
      savedProducts = [...orders, product];
    } else {
      const remainingProducts = orders.filter(
        (item) => item.idMeal !== product.idMeal
      );
      savedProducts = [...remainingProducts, isExitsProducts];
    }
    setOrders(savedProducts);
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
