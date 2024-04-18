import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
