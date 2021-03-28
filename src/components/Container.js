import styled from 'styled-components';

const Container = styled.div`
  padding: 0 8px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 24px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 0 32px;
  }
`;

export default Container;
