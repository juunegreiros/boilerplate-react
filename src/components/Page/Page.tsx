import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container, Main } from './Page.styles';
import Footer from '../Footer';
import Home from '../../pages/Home';
import GlobalStyle from '../../config/GlobalStyle';
import { lightTheme, darkTheme } from '../../config/theme';
import Header from '../Header';

const Page: React.FC = () => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header theme={theme} setTheme={setTheme} />
        <Main>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </Main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Page;
