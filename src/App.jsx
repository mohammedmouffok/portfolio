import "./App.css";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import AOS from 'aos'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router";


import Main from './component/use/Main'
import Projects from './component/use/Projects'

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
});

function Portfolio() {
  return (
    <BrowserRouter basename="/portfolio" >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  )
}

///////////////////////////////////////::

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init();
  }, []);
  return (
    <div className="items-center scroll-smooth">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Portfolio />
      </ThemeProvider>
    </div>
  );
}

export default App;
