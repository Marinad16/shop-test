import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Menu from "./menu/Menu";
import "../index.scss"

const Layout = () => {
  return (
    <>
      <header>
          <Header />
      </header>

      <main>
        <div className="container">
          <Menu/>
          <Outlet />
        </div>
      </main>

      <footer>
          <Footer />
      </footer>
    </>
  );
};

export default Layout;
