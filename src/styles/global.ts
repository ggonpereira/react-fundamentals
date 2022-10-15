import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.gray[7]}
  }
`;
