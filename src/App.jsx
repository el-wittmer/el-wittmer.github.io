import React from "react";

import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Wave from "./components/Wave";


function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <main style={{ paddingTop: "70px" }}>
        <Hero />
        <Wave color="#C5A27D" bgColor="#ECE0D1"/> 

        <About />
        <Wave color="#F9F4EE" bgColor="#C5A27D"/> 

        <Projects />
        <Wave color="#ECE0D1" bgColor="#F9F4EE"/>  

        <Education />
        <Wave color="#F9F4EE" bgColor="#ECE0D1"/> 

        <Skills />
        <Wave color="#ECE0D1" bgColor="#F9F4EE"/>  

        <Contact />
        <Wave color="#C5A27D" bgColor="#ECE0D1"/>  

      </main>
      <Footer />
    </div>
  );
}

export default App;