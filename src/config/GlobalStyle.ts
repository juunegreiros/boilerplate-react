import { createGlobalStyle } from 'styled-components';
import { ThemeTypes } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.color100};
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.color10};
  }
`;

export default GlobalStyle;
