import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import CategoryList from "./components/categoryList/CategoryList";
import Layout from "./components/Layout";
import LikedProducts from "./components/likedProducts/LikedProducts";
import Basket from "./components/basket/Basket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/all-products" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="category/:category" element={<CategoryList />} />
          <Route path="liked-products" element={<LikedProducts />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
