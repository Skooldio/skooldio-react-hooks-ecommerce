import styled from 'styled-components';

import BaseContainer from './Container';
import ProductItem from './ProductItem';

const Container = styled(BaseContainer)`
  padding-top: 32px;
  padding-bottom: 120px;

  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  @media screen and (min-width: 512px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

/**
 * Below is the main ProductList component.
 */
export const ProductList = ({ data = [] }) => (
  <Container>
    {data.map((product) => (
      <ProductItem key={product.id} data={product} />
    ))}
  </Container>
);

export default ProductList;
