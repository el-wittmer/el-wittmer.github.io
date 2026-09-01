import React from "react";

import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Wave from "./components/Wave";


function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <main style={{ overflowY: "hidden" }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact /> 

      </main>
      <Footer />
    </div>
  );
}

export default App;