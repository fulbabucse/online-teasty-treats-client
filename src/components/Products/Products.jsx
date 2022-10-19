import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [showMore, setShowMore] = useState(8);
  const productsData = useLoaderData().meals;

  const products = productsData.slice(0, showMore);

  const handleShowMore = () => {
    setShowMore(showMore + showMore);
  };
  return (
    <div className="px-4 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {products.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
      <div className="text-center mb-6">
        <button onClick={handleShowMore} className="btn btn-sm btn-secondary">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Products;
