import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const cartItemsString = window.localStorage.getItem('cartItems');
    const cart = cartItemsString ? JSON.parse(cartItemsString) : [];
    setCartItems(cart);
  }, []);

  const addCartItem = (product, quantity) => {
    const matchingCartItem = cartItems.find((cartItem) => cartItem.product.id === product.id);
    if (matchingCartItem) {
      matchingCartItem.quantity += quantity;
    } else {
      cartItems.push({ product, quantity });
    }
    setCartItems([...cartItems]);
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const removeCartItem = (productId) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.product.id !== productId);
    setCartItems(newCartItems);
    window.localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  const updateQuantity = (productId, quantity) => {
    const matchingCartItem = cartItems.find((cartItem) => cartItem.product.id === productId);
    if (!matchingCartItem) {
      return;
    }
    matchingCartItem.quantity = quantity;
    setCartItems([...cartItems]);
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  return (
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
