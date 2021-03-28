import { useContext } from 'react';
import { CartContext } from '../contexts/cart';
export const useCart = () => {
  const cartContext = useContext(CartContext);
  return cartContext;
};

export default useCart;
