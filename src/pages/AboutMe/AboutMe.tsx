import React from 'react';
import Title from '../../components/Title';
import Profile from '../../assets/profile.png';

import {
  Container,
  ContentContainer,
  ProfilePicture,
  Text,
  Emph,
  TextContainer,
  Link,
} from './AboutMe.styles';

const AboutMe: React.FC = () => (
  <Container>
    <Title>Sobre mim</Title>
    <ContentContainer>
      <div>
        <ProfilePicture src={Profile} alt='' />
      </div>
      <TextContainer>
        <Text>
          Sou Renan Silva, tenho 30 anos. <Emph>Formado em Design Gráfico</Emph> pela ESAMC
          Sorocaba. Trabalhei 2 anos na agência Maker.ag como Arte finalista e decidi migrar para
          Design UX em 2022.
        </Text>
        <Text>
          Concluí uma <Emph>mentoria de 6 meses</Emph> com a{' '}
          <Link href='https://www.linkedin.com/in/jullia-saad/'>Jullia Saad</Link> sobre o universo
          do Design UX e agora estou tentando ingressar no mercado como Designer UX Júnior.
        </Text>
        <Text>
          <Emph>Apaixonado por games e cultura japonesa</Emph>, adoro ler mangás e quadrinhos. Tenho
          uma paixão imensa pela história <Emph>“Valente”</Emph> do Vitor Cafaggi e adoro jogar
          Death Stranding. Atualmente tenho 8 tatuagens e pretendo fazer várias de desenhos que são
          importantes na minha vida.
        </Text>
      </TextContainer>
    </ContentContainer>
  </Container>
);

export default AboutMe;
