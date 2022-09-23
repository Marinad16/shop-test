import React, { useEffect, useState } from "react";
import ProductsApi from "../../services/ProductsApi";
import ProductsList from "../productsList/ProductsList";
import View from "../view/View";
import "./main.scss";
import { SquareLoader } from "react-spinners";


const Main = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState(true);

  const changeView = (view) => {
    setView(view);
  }

  useEffect(() => {
    console.log(isLoading);
    setIsLoading(true);
    ProductsApi.fetchAllProducts().then((data) => setProducts(data));
    setIsLoading(false);
  }, []);

  return (
    <section className="product">
      <View change={changeView}
      />
      <div className="product-wrapper">
        {isLoading ? (
          <div className="loader">
            <SquareLoader color="#333333" size={100} />
          </div>
        ) : (
          <ProductsList products={products} view={view}/>
        )}
      </div>
    </section>
  );
};

export default Main;
