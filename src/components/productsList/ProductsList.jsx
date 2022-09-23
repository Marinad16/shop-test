import React from "react";
import "./productsList.scss";

const ProductsList = ({ view, products }) => {
  return (
    <ul className={!view ? `list product_list-grid` : `list product_list-list`}>
      {products.map((product) => (
        <li
          key={product.id}
          className={!view ? `product_list-grid-item` : `product_list-list-item`}
        >
          <img
            src={product.image}
            alt="product image"
            width="270px"
            height="355px"
          />
          <a href="#" className="product-title">
            {product.title}
          </a>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">{product.price} $</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;