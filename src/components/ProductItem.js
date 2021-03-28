import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { numberWithCommas } from '../utils';

const Card = styled.div`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  color: #000000;
`;

const Category = styled.div`
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  color: #838282;
`;

/**
 * Below is the main ProductList component.
 */
export const ProductItem = ({ data }) => (
  <Link to={`/products/${data.id}`} style={{ textDecoration: 'none' }}>
    <Card>
      <Image src={data.imageUrl} />
      <Title>
        <span>{data.name}</span>
        <span>฿{numberWithCommas(data.price)}</span>
      </Title>
      <Category>{data.category}</Category>
    </Card>
  </Link>
);

export default ProductItem;
