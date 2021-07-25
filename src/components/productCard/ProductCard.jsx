import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt="product-img" className="responsive-50pc" />
      <div className="flex flex-col">
        <h1 className="h3">{product.brand} </h1>
        <h2 className="h5 f-grey">{product.title}</h2>
        <span className="small bold">Price: {product.price}</span>
        <span>Idead for: {product.idealFor}</span>
        <span>Size: {product.size}</span>
      </div>
    </div>
  );
};
