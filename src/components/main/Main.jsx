import React, { useEffect, useState } from "react";
import ProductsApi from "../../services/ProductsApi";
import ProductsList from "../productsList/ProductsList";
import View from "../view/View";
import "./main.scss";
import { SquareLoader } from "react-spinners";
import Pagination from "../pagination/Pagination";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  const changeView = (view) => {
    setView(view);
  };

  useEffect(() => {
    setLoading(true);
    console.log(loading)
    setTimeout(() => {
    ProductsApi.fetchAllProducts().then((data) => setProducts(data));
    setLoading(false);
    }, 1000)
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="product">
      <View change={changeView} />
      <div className="product-wrapper">
        {loading ? (
          <div className="loader">
            <SquareLoader color="#333333" size={100} />
          </div>
        ) : (
          <ProductsList
            products={currentPosts}
            view={view}
            loading={loading}
          />
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default Main;
