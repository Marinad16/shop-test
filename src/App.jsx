import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import CategoryList from "./components/categoryList/CategoryList";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/all-products" element={<Main />} />
          <Route path="category/:category" element={<CategoryList />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
