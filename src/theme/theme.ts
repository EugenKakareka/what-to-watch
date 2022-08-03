import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#494b57",
      main: "#21232e",
      dark: "#000004",
      contrastText: "#f0f0f0",
    },
    secondary: {
      light: "#ffffff",
      main: "#f0f0f0",
      dark: "#bebebe",
    },
  },
});

export const dark = createTheme({
  palette: {
    primary: {
      light: "#666a7c",
      main: "#3b3f50",
      dark: "#141928",
      contrastText: "#f0f0f0",
    },
    secondary: {
      light: "#494b57",
      main: "#21232e",
      dark: "#000004",
      contrastText: "#f0f0f0",
    },
  },
});
