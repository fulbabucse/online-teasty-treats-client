import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCategory from "../ProductCategory/ProductCategory";

const Shop = () => {
  const categoriesData = useLoaderData().categories;
  return (
    <div className="lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
        {categoriesData.map((category) => (
          <ProductCategory
            key={category.idCategory}
            category={category}
          ></ProductCategory>
        ))}
      </div>
    </div>
  );
};

export default Shop;
