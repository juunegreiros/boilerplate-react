import React from 'react';
import { Title, Text, Container, Link } from './Home.styles';

const Home = () => (
  <Container>
    <Title>Olá, sou o Renan Silva </Title>
    <Text>
      Senior Software Engineer na <Link href='https://routable.com/'>Routable</Link>, CEO do{' '}
      <Link href='https://github.com/toraline/'>Toraline</Link>, um projeto feito para ensinar e
      incluir novas pessoas no mercado de tecnologia, e co-organizadora do{' '}
      <Link href='https://sorocabajs.github.io/'>SorocabaJS</Link> e do{' '}
      <Link href='https://www.instagram.com/railsgirlssorocaba/'>Rails Girls Sorocaba</Link>.
    </Text>
  </Container>
);

export default Home;
