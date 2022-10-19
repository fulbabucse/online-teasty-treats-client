import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { ShopContexts } from "../../contexts/ShopContext";

const SingleItem = ({ item }) => {
  const { removeProduct } = useContext(ShopContexts);
  const { idMeal, strMeal, strMealThumb } = item;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="px-2">
      <div className="bg-gray-100 w-full lg:w-2/4 mx-auto rounded-md flex items-center p-1 lg:p-3 gap-3">
        <div>
          <img
            className="w-12 h-10 lg:w-24 lg:h-20 rounded-md"
            src={strMealThumb}
            alt={strMeal}
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <div>
            <h4 className="text-sm lg:text-xl font-semibold">{strMeal}</h4>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-6">
              {quantity === 0 ? (
                <button className="bg-transparent btn-disabled">
                  <FaMinus className="text-lg"></FaMinus>
                </button>
              ) : (
                <button className="" onClick={decreaseQuantity}>
                  <FaMinus className="text-lg"></FaMinus>
                </button>
              )}
              <p className="mx-2 text-slate-600 text-xl lg:text-2xl">
                {quantity}
              </p>
              <button className="" onClick={increaseQuantity}>
                <FaPlus className="text-lg"></FaPlus>
              </button>
            </div>
            <div>
              <button onClick={() => removeProduct(idMeal)}>
                <FaTimes className="text-2xl lg:text-5xl text-red-500"></FaTimes>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
