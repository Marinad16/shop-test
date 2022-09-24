import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsApi from "../../services/ProductsApi";
import View from "../view/View";
import ProductsList from "../productsList/ProductsList";
import ClipLoader from "react-spinners/ClipLoader";
import handleLikeClick from "../../services/ProductService";

const CategoryList = () => {
  const category = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(true);

  const changeView = (view) => {
    setView(view);
  };

  useEffect(() => {
    setLoading(true);
    ProductsApi.fetchCategoryProducts(category.category).then((data) =>
      setCategoryProducts(data)
    );
    setLoading(false);
  }, [category]);

  return (
    <section className="product">
      <View change={changeView} />
      <div className="product-wrapper">
        {loading ? (
          <div className="loader">
            <ClipLoader color="#333333" size={200} />
          </div>
        ) : (
          <ProductsList
            products={categoryProducts}
            view={view}
            handleLikeClick={handleLikeClick}
          />
        )}
      </div>
    </section>
  );
};

export default CategoryList;
