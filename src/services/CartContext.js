import React, { useState, createContext } from 'react';
import { atom, useRecoilState } from 'recoil';

export const cartItemsState = atom({
  key: 'cartItemsState',
  default: [],
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = createContext();
