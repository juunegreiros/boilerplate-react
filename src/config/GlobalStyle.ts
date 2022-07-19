import { createGlobalStyle } from 'styled-components';
import { ThemeTypes } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.purple};
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.lightPink};
  }
`;

export default GlobalStyle;
