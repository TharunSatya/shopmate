import React, { useState } from "react";
import { CardCart } from "../components";
import { useTitle } from "../hooks/useTitle";
export const Cart = () => {
    useTitle("Cart")
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];
  const [productList, setProductList] = useState(products);

  const onClickRemove = (id) => {
    setProductList(productList.filter(eachItem=>(
        eachItem.id !==id
    )))
  };

  return (
    <main>
      <section className="cart">
        <h1>Cart Items:{products.length}</h1>
        <ul>
          {productList.map((eachItem) => (
            <CardCart
              key={eachItem.id}
              productList={eachItem}
              onClickRemove={onClickRemove}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};
