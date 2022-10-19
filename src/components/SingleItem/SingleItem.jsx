import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { ShopContexts } from "../../contexts/ShopContext";

const SingleItem = ({ item }) => {
  const { removeProduct } = useContext(ShopContexts);
  const { idMeal, strMeal, strMealThumb } = item;
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <div className="bg-gray-100 w-3/4 lg:w-2/4 mx-auto rounded-md flex items-center p-3 gap-3">
        <div>
          <img
            className="w-24 h-20 rounded-md"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <h4 className="text-lg lg:text-xl font-semibold">{strMeal}</h4>
          </div>
          <div className="flex">
            <div className="flex items-center mr-6">
              {quantity === 0 ? (
                <button className="btn btn-disabled">
                  <FaMinus className="text-xl"></FaMinus>
                </button>
              ) : (
                <button
                  className="btn btn-success text-white"
                  onClick={decreaseQuantity}
                >
                  <FaMinus className="text-xl"></FaMinus>
                </button>
              )}
              <p className="mx-2 text-slate-600 text-2xl">{quantity}</p>
              <button className="btn btn-secondary" onClick={increaseQuantity}>
                <FaPlus className="text-xl"></FaPlus>
              </button>
            </div>
            <div>
              <button onClick={() => removeProduct(idMeal)}>
                <FaTimes className="text-5xl text-red-500"></FaTimes>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
