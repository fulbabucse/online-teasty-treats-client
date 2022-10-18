import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const ProductDetailsData = useLoaderData().meals[0];
  const {
    strArea,
    strCategory,
    strMeal,
    strInstructions,
    strMealThumb,
    strTags,
    strYoutube,
  } = ProductDetailsData;

  const productImage = {
    width: "500px",
    height: "500px",
    borderRadius: "5px",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 my-7">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <img style={productImage} src={strMealThumb} alt={strMeal} />
        </div>
        <div className="text-slate-600">
          <h2 className="text-2xl font-bold uppercase">{strMeal}</h2>
          <h4 className="text-lg font-semibold">Category: {strCategory}</h4>
          <p>
            <strong>Survive Area:</strong> {strArea}
          </p>
          <p>
            <strong>Tags:</strong> {strTags ? strTags : "No Tags"}
          </p>
          <p className="text-justify">
            <strong>Instructions:</strong> {strInstructions}
          </p>
          <a
            className="text-blue-500 underline text-lg"
            href={strYoutube}
            target="blank"
          >
            Youtube Recipe Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
