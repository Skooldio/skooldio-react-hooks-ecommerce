import CartItem from "../components/CartItem";

export const Cart = ({ data = [] }) => (
  <div>
    {data.map((cartItem) => (
      <CartItem data={cartItem} />
    ))}
  </div>
);

export default Cart;
