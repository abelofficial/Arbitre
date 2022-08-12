import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-Bold.ttf');
    font-weight: bold;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-BoldItalic.ttf');
    font-weight: bold;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-Regular.ttf');
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-Italic.ttf');
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-Light.ttf');
    font-weight: 300;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-LightItalic.ttf');
    font-weight: 300;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-Medium.ttf');
    font-weight: 500;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-MediumItalic.ttf');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-Thin.ttf');
    font-weight: 200;
    font-display: fallback;
  }
  @font-face {
    font-family: Roboto;
    src: url('/fonts/roboto/Roboto-ThinItalic.ttf');
    font-weight: 200;
    font-style: italic;
    font-display: fallback;
  }
  
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
