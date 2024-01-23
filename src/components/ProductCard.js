import React from "react";
import './ProductCard.css'
export const ProductCard = (props) => {
  const { productsList } = props;
  const { name, price, image } = productsList;
  return (
    <div className="productCard">
      <img src={image} alt="" />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};
