import React from 'react';
import Typewriter from 'typewriter-effect';
import { Title, Text, Container, TitleEmph, TitleTypewritter } from './Home.styles';

const Home = () => (
  <Container>
    <Title>
      Oi, me chamo
      <TitleEmph>
        Renan Silva
        <span>
          e sou{' '}
          <TitleTypewritter>
            <Typewriter
              options={{
                strings: [
                  'designer gráfico.',
                  'estudante de UX/UI.',
                  'apaixonado por games.',
                  'viciado em animes.',
                  'healer.',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </TitleTypewritter>
        </span>
      </TitleEmph>
    </Title>
    <Text>
      Designer gráfico migrando para UX/UI e estou procurando obter mais experiência na área!
      Estudando diariamente conceitos de design e embarcando na jornada de projetos para me tornar
      Designer UX Júnior.
    </Text>
  </Container>
);

export default Home;
