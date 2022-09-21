import React, { useEffect, useState } from "react";
import ProductsApi from "../../services/ProductsApi";
import "./main.scss"

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsApi.fetchAllProducts().then((data) => setProducts(data));
  }, []);
  console.log(products);

  return (
    <section className="product">
      <div className="veiw">
        <div className="column"></div>
        <div className="grid"></div>
      </div>
      <div className="product-wrapper">
        <ul className="list product_list">
          {products.map((product) => (
            <li key={product.id} className="product_list-item">
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
