import React from 'react'
import "./menu.scss"

const Menu = () => {
  return (
    <div className="menu">
      <ul className="list menu_list">
        <li className="menu_item">
          <a href="#" className="menu_item-link active">
            All products
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="menu_item-link">
            Electronics
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="menu_item-link">
            Jewelery
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="menu_item-link">
            Men's clothing
          </a>
        </li>
        <li className="menu_item">
          <a href="#" className="menu_item-link">
            Women's clothing
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu