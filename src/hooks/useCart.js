import { useState, useEffect } from 'react';

export const useCart = () => {
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
  return { cartItems, addCartItem, removeCartItem, updateQuantity };
};

export default useCart;
