import styled from 'styled-components';

import { numberWithCommas } from '../utils';
import CartItem from './CartItem';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeadCell = styled.th`
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;
  color: #000000;
  text-align: left;
`;

const SummaryTableCell = styled.td`
  font-size: 25px;
  line-height: 37px;
  font-weight: 600;
  text-align: right;
  padding: 21px 0;
  color: #000000;
`;

/**
 * Below is the main CardItemList component.
 */
export const CartItemList = ({ data, updateQuantity, removeCartItem }) => {
  const totalPrice = data.reduce((prev, cur) => prev + cur.quantity * cur.product.price, 0);
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadCell>Item</TableHeadCell>
          <TableHeadCell style={{ textAlign: 'right', width: '96px' }}>Quantity</TableHeadCell>
          <TableHeadCell style={{ textAlign: 'right', width: '180px' }}>Price</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {data.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            {...cartItem}
            updateQuantity={updateQuantity}
            removeCartItem={removeCartItem}
          />
        ))}

        <tr>
          <td></td>
          <SummaryTableCell>Total</SummaryTableCell>
          <SummaryTableCell>฿{numberWithCommas(totalPrice)}</SummaryTableCell>
        </tr>
      </tbody>
    </Table>
  );
};

export default CartItemList;
