import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
