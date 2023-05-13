import React from "react";
import Fade from "react-reveal/Fade";
import Nav from "./Nav";
import Footer from "./Footer";
import Contact from "./Contact";
import Intro from "./Intro";

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <div className="container">
        <Fade bottom distance="20%" duration={2000}>   
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <Contact />
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default App;
