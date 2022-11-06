import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :root {
    font-size: 0.625rem;

    @media all and (max-width: 768px) {
      font-size: 0.546875rem;
    }
  }

  :focus {
    outline: transparent;
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
