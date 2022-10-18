import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const productsData = useLoaderData().meals;
  return (
    <div className="lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {productsData.map((product) => (
          <Product key={product.idMeal} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
