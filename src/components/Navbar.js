import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useCart from '../hooks/useCart';

import BaseContainer from './Container';

/* --- Navbar styling Components --- */
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  height: 72px;
`;

/* --- Navbar Logo Component --- */
const NavLogo = styled.img`
  width: 88px;
  object-fit: contain;
`;

/* --- SearchInput Component --- */
const Input = styled.input`
  width: 180px;
  height: fit-content;
  padding: 12px 48px 12px 24px;
  background: #eeeded;
  border: none;
  border-radius: 50px;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

const SearchInputWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  &::after {
    content: url('/assets/images/icon-search.svg');
    width: 20px;
    height: 20px;
    position: absolute;
    right: 16px;
  }
`;

const SearchInput = () => (
  <SearchInputWrapper>
    <Input />
  </SearchInputWrapper>
);

/* --- CartIcon Component --- */
const CartIcon = styled.div`
  width: 40px;
  height: 40px;
  padding: 4px;
  margin-left: 24px;
  border-radius: 50%;
  background: ${(props) =>
    props.active
      ? `url('/assets/images/icon-cart-active.svg')`
      : `url('/assets/images/icon-cart.svg')`};
  background-size: 32px 32px;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: ${(props) => (props.active ? '#ddeefa' : 'rgba(0, 0, 0, 0.1)')};
  }
`;
CartIcon.propTypes = {
  active: PropTypes.bool,
};

/**
 * Below is the main Navbar component.
 * TODO: Set active prop of CartIcon to true if there are items in the cart.
 */
export const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <Wrapper>
      <Container>
        <Link to={'/'}>
          <NavLogo src={'/assets/images/logo.png'} alt={'logo'} />
        </Link>
        <SearchInput />
        <Link to={'/my-cart'}>
          <CartIcon active={cartItems && cartItems.length > 0} />
        </Link>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
