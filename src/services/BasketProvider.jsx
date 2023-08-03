import { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export function useBasket() {
    return useContext(BasketContext);
}

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const basketData = JSON.parse(localStorage.getItem('basket'));
        if (basketData) {
            setBasket(basketData);
        }
    }, []);

    const addToBasket = (product) => {
        setBasket((prevBasket) => {
            if (!prevBasket.some((p) => p.id === product.id)) {
                const updatedBasket = [...prevBasket, product];
                localStorage.setItem('basket', JSON.stringify(updatedBasket));
                return updatedBasket;
            }
            return prevBasket;
        });
    };

    const calculateTotalPrice = () => {
        const totalPrice = basket.reduce(
            (accumulator, item) => accumulator + item.price,
            0
        );
        return totalPrice.toFixed(2);
    };

    const removeAllFromBasket = () => {
        setBasket([]);
        localStorage.removeItem('basket');
    };

    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => {
            const updatedBasket = prevBasket.filter((item) => item.id !== productId);
            localStorage.setItem('basket', JSON.stringify(updatedBasket));
            return updatedBasket;
        });
    };

    return (
        <BasketContext.Provider value={{ basket, addToBasket, calculateTotalPrice, removeAllFromBasket, removeFromBasket }}>
            {children}
        </BasketContext.Provider>
    );
}