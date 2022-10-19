import React from "react";
import { Link } from "react-router-dom";

const ProductCategory = ({ category }) => {
  const { strCategory, strCategoryThumb } = category;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="bg-amber-100/50">
          <img src={strCategoryThumb} alt={strCategory} />
        </figure>
        <div className="card-body bg-amber-200 hover:bg-amber-300 transition-all">
          <Link
            to={`/category/${strCategory}`}
            className="text-center text-xl font-semibold"
          >
            {strCategory}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
