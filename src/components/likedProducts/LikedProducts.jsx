import React, { useState, useEffect } from "react";
import ProductsList from "../productsList/ProductsList";
import View from "../view/View";

const LikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [view, setView] = useState(true);

  const changeView = (view) => {
    setView(view);
  };

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("liked"));
    if (liked) {
      setLikedProducts(liked);
    }
  }, []);
  

  const handleLikeClick = (product) => {
    let liked = JSON.parse(localStorage.getItem("liked"));
    liked = liked.filter((p) => p.id !== product.id);
    localStorage.setItem("liked", JSON.stringify(liked));
  };

  return (
    <section className="product">
      <View change={changeView} />
      <div className="product-wrapper">
        <h1>Liked</h1>
        <ProductsList
          products={likedProducts}
          view={view}
          handleLikeClick={handleLikeClick}
        />
      </div>
    </section>
  );
};

export default LikedProducts;
