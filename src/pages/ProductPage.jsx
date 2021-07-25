import React from "react";
import { ProductCard } from "../components/productCard/ProductCard";
import data from "../data/product.json";
export const ProductPage = ({ product }) => {
  console.log(data);

  return (
    <div className="product-page flex f-wrap jcc ">
      {data.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};
