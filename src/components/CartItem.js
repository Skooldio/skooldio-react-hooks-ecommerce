import styled from 'styled-components';

import Input from './Input';

import { numberWithCommas } from '../utils';

const TableRow = styled.tr`
  border-bottom: 1px solid #dcdcdc;
`;

const TableCell = styled.td`
  padding: 20px 0;
`;

const ItemImage = styled.img`
  display: none;
  @media screen and (min-width: 512px) {
    display: block;
    width: 140px;
    height: 140px;
    margin-right: 32px;
  }
`;

const ItemInfo = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 25px;
  line-height: 37px;
  color: #000000;
`;

const Subtitle = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  color: #838282;
`;

const DeleteButton = styled.button`
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  text-decoration: underline;
  color: #838282;
  background: none;
  border: none;
  width: fit-content;
  padding: 0;
  margin-top: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
`;

const TotalPrice = styled.div`
  font-size: 24px;
  line-height: 37px;
  font-weight: 300;
  text-align: right;
  color: #000000;
`;

/**
 * Below is the main CartItem component.
 */
export const CartItem = ({ data }) => (
  <TableRow>
    <TableCell>
      <div style={{ display: 'flex' }}>
        <ItemImage src={data.imageUrl} alt={`product ${data.name}`} />
        <ItemInfo>
          <Title>{data.name}</Title>
          <Subtitle>฿{numberWithCommas(data.price)} ต่อชิ้น</Subtitle>
          <DeleteButton>ลบ</DeleteButton>
        </ItemInfo>
      </div>
    </TableCell>

    <TableCell style={{ textAlign: 'right' }}>
      <Input type={'number'} />
    </TableCell>

    <TableCell style={{ textAlign: 'right' }}>
      <TotalPrice>฿{numberWithCommas(data.price)}</TotalPrice>
    </TableCell>
  </TableRow>
);

export default CartItem;
