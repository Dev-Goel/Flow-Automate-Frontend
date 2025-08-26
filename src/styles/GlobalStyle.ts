import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  a { text-decoration: none; color: inherit; }
`;
