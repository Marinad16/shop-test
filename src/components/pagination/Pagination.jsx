import React from "react";
import { NavLink } from "react-router-dom";
import "./pagination.scss";

const Pagination = ({ productPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
    pageNumbers.push(i);
  }

  //   const setActiveLink = ({ isActive }) =>
  //     isActive ? `page-link active-link` : `page-link`;

  return (
    <nav>
      <ul className="list pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <NavLink
              onClick={() => paginate(number)}
              to={`?page=${number}`}
              className="page-link"
            >
              {number}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
