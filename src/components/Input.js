import styled from 'styled-components';

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 16px;
  display: block;
`;

const InputComponent = styled.input`
  border: 1px solid #838282;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
  height: 56px;
  width: 80px;
  font-size: 18px;

  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

/**
 * The main Input component.
 */
export const Input = ({ type, label, className, ...restProps }) => (
  <div className={className}>
    {label && <Label>{label}</Label>}
    <InputComponent type={type} {...restProps} />
  </div>
);

export default Input;
