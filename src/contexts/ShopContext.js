import React, { createContext } from "react";
import { useState } from "react";

export const ShopContexts = createContext();

/*
const addToCart = (product) => {
    let savedCart = [];
    const isExists = cart.find((p) => p.idMeal === product.idMeal);
    if (!isExists) {
      product.quantity = 1;
      savedCart = [...cart, product];
    } else {
      const remainingProducts = cart.filter((p) => p.idMeal !== product.idMeal);
      product.quantity = product.quantity + 1;
      savedCart = [...remainingProducts, isExists];
    }
    setCart(savedCart);
    localStorage.setItem("cart", JSON.stringify(savedCart));
  };
*/

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
