import React from 'react'
import { NavLink, useParams } from "react-router-dom";
import "./menu.scss"

const Menu = () => {

  const setActiveLink = ({ isActive }) =>
    (isActive ? `menu_item-link active` : `menu_item-link`);

  return (
    <div className="menu">
      <ul className="list menu_list">
        <li className="menu_item">
          <NavLink to="/all-products" className={setActiveLink}>
            All products
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink to="/liked-products" className={setActiveLink}>
            Liked products
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink to="category/electronics" className={setActiveLink}>
            Electronics
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink to="category/jewelery" className={setActiveLink}>
            Jewelery
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink to="category/mensclothing" className={setActiveLink}>
            Men's clothing
          </NavLink>
        </li>
        <li className="menu_item">
          <NavLink to="category/womensclothing" className={setActiveLink}>
            Women's clothing
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu