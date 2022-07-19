import React from 'react';
import { PageProps } from './Page.types';
import { Container, Main } from './Page.styles';
import Footer from '../Footer';

const Page: React.FC<PageProps> = ({ children }) => (
  <Container>
    <header> the header</header>
    <Main>{children}</Main>
    <Footer />
  </Container>
);

export default Page;
