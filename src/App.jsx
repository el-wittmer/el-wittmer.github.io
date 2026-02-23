import React from "react";
import "./App.css";

import CustomNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
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
        <Wave color="#EFE1D3" bgColor="#F9F4EE"/>  

        {/* <Skills />
        <Wave color="#F9F4EE" bgColor="#EFE1D3"/>  */}

        <Contact />
        <Wave color="#C5A27D" bgColor="#EFE1D3"/>  

      </main>
      <Footer />
    </div>
  );
}

export default App;