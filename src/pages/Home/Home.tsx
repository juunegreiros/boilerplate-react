import React from 'react';
import { Title, Name, Text, Container, Link } from './Home.styles';

const Home = () => {
  const name = 'Juliana Negreiros.'.split('');
  return (
    <Container>
      <Title>
        Olá, sou a{' '}
        <span>
          {name.map((letter) => (
            <Name>{letter}</Name>
          ))}
        </span>
      </Title>
      <Text>
        Senior Software Engineer na <Link href='https://routable.com/'>Routable</Link> e CEO do{' '}
        <Link href='https://github.com/toraline/'>Toraline</Link>, um projeto feito para ensinar e
        incluir novas pessoas no mercado de tecnologia. Co-organizadora do{' '}
        <Link href='https://sorocabajs.github.io/'>SorocabaJS</Link> e do{' '}
        <Link href='https://www.instagram.com/railsgirlssorocaba/'>Rails Girls Sorocaba</Link>.
      </Text>
      {/* <Text>
        Se você precisa de serviços ou quer aprender a programar, entre em contato comigo e vamos
        conversar!
      </Text> */}
    </Container>
  );
};

export default Home;
