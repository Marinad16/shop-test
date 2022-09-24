import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";
import "../index.scss";

const Layout = () => {

  return (
      <div className="page-container">
        <header>
          <Header />
        </header>

        <main>
          <div className="container">
            <Menu />
            <Outlet />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
  );
};

export default Layout;
