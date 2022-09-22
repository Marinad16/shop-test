import React, { useEffect, useState } from "react";
import ProductsApi from "../../services/ProductsApi";
import "./main.scss";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState(true);

  useEffect(() => {
    ProductsApi.fetchAllProducts().then((data) => setProducts(data));
  }, []);

  const changeToGrid = () => {
    setView(true);
  };

  const changeToList = () => {
    setView(false);
  };

  return (
    <section className="product">
      <div className="view">
        <div className={!view ? `list active` : `list`} onClick={changeToList}>
          <span></span>
          <span></span>
        </div>
        <div className={view ? `grid active` : `grid`} onClick={changeToGrid}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="product-wrapper">
        <ul
          className={view ? `list product_list-grid` : `list product_list-list`}
        >
          {products.map((product) => (
            <li
              key={product.id}
              className={
                view ? `product_list-grid-item` : `product_list-list-item`
              }
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
      </div>
    </section>
  );
};

export default Main;
