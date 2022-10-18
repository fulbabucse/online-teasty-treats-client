import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContexts } from "../../contexts/ShopContext";

const Product = ({ product }) => {
  const { handleAddToCart } = useContext(ShopContexts);
  const { idMeal, strMeal, strMealThumb } = product;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={strMealThumb} alt={strMeal} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strMeal}</h2>
          <div className="card-actions justify-between">
            <button
              onClick={() => handleAddToCart(product)}
              className="border py-1 text-amber-700 font-medium px-4 border-amber-300 bg-amber-200 hover:bg-amber-100 rounded-md text-md"
            >
              Cart
            </button>
            <Link to={`/product/${idMeal}`}>
              <button className="border py-1 font-medium px-4 border-amber-300 hover:bg-amber-100/50 rounded-md text-md">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
