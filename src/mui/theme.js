import { createTheme } from "@mui/material";

const getTheme = (darkMode) =>
  createTheme({
    typography: {
      fontFamily: `"YekanBakh" , "Roboto" , "Arial"`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      fontWeightHeavy: 800,
      fontWeightFat: 900,
    },
    direction: "rtl",
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

export default getTheme;
