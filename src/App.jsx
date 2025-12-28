import { React, use, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"; 
import Contacts from "./components/Contact"; 
import Footer from "./components/Footer"; 

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
  <main className="bg-gray-950">
    <Hero />
    <About />
    <Skills />
    <Projects/>
    <Contacts/>
    <Footer/>
  </main>
  )
}

export default App;
