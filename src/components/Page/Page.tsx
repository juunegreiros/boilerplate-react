import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container, Main } from './Page.styles';
import GlobalStyle from '../../config/GlobalStyle';
import { lightTheme, darkTheme } from '../../config/theme';
import Header from '../Header';
import Routes from '../../router/routes';

const Page: React.FC = () => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <Header theme={theme} setTheme={setTheme} />
          <Main>
            <Routes />
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Page;
