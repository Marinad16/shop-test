import React  from "react";
import "./productsList.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector} from "react-redux";
import {useBasket} from "../../services/BasketProvider";

const ProductsList = ({ products, handleLikeClick }) => {
  const view = useSelector(state => state.listView.view)
  const { addToBasket } = useBasket();

  return (
    <ul className={!view ? `list product_list-grid` : `list product_list-list`}>
      {products.map((product) => (
        <li
          key={product.id}
          className={!view ? `product_list-grid-item` : `product_list-list-item`}
        >
          <div className="image-wrapper">
            <img
              src={product.image}
              alt="product image"
              width="270px"
              height="355px"
            />
          </div>
          <a href="#" className="product-title">
            {product.title}
          </a>
          <div className="product_content">
            <div className="product_content-main">
              <p className="product_content-category">
                Category: {product.category}
              </p>
              <p className="product_content-price">{product.price} $</p>
            </div>
            <FavoriteBorderIcon
              className="product_content-icon"
              onClick={()=>handleLikeClick(product)}
            />
            <AddShoppingCartIcon
                className="product_content-icon"
                onClick={()=>addToBasket(product)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;