import React, { useEffect, useState} from "react";
import ProductsApi from "../../services/ProductsApi";
import ProductsList from "../productsList/ProductsList";
import View from "../view/View";
import "./main.scss";
import { SquareLoader } from "react-spinners";
import Pagination from "../pagination/Pagination";
import handleLikeClick from "../../services/ProductService";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(4);

  useEffect(() => {
    setLoading(true);
      ProductsApi.fetchAllProducts().then((data) => setProducts(data));
      setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="product">
      <View />
      <div className="product-wrapper">
        {loading ? (
          <div className="loader">
            <SquareLoader color="#333333" size={100} />
          </div>
        ) : (
          <ProductsList
            products={currentPosts}
            handleLikeClick={handleLikeClick}
          />
        )}
        <Pagination
          productPerPage={productPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>
    </section>
  );
};

export default Main;
