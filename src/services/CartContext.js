  import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

// Define the initial cart items outside the component
const initialCartItems = [];

// Create the CartContextProvider component
export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Add item to cart or update quantity
  const addToCart = (product) => {
    console.log(cartItems)
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
