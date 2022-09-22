import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsApi from "../../services/ProductsApi";
import View from "../view/View";
import ProductsList from "../productsList/ProductsList";
import {SquareLoader} from "react-spinners";

const CategoryList = () => {
  const category = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
      setIsLoading(true);
      ProductsApi.fetchCategoryProducts(category.category).then((data) =>
        setCategoryProducts(data));
      setIsLoading(false);
    },
    [category]
  );

  return (
    <section className="product">
      <View />
      <div className="product-wrapper">
        {isLoading ? 
          <div className="loader">
            <SquareLoader color="#333333" size={200} />
          </div>
         : 
          <ProductsList products={categoryProducts} />
        }
      </div>
    </section>
  );
};

export default CategoryList;
