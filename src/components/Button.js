import styled from 'styled-components';

export const Button = styled.button`
  font-weight: bold;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  background: #000000;
  border: none;
  padding: 12px 64px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.9;
  }
`;

export default Button;
