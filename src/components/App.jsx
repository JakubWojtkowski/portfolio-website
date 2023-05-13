import React from "react";
import Fade from "react-reveal/Fade";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contact";
import Intro from "./Intro";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Nav />

      <Fade bottom distance="20%" duration={2000}>
        <Intro />
        <About />

        <Contact />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
