import React from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";

const SingleItem = ({ item }) => {
  const { idMeal, strMeal, strMealThumb } = item;
  console.log(item);
  return (
    <div>
      <div className="bg-gray-100 w-2/4 mx-auto rounded-md flex items-center">
        <div>
          <img className="w-28 h-24 p-2" src={strMealThumb} alt={strMeal} />
        </div>
        <div className="w-full flex justify-between items-center p-3">
          <div>
            <h4 className="text-xl font-semibold">{strMeal}</h4>
          </div>
          <div className="flex">
            <div className="flex items-center mr-6">
              <button>
                <FaPlus className="text-xl"></FaPlus>
              </button>
              <p className="mx-2 text-slate-600 text-2xl">0</p>
              <button>
                <FaMinus className="text-xl"></FaMinus>
              </button>
            </div>
            <div>
              <button>
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
