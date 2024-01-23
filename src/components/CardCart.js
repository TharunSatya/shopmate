import React from "react";
import "./CardCart.css";
export const CardCart = (props) => {
  const { productList ,onClickRemove } = props;
  const { name, price, image, id, } = productList;
  const handleDelete = () => {
   onClickRemove(id)
  };

  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button className="remove" onClick={handleDelete}>
        Remove
      </button>
    </div>
  );
};
