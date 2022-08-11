import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Global Reset */
* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
/* Global Styles */
body, html {
    transition: background 0.2s ease-in, color 0.2s ease-in;
    font-size: 1rem;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.white};
}

@media (min-width: 768px) {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
}

a {
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;