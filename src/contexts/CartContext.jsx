
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
  

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor);
        if (existingItem) {
            setCartItems(cartItems.map(item => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const updateCartItemQuantity = (product, quantity) => {
        if (quantity <= 0) {
            removeCartItem(product);
        } else {
            setCartItems(cartItems.map(item => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor
                ? { ...item, quantity }
                : item
            ));
        }
    };

    const removeCartItem = (product) => {
        setCartItems(cartItems.filter(item => item.id !== product.id || item.selectedSize !== product.selectedSize || item.selectedColor !== product.selectedColor));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, removeCartItem }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
