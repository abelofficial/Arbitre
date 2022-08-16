import styled, { css, DefaultTheme } from "styled-components";

const primaryShadow = 207 + "," + 102 + "," + 121;

export const shadows = {
  sm: `0px 2px 1px -1px rgba(${primaryShadow}, 0.2),
      0px 1px 1px 0px rgba(${primaryShadow}, 0.14),
     0px 1px 3px 0px rgba(${primaryShadow}, 0.12)`,
  md: `0px 7px 8px -4px rgba(${primaryShadow},0.2),
  0px 12px 17px 2px rgba(${primaryShadow},0.14),
  0px 5px 22px 4px rgba(${primaryShadow},0.12)`,
  lg: `0px 7px 8px -4px rgba(${primaryShadow},0.2),
    0px 12px 17px 2px rgba(${primaryShadow},0.14),
    0px 5px 22px 4px rgba(${primaryShadow},0.12)`,
};

export const dimensions = {
  borderRadius: "1rem",
  sectionWidth: "65rem",
  generalBreakpoint: "768px",
  navbarHeight: "4rem",
  breakpoints: {
    small: "576px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px",
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    white: "black",
    black: "white",
    lightGray: "#f8f8f8",
    primary: "#00bcd4",
    primaryShadow: 207 + "," + 102 + "," + 121,
    green: "#80d202",
    red: "#f12f2a",
    yellow: "#ffc000",
  },
  breakpoints: dimensions.breakpoints,
  shadows: shadows,
};

export const darkTheme: DefaultTheme = {
  colors: {
    white: "white",
    black: "black",
    lightGray: "#5f5f5f",
    primary: "#00bcd4",
    primaryShadow: 207 + "," + 102 + "," + 121,
    green: "#12852c",
    red: "#f12f2a",
    yellow: "#ffc000",
  },
  breakpoints: dimensions.breakpoints,
  shadows: shadows,
};

export const zIndex = {
  menuToggleButton: 1100,
  modal: 800,
  header: 100,
  logo: 110,
  backgroundImage: -1000,
};
