import React from "react";

const Product = ({ name, price, description }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;
