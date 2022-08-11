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
}

@media (min-width: 768px) {
}

a {
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyles;
