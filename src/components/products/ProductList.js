import React, { useState, useEffect } from "react";

export const ProductList = () => {
  const [products, assignProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/products?_expand=productType&?_sort=productType")
      .then((res) => res.json())
      .then((productArray) => {
        assignProducts(productArray);
      });
  }, []);

  return (
    <div>
      {products.map((productObject) => {
        return (
          <p key={`product--${productObject.id}`}>
            {productObject.name} {" "} 
            {productObject.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}
            {" "}
            Category: {productObject.productType.type}
          </p>
        );
      })}
    </div>
  );
};
