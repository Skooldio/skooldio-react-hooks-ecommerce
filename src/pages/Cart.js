import styled from 'styled-components';

import BaseContainer from '../components/Container';
import Button from '../components/Button';
import CartItemList from '../components/CartItemList';

import { products } from '../data';

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  padding-top: 78px;
  padding-bottom: 78px;
`;

const Title = styled.h1`
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
`;

const CheckOutButton = styled(Button)`
  align-self: flex-end;
  margin-top: 64px;
`;

/**
 * Below is the main Cart component.
 */
export const Cart = () => (
  <Container>
    <Title>My Cart</Title>
    <CartItemList data={products} />
    <CheckOutButton>Check out</CheckOutButton>
  </Container>
);

export default Cart;
