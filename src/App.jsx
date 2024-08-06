import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import Router from "router/Router";
import ToastContainerPart from "utils/ToastContainerPart";
import getTheme from "./mui/theme";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={getTheme(darkMode)}>
      <CssBaseline />
      <BrowserRouter>
        <Router setDarkMode={setDarkMode} darkMode={darkMode} />
        <ToastContainerPart />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
