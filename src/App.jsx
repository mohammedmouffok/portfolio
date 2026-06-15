import "./App.css";
import AOS from 'aos'

import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
// import Contact from "./component/Contact"
import Hero from "./component/Hero";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"],
  },
});

///////////////////////////////////////::

function App() {
  return (
    <div className="items-center">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Hero />
        <Skills /> 
        <About />
        {/* <Projects /> */}
        {/* <Contact/> */}
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
