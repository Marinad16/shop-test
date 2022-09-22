import React, { useEffect, useState } from "react";
import ProductsApi from "../../services/ProductsApi";
import ProductsList from "../productsList/ProductsList";
import View from "../view/View";
import "./main.scss";
import { SquareLoader } from "react-spinners";


const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(isLoading);
    setIsLoading(true);
    ProductsApi.fetchAllProducts().then((data) => setProducts(data));
    setIsLoading(false);
  }, []);

  return (
    <section className="product">
      <View />
      <div className="product-wrapper">
        {isLoading ? 
          <div className="loader">
            <SquareLoader color="#333333" size={100} />
          </div>
        : 
          <ProductsList products={products} />
        }
      </div>
    </section>
  );
};

export default Main;
