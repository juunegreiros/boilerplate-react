import { createGlobalStyle } from 'styled-components';
import { ThemeTypes } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeTypes }>`
  * {
    box-sizing: border-box;
    margin: 0;

    ::selection {
      color: ${({ theme }) => theme.colors.secondary};
      background: ${({ theme }) => theme.colors.green};
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: 'Montserrat', sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
    
  }
`;

export default GlobalStyle;
