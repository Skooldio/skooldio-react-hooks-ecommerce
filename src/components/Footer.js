import styled from 'styled-components';

import BaseContainer from './Container';

const Wrapper = styled.div`
  background-color: black;
`;

const Container = styled(BaseContainer)`
  display: flex;
  align-items: center;
  color: white;
  height: 72px;
`;

export const Footer = () => (
  <Wrapper>
    <Container> Privacy Policy | Terms and Conditions</Container>
  </Wrapper>
);

export default Footer;
