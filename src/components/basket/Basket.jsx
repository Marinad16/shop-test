import React from 'react';
import { useBasket } from "../../services/BasketProvider";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./basket.scss"

const Basket = () => {
    const { basket, calculateTotalPrice, removeAllFromBasket, removeFromBasket } = useBasket();

    const handleRemoveAll = () => {
        removeAllFromBasket();
    };

    const handleRemoveItem = (productId) => {
        removeFromBasket(productId);
    };

    return (
        <div className="basket">
            <h2 className="basket_title">Shopping Basket</h2>
            {basket.length === 0 ?
                <div className="basket_title">
                    Basket is empty
                </div>
                :
                <>
                    <ul>
                        <div className="basket-delete" onClick={handleRemoveAll}>Delete all</div>
                        {basket.map((product) => (
                            <li key={product.id} className="basket_item">
                                <div>
                                    <div className="basket_item-img">
                                        <img src={product.image}
                                             alt="product image"
                                             width="270px"
                                             height="355px"
                                        />
                                    </div>
                                    <h3>{product.title} - ${product.price}</h3>
                                </div>
                                <DeleteForeverIcon className="basket_item-delete"  onClick={() => handleRemoveItem(product.id)}/>
                            </li>
                        ))}
                    </ul>
                    <p className="basket_total">Total: {`$${calculateTotalPrice()}`}</p>
                </>
            }
        </div>
    );
};

export default Basket;