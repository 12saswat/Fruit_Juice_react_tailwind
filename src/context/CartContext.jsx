import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Each item can be an object like { id, name, qty, price }
  const [favorites, setFavorites] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const addToFavorites = (item) => {
    // Avoid duplicates
    setFavorites((prev) =>
      prev.find((fav) => fav.id === item.id) ? prev : [...prev, item]
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        favorites,
        addToCart,
        addToFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
