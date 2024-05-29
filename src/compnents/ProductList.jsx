import React from "react";
import Product from "./Product";
const ProductList = ({ products }) => {
  return (
    <div>
      <h2>List Components</h2>
      {products.map((product, index) => (
        <Product
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
